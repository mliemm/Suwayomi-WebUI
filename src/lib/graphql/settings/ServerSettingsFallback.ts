/*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import type { DocumentNode } from 'graphql';
import { visit } from 'graphql';

/**
 * Settings that were added to the server after the first r23xx builds.
 * Older servers reject the whole settings query with a FieldUndefined error
 * when any of them is selected.
 */
export const UNSUPPORTED_SERVER_SETTINGS_FIELDS = ['databaseSchema', 'hikariMaxPoolSize'] as const;

const UNSUPPORTED_SERVER_SETTINGS_FIELD_SET = new Set<string>(UNSUPPORTED_SERVER_SETTINGS_FIELDS);

type ServerSettingsFieldCapability = 'unknown' | 'supported' | 'unsupported';

let capability: ServerSettingsFieldCapability = 'unknown';

/**
 * Returns true while the capability is unknown, so a modern server always
 * gets the full query. It only turns false after an introspection result or a
 * FieldUndefined response proved that the fields are missing.
 */
export const areServerSettingsFieldsSupported = (): boolean => capability !== 'unsupported';

export const markServerSettingsFieldsSupported = (): void => {
    if (capability === 'unknown') {
        capability = 'supported';
    }
};

export const markServerSettingsFieldsUnsupported = (): void => {
    capability = 'unsupported';
};

const documentSupportCache = new WeakMap<DocumentNode, boolean>();
const strippedDocumentCache = new WeakMap<DocumentNode, DocumentNode>();

const containsUnsupportedField = (document: DocumentNode): boolean => {
    const cached = documentSupportCache.get(document);
    if (cached !== undefined) {
        return cached;
    }

    let contains = false;
    visit(document, {
        Field(node) {
            if (UNSUPPORTED_SERVER_SETTINGS_FIELD_SET.has(node.name.value)) {
                contains = true;
            }
        },
    });

    documentSupportCache.set(document, contains);
    return contains;
};

export const documentContainsUnsupportedServerSettingsFields = (document: DocumentNode): boolean =>
    containsUnsupportedField(document);

export const stripUnsupportedServerSettingsFields = (document: DocumentNode): DocumentNode => {
    const cached = strippedDocumentCache.get(document);
    if (cached) {
        return cached;
    }

    const stripped = visit(document, {
        Field(node) {
            if (UNSUPPORTED_SERVER_SETTINGS_FIELD_SET.has(node.name.value)) {
                return null;
            }
        },
    });

    strippedDocumentCache.set(document, stripped);
    return stripped;
};

/**
 * Returns the document the current server can validate. On a legacy server
 * the two unsupported fields are removed before Apollo knows about the query,
 * so the cache is written with the reduced selection set as well.
 */
export const getServerSettingsOperation = <Document extends DocumentNode>(document: Document): Document =>
    areServerSettingsFieldsSupported() ? document : (stripUnsupportedServerSettingsFields(document) as Document);

export const isUnsupportedServerSettingsFieldError = (errors: readonly { message: string }[]): boolean =>
    errors.some(
        ({ message }) =>
            message.includes('FieldUndefined') &&
            UNSUPPORTED_SERVER_SETTINGS_FIELDS.some((field) => message.includes(field)),
    );
