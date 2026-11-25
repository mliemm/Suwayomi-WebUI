/*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import type { CssVarsThemeOptions } from '@mui/material/styles';
import { t } from '@lingui/core/macro';

export type TBaseTheme = {
    isCustom: boolean;
    getName: () => string;
    muiTheme: Omit<CssVarsThemeOptions, 'activeMode'>;
};

export const themes = {
    linear: {
        isCustom: false,
        getName: () => t`Linear`,
        muiTheme: {
            shape: {
                borderRadius: 6,
            },
            colorSchemes: {
                light: {
                    palette: {
                        primary: {
                            main: '#0A0A0A',
                            light: '#262626',
                            dark: '#000000',
                            contrastText: '#FFFFFF',
                        },
                        secondary: {
                            main: '#5E6AD2',
                            light: '#7C86E8',
                            dark: '#4B55B8',
                            contrastText: '#FFFFFF',
                        },
                        background: {
                            default: '#FAFAFA',
                            paper: '#FFFFFF',
                        },
                        divider: '#E5E5E5',
                        text: {
                            primary: '#171717',
                            secondary: '#525252',
                            disabled: '#A3A3A3',
                        },
                        error: {
                            main: '#DC2626',
                            contrastText: '#FFFFFF',
                        },
                        warning: {
                            main: '#B45309',
                            contrastText: '#FFFFFF',
                        },
                        success: {
                            main: '#16A34A',
                            contrastText: '#FFFFFF',
                        },
                        info: {
                            main: '#5E6AD2',
                            contrastText: '#FFFFFF',
                        },
                        action: {
                            active: '#171717',
                            hover: 'rgba(0, 0, 0, 0.04)',
                            selected: 'rgba(0, 0, 0, 0.06)',
                            disabled: '#A3A3A3',
                            disabledBackground: '#F5F5F5',
                            focus: 'rgba(94, 106, 210, 0.16)',
                        },
                    },
                },
                dark: {
                    palette: {
                        primary: {
                            main: '#EDEDED',
                            light: '#FFFFFF',
                            dark: '#C7C7C7',
                            contrastText: '#0A0A0A',
                        },
                        secondary: {
                            main: '#5E6AD2',
                            light: '#7C86E8',
                            dark: '#4B55B8',
                            contrastText: '#0A0A0A',
                        },
                        background: {
                            default: '#0A0A0A',
                            paper: '#0D0D0D',
                        },
                        divider: '#262626',
                        text: {
                            primary: '#EDEDED',
                            secondary: '#A1A1A1',
                            disabled: '#737373',
                        },
                        error: {
                            main: '#F87171',
                            contrastText: '#0A0A0A',
                        },
                        warning: {
                            main: '#FBBF24',
                            contrastText: '#0A0A0A',
                        },
                        success: {
                            main: '#4ADE80',
                            contrastText: '#0A0A0A',
                        },
                        info: {
                            main: '#5E6AD2',
                            contrastText: '#EDEDED',
                        },
                        action: {
                            active: '#EDEDED',
                            hover: 'rgba(255, 255, 255, 0.06)',
                            selected: 'rgba(255, 255, 255, 0.09)',
                            disabled: '#737373',
                            disabledBackground: '#171717',
                            focus: 'rgba(94, 106, 210, 0.24)',
                        },
                    },
                },
            },
            typography: {
                fontFamily:
                    '"Geist", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", ui-sans-serif, system-ui, sans-serif',
                fontWeightLight: 300,
                fontWeightRegular: 400,
                fontWeightMedium: 500,
                fontWeightBold: 600,
                fontSize: 13,
                htmlFontSize: 16,
                h1: {
                    fontSize: '2rem',
                    fontWeight: 600,
                    lineHeight: 1.2,
                    letterSpacing: '-0.02em',
                },
                h2: {
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    lineHeight: 1.25,
                    letterSpacing: '-0.02em',
                },
                h3: {
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    lineHeight: 1.3,
                    letterSpacing: '-0.02em',
                },
                h4: {
                    fontSize: '1rem',
                    fontWeight: 600,
                    lineHeight: 1.4,
                    letterSpacing: '-0.01em',
                },
                h5: {
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    lineHeight: 1.4,
                    letterSpacing: '-0.006em',
                },
                h6: {
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    lineHeight: 1.4,
                    letterSpacing: '-0.006em',
                },
                subtitle1: {
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    lineHeight: 1.5,
                },
                subtitle2: {
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    lineHeight: 1.5,
                },
                body1: {
                    fontSize: '0.875rem',
                    lineHeight: 1.55,
                },
                body2: {
                    fontSize: '0.8125rem',
                    lineHeight: 1.5,
                },
                button: {
                    fontSize: '0.8125rem',
                    fontWeight: 500,
                    letterSpacing: 0,
                    lineHeight: 1.2,
                    textTransform: 'none',
                },
                caption: {
                    fontSize: '0.6875rem',
                    lineHeight: 1.45,
                    letterSpacing: 0,
                },
                overline: {
                    fontSize: '0.6875rem',
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                    lineHeight: 1.4,
                    textTransform: 'none',
                },
            },
            components: {
                MuiCssBaseline: {
                    styleOverrides: {
                        body: {
                            WebkitFontSmoothing: 'antialiased',
                            MozOsxFontSmoothing: 'grayscale',
                            textRendering: 'optimizelegibility',
                        },
                        '::selection': {
                            backgroundColor: 'rgba(94, 106, 210, 0.35)',
                            color: '#FFFFFF',
                        },
                        'h1, h2, h3, h4, h5, h6': {
                            letterSpacing: '-0.02em',
                        },
                    },
                },
                MuiButtonBase: {
                    defaultProps: {
                        disableRipple: true,
                    },
                },
                MuiButton: {
                    defaultProps: {
                        disableElevation: true,
                        disableFocusRipple: true,
                        disableTouchRipple: true,
                    },
                    styleOverrides: {
                        root: ({ theme }) => ({
                            height: 36,
                            minWidth: 0,
                            padding: '0 12px',
                            borderRadius: 6,
                            fontSize: '0.8125rem',
                            fontWeight: 500,
                            lineHeight: 1.2,
                            letterSpacing: 0,
                            textTransform: 'none',
                            boxShadow: 'none',
                            transition: 'background-color 120ms ease, border-color 120ms ease, color 120ms ease',
                            '&:hover': {
                                boxShadow: 'none',
                            },
                            '&.Mui-disabled': {
                                opacity: 0.45,
                            },
                            ...theme.applyStyles('dark', {
                                color: '#EDEDED',
                            }),
                        }),
                        sizeSmall: {
                            height: 28,
                            padding: '0 8px',
                            fontSize: '0.75rem',
                        },
                        sizeLarge: {
                            height: 40,
                            padding: '0 16px',
                        },
                        contained: ({ theme }) => ({
                            backgroundColor: '#0A0A0A',
                            color: '#FFFFFF',
                            '&:hover': {
                                backgroundColor: '#262626',
                            },
                            ...theme.applyStyles('dark', {
                                backgroundColor: '#EDEDED',
                                color: '#0A0A0A',
                                '&:hover': {
                                    backgroundColor: '#D4D4D4',
                                },
                            }),
                        }),
                        outlined: ({ theme }) => ({
                            border: '1px solid #D4D4D4',
                            backgroundColor: '#FFFFFF',
                            color: '#171717',
                            '&:hover': {
                                borderColor: '#A3A3A3',
                                backgroundColor: '#F5F5F5',
                            },
                            ...theme.applyStyles('dark', {
                                border: '1px solid #333333',
                                backgroundColor: '#171717',
                                color: '#EDEDED',
                                '&:hover': {
                                    borderColor: '#444444',
                                    backgroundColor: '#1A1A1A',
                                },
                            }),
                        }),
                        text: ({ theme }) => ({
                            color: '#171717',
                            '&:hover': {
                                backgroundColor: '#F5F5F5',
                            },
                            ...theme.applyStyles('dark', {
                                color: '#EDEDED',
                                '&:hover': {
                                    backgroundColor: '#1A1A1A',
                                },
                            }),
                        }),
                    },
                },
                MuiIconButton: {
                    styleOverrides: {
                        root: ({ theme }) => ({
                            width: 32,
                            height: 32,
                            borderRadius: 6,
                            color: '#525252',
                            transition: 'background-color 120ms ease, color 120ms ease',
                            '&:hover': {
                                backgroundColor: '#F5F5F5',
                                color: '#171717',
                            },
                            '&.Mui-disabled': {
                                color: '#A3A3A3',
                            },
                            ...theme.applyStyles('dark', {
                                color: '#A1A1A1',
                                '&:hover': {
                                    backgroundColor: '#1A1A1A',
                                    color: '#EDEDED',
                                },
                                '&.Mui-disabled': {
                                    color: '#737373',
                                },
                            }),
                        }),
                        sizeSmall: {
                            width: 28,
                            height: 28,
                        },
                        sizeLarge: {
                            width: 40,
                            height: 40,
                        },
                    },
                },
                MuiSvgIcon: {
                    styleOverrides: {
                        root: {
                            fontSize: 18,
                        },
                        fontSizeSmall: {
                            fontSize: 16,
                        },
                        fontSizeLarge: {
                            fontSize: 22,
                        },
                    },
                },
                MuiAppBar: {
                    styleOverrides: {
                        root: ({ theme }) => ({
                            backgroundImage: 'none',
                            backgroundColor: 'rgba(250, 250, 250, 0.8)',
                            backdropFilter: 'saturate(180%) blur(8px)',
                            WebkitBackdropFilter: 'saturate(180%) blur(8px)',
                            borderBottom: '1px solid #E5E5E5',
                            color: '#171717',
                            boxShadow: 'none',
                            ...theme.applyStyles('dark', {
                                backgroundColor: 'rgba(10, 10, 10, 0.8)',
                                borderBottomColor: '#262626',
                                color: '#EDEDED',
                            }),
                        }),
                    },
                },
                MuiToolbar: {
                    styleOverrides: {
                        root: {
                            minHeight: 48,
                            paddingLeft: 16,
                            paddingRight: 16,
                            '@media (min-width: 600px)': {
                                minHeight: 48,
                                paddingLeft: 24,
                                paddingRight: 24,
                            },
                        },
                    },
                },
                MuiPaper: {
                    styleOverrides: {
                        root: {
                            backgroundImage: 'none',
                        },
                    },
                },
                MuiCard: {
                    styleOverrides: {
                        root: ({ theme }) => ({
                            backgroundColor: '#FFFFFF',
                            border: '1px solid #E5E5E5',
                            borderRadius: 8,
                            backgroundImage: 'none',
                            boxShadow: 'none',
                            transition: 'border-color 120ms ease',
                            '&:hover': {
                                borderColor: '#D4D4D4',
                            },
                            ...theme.applyStyles('dark', {
                                backgroundColor: '#0D0D0D',
                                borderColor: '#1F1F1F',
                                '&:hover': {
                                    borderColor: '#333333',
                                },
                            }),
                        }),
                    },
                },
                MuiCardActionArea: {
                    styleOverrides: {
                        root: {
                            borderRadius: 'inherit',
                            '&.Mui-focusVisible': {
                                outline: '1px solid #5E6AD2',
                                outlineOffset: 2,
                            },
                        },
                        focusHighlight: {
                            backgroundColor: 'transparent',
                        },
                    },
                },
                MuiCardContent: {
                    styleOverrides: {
                        root: {
                            padding: 12,
                            '&:last-child': {
                                paddingBottom: 12,
                            },
                        },
                    },
                },
                MuiDialog: {
                    styleOverrides: {
                        paper: ({ theme }) => ({
                            backgroundColor: '#FFFFFF',
                            backgroundImage: 'none',
                            border: '1px solid #E5E5E5',
                            borderRadius: 10,
                            boxShadow: '0 16px 48px rgba(0, 0, 0, 0.16)',
                            ...theme.applyStyles('dark', {
                                backgroundColor: '#111111',
                                borderColor: '#262626',
                                boxShadow: '0 16px 48px rgba(0, 0, 0, 0.55)',
                            }),
                        }),
                    },
                },
                MuiBackdrop: {
                    styleOverrides: {
                        root: {
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            backdropFilter: 'blur(4px)',
                            WebkitBackdropFilter: 'blur(4px)',
                        },
                    },
                },
                MuiMenu: {
                    styleOverrides: {
                        paper: ({ theme }) => ({
                            backgroundColor: '#FFFFFF',
                            backgroundImage: 'none',
                            border: '1px solid #E5E5E5',
                            borderRadius: 8,
                            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                            marginTop: 4,
                            ...theme.applyStyles('dark', {
                                backgroundColor: '#141414',
                                borderColor: '#262626',
                                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.45)',
                            }),
                        }),
                        list: {
                            padding: 4,
                        },
                    },
                },
                MuiMenuItem: {
                    styleOverrides: {
                        root: ({ theme }) => ({
                            minHeight: 28,
                            padding: '4px 8px',
                            borderRadius: 4,
                            fontSize: '0.8125rem',
                            gap: 8,
                            '&:hover': {
                                backgroundColor: '#F5F5F5',
                            },
                            '&.Mui-selected': {
                                backgroundColor: '#F0F0F0',
                                '&:hover': {
                                    backgroundColor: '#F5F5F5',
                                },
                            },
                            ...theme.applyStyles('dark', {
                                color: '#EDEDED',
                                '&:hover': {
                                    backgroundColor: '#1A1A1A',
                                },
                                '&.Mui-selected': {
                                    backgroundColor: '#171717',
                                    '&:hover': {
                                        backgroundColor: '#1A1A1A',
                                    },
                                },
                            }),
                        }),
                    },
                },
                MuiPopover: {
                    styleOverrides: {
                        paper: ({ theme }) => ({
                            backgroundColor: '#FFFFFF',
                            backgroundImage: 'none',
                            border: '1px solid #E5E5E5',
                            borderRadius: 8,
                            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                            ...theme.applyStyles('dark', {
                                backgroundColor: '#141414',
                                borderColor: '#262626',
                                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.45)',
                            }),
                        }),
                    },
                },
                MuiTooltip: {
                    styleOverrides: {
                        tooltip: ({ theme }) => ({
                            backgroundColor: '#FFFFFF',
                            border: '1px solid #E5E5E5',
                            borderRadius: 6,
                            color: '#171717',
                            fontSize: '0.6875rem',
                            lineHeight: 1.45,
                            padding: '4px 8px',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
                            ...theme.applyStyles('dark', {
                                backgroundColor: '#1A1A1A',
                                borderColor: '#262626',
                                color: '#EDEDED',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
                            }),
                        }),
                        arrow: ({ theme }) => ({
                            color: '#FFFFFF',
                            '&::before': {
                                border: '1px solid #E5E5E5',
                            },
                            ...theme.applyStyles('dark', {
                                color: '#1A1A1A',
                                '&::before': {
                                    borderColor: '#262626',
                                },
                            }),
                        }),
                    },
                },
                MuiTabs: {
                    styleOverrides: {
                        root: ({ theme }) => ({
                            minHeight: 36,
                            borderBottom: '1px solid #E5E5E5',
                            ...theme.applyStyles('dark', {
                                borderBottomColor: '#262626',
                            }),
                        }),
                        indicator: {
                            height: 2,
                            backgroundColor: '#5E6AD2',
                        },
                        scrollButtons: {
                            width: 28,
                        },
                    },
                },
                MuiTab: {
                    styleOverrides: {
                        root: ({ theme }) => ({
                            minHeight: 36,
                            minWidth: 0,
                            padding: '6px 12px',
                            fontSize: '0.8125rem',
                            fontWeight: 500,
                            lineHeight: 1.4,
                            letterSpacing: 0,
                            textTransform: 'none',
                            color: '#525252',
                            transition: 'color 120ms ease',
                            '&:hover': {
                                color: '#171717',
                            },
                            '&.Mui-selected': {
                                color: '#171717',
                            },
                            ...theme.applyStyles('dark', {
                                color: '#A1A1A1',
                                '&:hover': {
                                    color: '#EDEDED',
                                },
                                '&.Mui-selected': {
                                    color: '#EDEDED',
                                },
                            }),
                        }),
                    },
                },
                MuiChip: {
                    styleOverrides: {
                        root: ({ theme }) => ({
                            height: 24,
                            borderRadius: 6,
                            border: '1px solid #E5E5E5',
                            backgroundColor: '#F5F5F5',
                            color: '#525252',
                            fontSize: '0.6875rem',
                            fontWeight: 500,
                            letterSpacing: 0,
                            ...theme.applyStyles('dark', {
                                borderColor: '#262626',
                                backgroundColor: '#171717',
                                color: '#A1A1A1',
                            }),
                        }),
                        label: {
                            padding: '0 8px',
                        },
                        sizeSmall: {
                            height: 20,
                            fontSize: '0.625rem',
                        },
                        deleteIcon: {
                            width: 14,
                            height: 14,
                        },
                    },
                },
                MuiOutlinedInput: {
                    styleOverrides: {
                        root: ({ theme }) => ({
                            borderRadius: 6,
                            backgroundColor: '#FFFFFF',
                            fontSize: '0.8125rem',
                            minHeight: 36,
                            transition: 'border-color 120ms ease, box-shadow 120ms ease',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#E5E5E5',
                                borderWidth: 1,
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#D4D4D4',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#5E6AD2',
                                borderWidth: 1,
                                boxShadow: '0 0 0 1px #5E6AD2',
                            },
                            '&.Mui-disabled': {
                                backgroundColor: '#F5F5F5',
                            },
                            ...theme.applyStyles('dark', {
                                backgroundColor: '#0D0D0D',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#262626',
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#333333',
                                },
                                '&.Mui-disabled': {
                                    backgroundColor: '#171717',
                                },
                            }),
                        }),
                        input: {
                            height: '20px',
                            padding: '8px 10px',
                            '&::placeholder': {
                                color: '#737373',
                                opacity: 1,
                            },
                        },
                        sizeSmall: {
                            minHeight: 28,
                        },
                    },
                },
                MuiInputBase: {
                    styleOverrides: {
                        root: {
                            fontSize: '0.8125rem',
                        },
                        input: {
                            '&::placeholder': {
                                color: '#737373',
                                opacity: 1,
                            },
                        },
                    },
                },
                MuiInputLabel: {
                    styleOverrides: {
                        root: {
                            fontSize: '0.8125rem',
                        },
                    },
                },
                MuiFormLabel: {
                    styleOverrides: {
                        root: ({ theme }) => ({
                            marginBottom: 4,
                            color: '#525252',
                            fontSize: '0.75rem',
                            fontWeight: 500,
                            '&.Mui-focused': {
                                color: '#171717',
                            },
                            ...theme.applyStyles('dark', {
                                color: '#A1A1A1',
                                '&.Mui-focused': {
                                    color: '#EDEDED',
                                },
                            }),
                        }),
                    },
                },
                MuiFormControlLabel: {
                    styleOverrides: {
                        label: {
                            fontSize: '0.8125rem',
                        },
                    },
                },
                MuiCheckbox: {
                    styleOverrides: {
                        root: ({ theme }) => ({
                            color: '#A3A3A3',
                            '&.Mui-checked': {
                                color: '#171717',
                            },
                            ...theme.applyStyles('dark', {
                                color: '#737373',
                                '&.Mui-checked': {
                                    color: '#5E6AD2',
                                },
                            }),
                        }),
                    },
                },
                MuiRadio: {
                    styleOverrides: {
                        root: ({ theme }) => ({
                            color: '#A3A3A3',
                            '&.Mui-checked': {
                                color: '#171717',
                            },
                            ...theme.applyStyles('dark', {
                                color: '#737373',
                                '&.Mui-checked': {
                                    color: '#5E6AD2',
                                },
                            }),
                        }),
                    },
                },
                MuiSwitch: {
                    styleOverrides: {
                        root: ({ theme }) => ({
                            color: '#A3A3A3',
                            '&.Mui-checked': {
                                color: '#171717',
                            },
                            ...theme.applyStyles('dark', {
                                color: '#737373',
                                '&.Mui-checked': {
                                    color: '#5E6AD2',
                                },
                            }),
                        }),
                    },
                },
                MuiDivider: {
                    styleOverrides: {
                        root: ({ theme }) => ({
                            borderColor: '#E5E5E5',
                            ...theme.applyStyles('dark', {
                                borderColor: '#262626',
                            }),
                        }),
                    },
                },
                MuiList: {
                    styleOverrides: {
                        root: {
                            paddingTop: 0,
                            paddingBottom: 0,
                        },
                    },
                },
                MuiListItemButton: {
                    styleOverrides: {
                        root: ({ theme }) => ({
                            minHeight: 32,
                            borderRadius: 6,
                            padding: '4px 8px',
                            transition: 'background-color 120ms ease, color 120ms ease',
                            '&:hover': {
                                backgroundColor: '#F5F5F5',
                            },
                            '&.Mui-selected': {
                                backgroundColor: '#F0F0F0',
                                '&:hover': {
                                    backgroundColor: '#F5F5F5',
                                },
                            },
                            ...theme.applyStyles('dark', {
                                '&:hover': {
                                    backgroundColor: '#1A1A1A',
                                },
                                '&.Mui-selected': {
                                    backgroundColor: '#171717',
                                    '&:hover': {
                                        backgroundColor: '#1A1A1A',
                                    },
                                },
                            }),
                        }),
                    },
                },
                MuiListItemIcon: {
                    styleOverrides: {
                        root: ({ theme }) => ({
                            minWidth: 28,
                            color: '#525252',
                            ...theme.applyStyles('dark', {
                                color: '#A1A1A1',
                            }),
                        }),
                    },
                },
                MuiListItemText: {
                    styleOverrides: {
                        primary: {
                            fontSize: '0.8125rem',
                        },
                        secondary: {
                            fontSize: '0.6875rem',
                        },
                    },
                },
                MuiListSubheader: {
                    styleOverrides: {
                        root: ({ theme }) => ({
                            backgroundColor: 'transparent',
                            color: '#737373',
                            fontSize: '0.6875rem',
                            fontWeight: 500,
                            lineHeight: '28px',
                            letterSpacing: 0,
                            paddingLeft: 0,
                            paddingRight: 0,
                            ...theme.applyStyles('dark', {
                                color: '#737373',
                            }),
                        }),
                    },
                },
                MuiBadge: {
                    styleOverrides: {
                        badge: ({ theme }) => ({
                            minWidth: 16,
                            height: 16,
                            padding: '0 4px',
                            borderRadius: 4,
                            fontSize: '0.625rem',
                            fontWeight: 500,
                            fontVariantNumeric: 'tabular-nums',
                            backgroundColor: '#171717',
                            color: '#EDEDED',
                            ...theme.applyStyles('light', {
                                backgroundColor: '#171717',
                                color: '#EDEDED',
                            }),
                        }),
                    },
                },
                MuiAutocomplete: {
                    styleOverrides: {
                        paper: ({ theme }) => ({
                            backgroundColor: '#FFFFFF',
                            backgroundImage: 'none',
                            border: '1px solid #E5E5E5',
                            borderRadius: 8,
                            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                            marginTop: 4,
                            ...theme.applyStyles('dark', {
                                backgroundColor: '#141414',
                                borderColor: '#262626',
                                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.45)',
                            }),
                        }),
                        listbox: {
                            padding: 4,
                        },
                        option: ({ theme }) => ({
                            minHeight: 32,
                            padding: '4px 8px',
                            borderRadius: 4,
                            fontSize: '0.8125rem',
                            '&[aria-selected="true"]': {
                                backgroundColor: '#F0F0F0',
                            },
                            ...theme.applyStyles('dark', {
                                color: '#EDEDED',
                                '&[aria-selected="true"]': {
                                    backgroundColor: '#171717',
                                },
                            }),
                        }),
                        groupLabel: ({ theme }) => ({
                            padding: '6px 8px',
                            backgroundColor: '#FAFAFA',
                            color: '#737373',
                            fontSize: '0.6875rem',
                            fontWeight: 500,
                            lineHeight: 1.4,
                            ...theme.applyStyles('dark', {
                                backgroundColor: '#0D0D0D',
                                color: '#737373',
                            }),
                        }),
                    },
                },
                MuiSkeleton: {
                    styleOverrides: {
                        root: ({ theme }) => ({
                            backgroundColor: '#EFEFEF',
                            borderRadius: 6,
                            ...theme.applyStyles('dark', {
                                backgroundColor: '#171717',
                            }),
                        }),
                    },
                },
                MuiLink: {
                    styleOverrides: {
                        root: {
                            color: '#5E6AD2',
                            textUnderlineOffset: '3px',
                        },
                    },
                },
                MuiCircularProgress: {
                    styleOverrides: {
                        root: ({ theme }) => ({
                            color: '#737373',
                            ...theme.applyStyles('dark', {
                                color: '#A1A1A1',
                            }),
                        }),
                    },
                },
                MuiListItem: {
                    styleOverrides: {
                        root: {
                            paddingTop: 0,
                            paddingBottom: 0,
                        },
                    },
                },
            },
        },
    },
    default: {
        isCustom: false,
        getName: () => t`Default`,
        muiTheme: {
            colorSchemes: {
                light: {
                    palette: {
                        primary: {
                            main: '#5b74ef',
                        },
                        secondary: {
                            main: '#efd65b',
                        },
                    },
                },
                dark: {
                    palette: {
                        primary: {
                            main: '#5b74ef',
                        },
                        secondary: {
                            main: '#efd65b',
                        },
                    },
                },
            },
        },
    },
    lavender: {
        isCustom: false,
        getName: () => t`Lavender`,
        muiTheme: {
            colorSchemes: {
                light: {
                    palette: {
                        primary: {
                            main: '#6D41C8',
                        },
                        secondary: {
                            main: '#9bc841',
                        },
                        background: {
                            paper: '#E4D5F8',
                            default: '#EDE2FF',
                        },
                    },
                },
                dark: {
                    palette: {
                        primary: {
                            main: '#a076fd',
                        },
                        secondary: {
                            main: '#d2fd76',
                        },
                        background: {
                            paper: '#1d193b',
                            default: '#111129',
                        },
                    },
                },
            },
        },
    },
    dune: {
        isCustom: false,
        getName: () => t`Dune`,
        muiTheme: {
            colorSchemes: {
                light: {
                    palette: {
                        primary: {
                            main: '#897869',
                        },
                        secondary: {
                            main: '#697a89',
                        },
                    },
                },
                dark: {
                    palette: {
                        primary: {
                            main: '#897869',
                        },
                        secondary: {
                            main: '#697a89',
                        },
                    },
                },
            },
        },
    },
    rosegold: {
        isCustom: false,
        getName: () => t`Rosegold`,
        muiTheme: {
            colorSchemes: {
                light: {
                    palette: {
                        primary: {
                            main: '#C07F7A',
                        },
                        secondary: {
                            main: '#7ABBC0',
                        },
                        background: {
                            paper: '#EAE1E0',
                            default: '#F3EFEE',
                        },
                    },
                },
                dark: {
                    palette: {
                        primary: {
                            main: '#E9A7A1',
                        },
                        secondary: {
                            main: '#A1E3E9',
                        },
                    },
                },
            },
        },
    },
    'forest dew': {
        isCustom: false,
        getName: () => t`Forest Dew`,
        muiTheme: {
            colorSchemes: {
                light: {
                    palette: {
                        primary: {
                            main: '#53a584',
                        },
                        secondary: {
                            main: '#a55374',
                        },
                    },
                },
                dark: {
                    palette: {
                        primary: {
                            main: '#53a584',
                        },
                        secondary: {
                            main: '#a55374',
                        },
                    },
                },
            },
        },
    },
    'montain sunset': {
        isCustom: false,
        getName: () => t`Mountain Sunset`,
        muiTheme: {
            colorSchemes: {
                light: {
                    palette: {
                        primary: {
                            main: '#974258',
                        },
                        secondary: {
                            main: '#429780',
                        },
                        background: {
                            paper: '#e5d6da',
                            default: '#f7f3f4',
                        },
                    },
                },
                dark: {
                    palette: {
                        primary: {
                            main: '#c55a77',
                        },
                        secondary: {
                            main: '#5ac5a8',
                        },
                    },
                },
            },
        },
    },
    crimson: {
        isCustom: false,
        getName: () => t`Crimson`,
        muiTheme: {
            colorSchemes: {
                light: {
                    palette: {
                        primary: {
                            main: '#DC143C',
                        },
                        secondary: {
                            main: '#14DCB4',
                        },
                    },
                },
                dark: {
                    palette: {
                        primary: {
                            main: '#DC143C',
                        },
                        secondary: {
                            main: '#14DCB4',
                        },
                    },
                },
            },
        },
    },
    'minty miracles': {
        isCustom: false,
        getName: () => t`Minty Miracles`,
        muiTheme: {
            colorSchemes: {
                light: {
                    palette: {
                        primary: {
                            main: '#00c56a',
                        },
                        secondary: {
                            main: '#c5005c',
                        },
                        background: {
                            paper: '#d6eae0',
                            default: '#e9f3ee',
                        },
                    },
                },
                dark: {
                    palette: {
                        primary: {
                            main: '#5CE6A1',
                        },
                        secondary: {
                            main: '#E65CA1',
                        },
                    },
                },
            },
        },
    },
    'orange juice': {
        isCustom: false,
        getName: () => t`Orange Juice`,
        muiTheme: {
            colorSchemes: {
                light: {
                    palette: {
                        primary: {
                            main: '#e74c00',
                        },
                        secondary: {
                            main: '#009ae7',
                        },
                        background: {
                            paper: '#ede3d3',
                            default: '#f5f0e8',
                        },
                    },
                },
                dark: {
                    palette: {
                        primary: {
                            main: '#ffb546',
                        },
                        secondary: {
                            main: '#4690ff',
                        },
                    },
                },
            },
        },
    },
    'bright pink': {
        isCustom: false,
        getName: () => t`Bright Pink`,
        muiTheme: {
            colorSchemes: {
                light: {
                    palette: {
                        primary: {
                            main: '#FF007F',
                        },
                        secondary: {
                            main: '#00FF80',
                        },
                    },
                },
                dark: {
                    palette: {
                        primary: {
                            main: '#FF007F',
                        },
                        secondary: {
                            main: '#00FF80',
                        },
                    },
                },
            },
        },
    },
    veronica: {
        isCustom: false,
        getName: () => t`Veronica`,
        muiTheme: {
            colorSchemes: {
                light: {
                    palette: {
                        primary: {
                            main: '#A020F0',
                        },
                        secondary: {
                            main: '#70F020',
                        },
                    },
                },
                dark: {
                    palette: {
                        primary: {
                            main: '#A020F0',
                        },
                        secondary: {
                            main: '#70F020',
                        },
                    },
                },
            },
        },
    },
    'tree frog green': {
        isCustom: false,
        getName: () => t`Tree Frog Green`,
        muiTheme: {
            colorSchemes: {
                light: {
                    palette: {
                        primary: {
                            main: '#4f9513',
                        },
                        secondary: {
                            main: '#581395',
                        },
                        background: {
                            paper: '#dde6d0',
                            default: '#edf1e6',
                        },
                    },
                },
                dark: {
                    palette: {
                        primary: {
                            main: '#8ace31',
                        },
                        secondary: {
                            main: '#7531CE',
                        },
                    },
                },
            },
        },
    },
    'ying and yang': {
        isCustom: false,
        getName: () => t`Ying & Yang`,
        muiTheme: {
            colorSchemes: {
                light: {
                    palette: {
                        primary: {
                            main: '#000',
                        },
                        secondary: {
                            main: '#fff',
                        },
                        background: {
                            paper: '#efefef',
                            default: '#fff',
                        },
                    },
                },
                dark: {
                    palette: {
                        primary: {
                            main: '#fff',
                        },
                        secondary: {
                            main: '#000',
                        },
                    },
                },
            },
        },
    },
} as const satisfies Record<string, TBaseTheme>;
