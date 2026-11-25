/*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import type { MessageDescriptor } from '@lingui/core';
import { msg } from '@lingui/core/macro';
import { useLingui } from '@lingui/react/macro';
import { LayoutGrid } from 'lucide-react';
import { Button } from '@mliemm/kit/web/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@mliemm/kit/web/ui/dropdown-menu';
import { GridLayout } from '@/base/Base.types.ts';
import {
    updateMetadataServerSettings,
    useMetadataServerSettings,
} from '@/features/settings/services/ServerSettingsMetadata.ts';
import { getErrorMessage } from '@/lib/HelperFunctions.ts';
import { Notifications } from '@/base/notification/Notifications.ts';

const VIEW_ITEMS: { value: GridLayout; label: MessageDescriptor }[] = [
    { value: GridLayout.Compact, label: msg`Compact grid` },
    { value: GridLayout.Comfortable, label: msg`Comfortable grid` },
    { value: GridLayout.List, label: msg`List` },
];

export const LibraryViewMenu = () => {
    const { t } = useLingui();

    const {
        settings: { gridLayout },
    } = useMetadataServerSettings();

    const currentView = gridLayout == null ? GridLayout.Compact : gridLayout;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    aria-label={t`Display`}
                    className="h-8 w-8 text-muted-foreground hover:bg-hover hover:text-foreground data-[state=open]:bg-hover data-[state=open]:text-foreground"
                >
                    <LayoutGrid className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="end"
                className="w-44 rounded-lg border-border bg-popover p-1 text-popover-foreground shadow-lg"
            >
                <DropdownMenuLabel className="px-2 py-1.5 text-[11px] font-medium text-faint">
                    {t`Display`}
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="my-1 h-px bg-border" />
                <DropdownMenuRadioGroup
                    value={String(currentView)}
                    onValueChange={(value) => {
                        updateMetadataServerSettings('gridLayout', Number(value) as GridLayout).catch((e) =>
                            Notifications.error(t`Failed to save changes`, getErrorMessage(e)),
                        );
                    }}
                >
                    {VIEW_ITEMS.map(({ value, label }) => (
                        <DropdownMenuRadioItem
                            key={value}
                            value={String(value)}
                            className="py-1.5 pl-8 pr-2 text-[13px] focus:bg-hover"
                        >
                            {t(label)}
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
