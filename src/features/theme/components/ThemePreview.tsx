/*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useMemo } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled, ThemeProvider, useTheme } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { AwaitableComponent } from 'awaitable-component';
import Paper from '@mui/material/Paper';
import { useLingui } from '@lingui/react/macro';
import { CustomTooltip } from '@/base/components/CustomTooltip.tsx';
import { useAppThemeContext } from '@/features/theme/AppThemeContext.tsx';
import type { AppTheme } from '@/features/theme/services/AppThemes.ts';
import { createTheme } from '@/features/theme/services/ThemeCreator.ts';
import { ThemeCreationDialog } from '@/features/theme/components/CreateThemeDialog.tsx';
import { TypographyMaxLines } from '@/base/components/texts/TypographyMaxLines.tsx';
import { getErrorMessage } from '@/lib/HelperFunctions.ts';
import { ThemeFontLoader } from '@/features/theme/services/ThemeFontLoader.ts';
import { Notifications } from '@/base/notification/Notifications.ts';

const ThemePreviewBadge = styled(Box)(() => ({
    width: '10px',
    height: '14px',
}));

export const ThemePreview = ({ appTheme, onDelete }: { appTheme: AppTheme; onDelete: () => void }) => {
    const { getName } = appTheme;

    const { t } = useLingui();
    const theme = useTheme();
    const { themeMode, setAppTheme, appTheme: activeAppTheme, shouldUsePureBlackMode } = useAppThemeContext();

    const isSelected = appTheme.id === activeAppTheme;

    const muiTheme = useMemo(
        () => createTheme(themeMode, appTheme, shouldUsePureBlackMode, undefined, undefined, true),
        [appTheme, themeMode, shouldUsePureBlackMode],
    );

    return (
        <Stack
            sx={{
                justifyContent: 'center',
                alignItems: 'center',
                minWidth: '132px',
                maxWidth: '132px',
                gap: 0.75,
            }}
        >
            <ThemeProvider theme={muiTheme}>
                <Card
                    sx={{
                        width: '100%',
                        height: '156px',
                        position: 'relative',
                        backgroundColor: '#0D0D0D',
                        border: '1px solid #1F1F1F',
                        borderRadius: '8px',
                        boxShadow: isSelected ? '0 0 0 1px #5E6AD2' : 'none',
                        '&:hover': {
                            borderColor: '#333333',
                        },
                        ...theme.applyStyles('light', {
                            backgroundColor: '#FFFFFF',
                            borderColor: '#E5E5E5',
                            '&:hover': {
                                borderColor: '#D4D4D4',
                            },
                        }),
                    }}
                >
                    <CardActionArea
                        sx={{
                            height: '100%',
                            backgroundColor: 'background.default',
                        }}
                        onClick={() => {
                            const needToLoadFonts = ThemeFontLoader.hasMissing(appTheme.muiTheme);
                            if (!needToLoadFonts) {
                                setAppTheme(appTheme.id);
                                return;
                            }

                            Notifications.info(t`Loading theme fonts…`);
                            ThemeFontLoader.load(appTheme.muiTheme)
                                .then(() => setAppTheme(appTheme.id))
                                .catch((e) => Notifications.error(t`Could not load theme fonts`, getErrorMessage(e)));
                        }}
                    >
                        <Stack sx={{ height: '100%', m: 0 }}>
                            <Stack sx={{ height: '100%', gap: 1.5, p: 1.25 }}>
                                <Stack
                                    sx={{
                                        maxHeight: '16px',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: '60%',
                                            height: '12px',
                                            backgroundColor: 'primary.dark',
                                            borderRadius: '3px',
                                        }}
                                    />
                                    <Stack
                                        sx={{
                                            alignItems: 'center',
                                            gap: 1,
                                        }}
                                    >
                                        {isSelected && (
                                            <CheckCircleIcon
                                                sx={{
                                                    fontSize: 14,
                                                    color: '#5E6AD2',
                                                }}
                                            />
                                        )}
                                        {!isSelected && appTheme.isCustom && (
                                            <IconButton
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    onDelete();
                                                }}
                                                component="div"
                                                size="small"
                                            >
                                                <CustomTooltip title={t`Delete`} placement="auto">
                                                    <DeleteIcon sx={{ fontSize: 14 }} />
                                                </CustomTooltip>
                                            </IconButton>
                                        )}
                                        {appTheme.isCustom && (
                                            <IconButton
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();

                                                    AwaitableComponent.show(ThemeCreationDialog, {
                                                        mode: 'edit',
                                                        appTheme,
                                                    });
                                                }}
                                                component="div"
                                                size="small"
                                            >
                                                <CustomTooltip title={t`Edit`} placement="auto">
                                                    <EditIcon sx={{ fontSize: 14 }} />
                                                </CustomTooltip>
                                            </IconButton>
                                        )}
                                    </Stack>
                                </Stack>
                                <Paper
                                    sx={{
                                        width: '55%',
                                        height: '60%',
                                        p: 0.75,
                                        borderRadius: '4px',
                                    }}
                                >
                                    <Stack
                                        sx={{
                                            width: 'max-content',
                                            flexDirection: 'row',
                                            overflow: 'hidden',
                                            borderRadius: '3px',
                                        }}
                                    >
                                        <ThemePreviewBadge sx={{ backgroundColor: 'primary.main' }} />
                                        <ThemePreviewBadge sx={{ backgroundColor: 'secondary.main' }} />
                                    </Stack>
                                </Paper>
                            </Stack>
                            <Stack
                                sx={{
                                    height: '25%',
                                    backgroundColor: 'background.paper',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    gap: 1.5,
                                    px: 1.25,
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '14px',
                                        height: '14px',
                                        borderRadius: '50%',
                                        backgroundColor: 'primary.main',
                                    }}
                                />
                                <Box
                                    sx={{
                                        flexGrow: 1,
                                        height: '12px',
                                        borderRadius: '3px',
                                        backgroundColor: 'primary.light',
                                    }}
                                />
                            </Stack>
                        </Stack>
                    </CardActionArea>
                </Card>
            </ThemeProvider>
            <CustomTooltip title={getName()} placement="top">
                <TypographyMaxLines sx={{ maxWidth: '100%', fontSize: 12 }}>{getName()}</TypographyMaxLines>
            </CustomTooltip>
        </Stack>
    );
};
