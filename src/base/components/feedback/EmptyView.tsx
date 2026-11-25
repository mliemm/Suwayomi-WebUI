/*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { type JSX, type ReactNode, useState } from 'react';
import Typography from '@mui/material/Typography';
import type { SxProps, Theme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Collapse from '@mui/material/Collapse';
import { useLingui } from '@lingui/react/macro';
import { CircleAlert } from 'lucide-react';
import { Button as KitButton } from '@mliemm/kit/web/ui/button';
import { extractGraphqlExceptionInfo } from '@/lib/HelperFunctions.ts';
import { MUIUtil } from '@/lib/mui/MUI.util.ts';

export interface EmptyViewProps {
    message: string;
    messageExtra?: JSX.Element | string;
    retry?: () => void;
    noFaces?: boolean;
    action?: ReactNode;
    sx?: SxProps<Theme>;
}

const ExtraMessage = ({ messageExtra }: Pick<EmptyViewProps, 'messageExtra'>) => {
    const { t } = useLingui();

    const [showFullError, setShowFullError] = useState(false);

    const { isGraphqlException, graphqlError, graphqlStackTrace } = extractGraphqlExceptionInfo(messageExtra);

    if (!isGraphqlException) {
        return (
            <Typography
                variant="body2"
                sx={{ wordBreak: 'break-word', whiteSpace: 'pre-line', pointerEvents: 'all', maxWidth: 480 }}
                color="textSecondary"
            >
                {messageExtra}
            </Typography>
        );
    }

    return (
        <>
            <Stack
                sx={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography
                    variant="body2"
                    sx={{ wordBreak: 'break-word', whiteSpace: 'pre-line', pointerEvents: 'all' }}
                >
                    {graphqlError}…
                </Typography>
                <Button variant="text" onClick={() => setShowFullError(!showFullError)} sx={{ pointerEvents: 'all' }}>
                    {showFullError ? t`Show less` : t`Show more`}
                </Button>
            </Stack>
            <Collapse in={showFullError}>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ wordBreak: 'break-word', whiteSpace: 'pre-line', pointerEvents: 'all' }}
                >
                    {graphqlStackTrace}
                </Typography>
            </Collapse>
        </>
    );
};

export function EmptyView({ message, messageExtra, retry, noFaces, action, sx }: EmptyViewProps) {
    const { t } = useLingui();

    return (
        <Stack
            sx={MUIUtil.mergeSx(
                {
                    p: 3,
                    gap: 1,
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: 'fill-available',
                    maxWidth: '100%',
                    minHeight: '100%',
                    pointerEvents: 'none',
                },
                sx,
            )}
        >
            {!noFaces && <CircleAlert size={20} strokeWidth={1.5} color="#737373" />}
            <Typography
                variant="body1"
                sx={{ wordBreak: 'break-word', whiteSpace: 'pre-line', pointerEvents: 'all', fontWeight: 500 }}
            >
                {message}
            </Typography>
            <ExtraMessage messageExtra={messageExtra} />
            {retry && (
                <KitButton onClick={retry} className="pointer-events-auto mt-1">
                    {t`Retry`}
                </KitButton>
            )}
            {action}
        </Stack>
    );
}
