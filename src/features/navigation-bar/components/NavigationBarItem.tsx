/*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import type { NavbarItem } from '@/features/navigation-bar/NavigationBar.types.ts';
import { ListItemLink } from '@/base/components/lists/ListItemLink.tsx';
import { CustomTooltip } from '@/base/components/CustomTooltip.tsx';
import { TypographyMaxLines } from '@/base/components/texts/TypographyMaxLines.tsx';
import ListItemIcon from '@mui/material/ListItemIcon';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useLocation } from 'react-router-dom';
import type { ComponentProps, ReactNode } from 'react';
import Typography from '@mui/material/Typography';
import { useLingui } from '@lingui/react/macro';
import { Badge as KitBadge } from '@mliemm/kit/web/ui/badge';

const desktopItemSx = {
    height: 32,
    minHeight: 32,
    px: 1,
    gap: 1,
    borderRadius: '6px',
    color: '#A1A1A1',
    transition: 'background-color 120ms ease, color 120ms ease',
    '&:hover': {
        backgroundColor: '#1A1A1A',
        color: '#EDEDED',
    },
    '&.Mui-selected': {
        backgroundColor: '#171717',
        color: '#EDEDED',
        boxShadow: 'inset 2px 0 0 #5E6AD2',
        '&:hover': {
            backgroundColor: '#1A1A1A',
        },
    },
} as const;

const collapsedItemSx = {
    width: 32,
    height: 32,
    minHeight: 32,
    p: 0,
    borderRadius: '6px',
    justifyContent: 'center',
    color: '#A1A1A1',
    transition: 'background-color 120ms ease, color 120ms ease',
    '&:hover': {
        backgroundColor: '#1A1A1A',
        color: '#EDEDED',
    },
    '&.Mui-selected': {
        backgroundColor: '#171717',
        color: '#EDEDED',
        boxShadow: 'inset 2px 0 0 #5E6AD2',
    },
} as const;

const mobileItemSx = {
    flexGrow: 1,
    flexBasis: 0,
    height: 52,
    minHeight: 52,
    p: 0,
    borderRadius: 0,
    color: '#737373',
    transition: 'color 120ms ease',
    '&:hover': {
        backgroundColor: 'transparent',
        color: '#EDEDED',
    },
    '&.Mui-selected': {
        backgroundColor: 'transparent',
        color: '#EDEDED',
        boxShadow: 'inset 0 2px 0 #5E6AD2',
    },
} as const;

const NavBarItemBadge = ({ count }: { count?: number }) =>
    count ? (
        <KitBadge
            variant="neutral"
            className="ml-auto h-5 min-w-5 justify-center rounded-[4px] border-border bg-elevated px-1.5 py-0 font-mono text-[10px] font-medium normal-case leading-none tracking-normal text-muted-foreground tabular-nums"
        >
            {count}
        </KitBadge>
    ) : null;

export const NavigationBarItem = ({
    path,
    title,
    IconComponent,
    SelectedIconComponent,
    useBadge,
    slots,
    isCollapsed,
    isMobileBottomBar = false,
}: NavbarItem & {
    slots?: {
        listItemLink?: Partial<ComponentProps<typeof ListItemLink>>;
    };
    isCollapsed: boolean;
    isMobileBottomBar?: boolean;
}) => {
    const { t } = useLingui();
    const location = useLocation();
    const badgeInfo = useBadge?.();

    const isActive = location.pathname.startsWith(path);
    const Icon = isActive ? SelectedIconComponent : IconComponent;
    const label = t(title);

    const content: ReactNode = (() => {
        if (isMobileBottomBar) {
            return (
                <Stack sx={{ alignItems: 'center', justifyContent: 'center', gap: 0.25, width: '100%' }}>
                    <Box sx={{ position: 'relative', display: 'flex' }}>
                        <Icon sx={{ fontSize: 18 }} />
                        {!!badgeInfo?.count && (
                            <KitBadge
                                variant="neutral"
                                className="absolute -right-2.5 -top-2 h-4 min-w-4 justify-center rounded-[4px] border-border bg-elevated px-1 py-0 font-mono text-[9px] font-medium normal-case leading-none tracking-normal text-muted-foreground tabular-nums"
                            >
                                {badgeInfo.count}
                            </KitBadge>
                        )}
                    </Box>
                    <Typography
                        component="span"
                        sx={{
                            fontSize: 10,
                            lineHeight: 1.2,
                            letterSpacing: 0,
                            fontWeight: isActive ? 500 : 400,
                            color: 'inherit',
                        }}
                    >
                        {label}
                    </Typography>
                </Stack>
            );
        }

        if (isCollapsed) {
            return (
                <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center', color: 'inherit' }}>
                    <Icon sx={{ fontSize: 16 }} />
                </ListItemIcon>
            );
        }

        return (
            <>
                <ListItemIcon sx={{ minWidth: 0, color: 'inherit' }}>
                    <Icon sx={{ fontSize: 16 }} />
                </ListItemIcon>
                <TypographyMaxLines
                    lines={1}
                    sx={{
                        fontSize: 13,
                        lineHeight: 1.4,
                        fontWeight: isActive ? 500 : 400,
                        color: 'inherit',
                        flexGrow: 1,
                    }}
                >
                    {label}
                </TypographyMaxLines>
                <NavBarItemBadge count={badgeInfo?.count} />
            </>
        );
    })();

    const item = (
        <ListItemLink
            {...slots?.listItemLink}
            selected={isActive}
            aria-label={label}
            aria-current={isActive ? 'page' : undefined}
            sx={[
                isMobileBottomBar ? mobileItemSx : isCollapsed ? collapsedItemSx : desktopItemSx,
                ...(Array.isArray(slots?.listItemLink?.sx) ? slots.listItemLink.sx : [slots?.listItemLink?.sx]),
            ]}
            to={path}
        >
            {content}
        </ListItemLink>
    );

    if (isMobileBottomBar) {
        return item;
    }

    return (
        <CustomTooltip
            title={
                <>
                    {label}
                    {!!badgeInfo?.title && (
                        <>
                            <br />
                            {badgeInfo.title}
                        </>
                    )}
                </>
            }
            placement="right"
        >
            {item}
        </CustomTooltip>
    );
};
