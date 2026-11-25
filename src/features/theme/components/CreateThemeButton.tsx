/*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { AwaitableComponent } from 'awaitable-component';
import { useLingui } from '@lingui/react/macro';
import { CustomTooltip } from '@/base/components/CustomTooltip.tsx';
import { ThemeCreationDialog } from '@/features/theme/components/CreateThemeDialog.tsx';
import { TypographyMaxLines } from '@/base/components/texts/TypographyMaxLines.tsx';

export const CreateThemeButton = () => {
    const { t } = useLingui();

    return (
        <Stack sx={{ alignItems: 'center', gap: 0.75, minWidth: '132px', maxWidth: '132px' }}>
            <Button
                sx={{
                    width: '100%',
                    height: '156px',
                    borderRadius: '8px',
                    border: '1px dashed',
                    borderColor: 'divider',
                    backgroundColor: 'transparent',
                    color: 'text.disabled',
                    '&:hover': {
                        borderColor: 'text.disabled',
                        backgroundColor: 'action.hover',
                        color: 'text.secondary',
                    },
                }}
                variant="outlined"
                onClick={() => {
                    AwaitableComponent.show(ThemeCreationDialog, { mode: 'create' });
                }}
            >
                <AddIcon fontSize="small" />
            </Button>
            <CustomTooltip title={t`Create theme`} placement="top">
                <TypographyMaxLines sx={{ maxWidth: '100%', fontSize: 12 }}>{t`Create theme`}</TypographyMaxLines>
            </CustomTooltip>
        </Stack>
    );
};
