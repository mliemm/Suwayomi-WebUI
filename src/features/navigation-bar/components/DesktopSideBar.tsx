/*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import { Fragment, useCallback, useRef } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useGetOptionForDirection } from '@/features/theme/services/ThemeCreator.ts';
import { useNavBarContext } from '@/features/navigation-bar/NavbarContext.tsx';
import { useResizeObserver } from '@/base/hooks/useResizeObserver.tsx';
import { NavBarItemMoreGroup, type NavbarItem } from '@/features/navigation-bar/NavigationBar.types.ts';
import { NavigationBarItem } from '@/features/navigation-bar/components/NavigationBarItem.tsx';
import { MediaQuery } from '@/base/utils/MediaQuery.tsx';

const MIN_WIDTH_COLLAPSED = 56;
const MAX_WIDTH_COLLAPSED = 56;
const MIN_WIDTH_EXTENDED = 232;
const MAX_WIDTH_EXTENDED = 232;

const SIDEBAR_TOP_BAR_HEIGHT = 48;

export const DesktopSideBar = ({ navBarItems }: { navBarItems: NavbarItem[] }) => {
    const { isCollapsed, setIsCollapsed, navBarWidth, setNavBarWidth } = useNavBarContext();
    const isMobileWidth = MediaQuery.useIsMobileWidth();
    const isTabletWidth = MediaQuery.useIsTabletWidth();
    const getOptionForDirection = useGetOptionForDirection();

    const ref = useRef<HTMLDivElement | null>(null);
    useResizeObserver(
        ref,
        useCallback(() => setNavBarWidth(ref.current?.clientWidth ?? 0), [ref.current]),
    );

    const isCollapsible = !isMobileWidth && !isTabletWidth;
    const finalIsCollapsed = !isCollapsible || isCollapsed;

    return (
        <Drawer
            variant="permanent"
            sx={{
                '& .MuiDrawer-paper': {
                    zIndex: (theme) => theme.zIndex.drawer - 1,
                    backgroundColor: '#0A0A0A',
                    backgroundImage: 'none',
                    borderRight: '1px solid #262626',
                    overflowX: 'hidden',
                },
            }}
            style={{
                width: navBarWidth,
            }}
            slotProps={{
                paper: {
                    ref,
                },
            }}
        >
            <Box
                sx={{
                    pt: 'env(safe-area-inset-top)',
                    pl: 'env(safe-area-inset-left)',
                    minWidth: finalIsCollapsed ? MIN_WIDTH_COLLAPSED : MIN_WIDTH_EXTENDED,
                    maxWidth: finalIsCollapsed ? MAX_WIDTH_COLLAPSED : MAX_WIDTH_EXTENDED,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                }}
            >
                <Stack
                    sx={{
                        flexShrink: 0,
                        height: SIDEBAR_TOP_BAR_HEIGHT,
                        alignItems: 'center',
                        justifyContent: finalIsCollapsed ? 'center' : 'space-between',
                        flexDirection: 'row',
                        px: finalIsCollapsed ? 0 : 1.5,
                        borderBottom: '1px solid',
                        borderColor: 'divider',
                    }}
                >
                    {!finalIsCollapsed && (
                        <Stack sx={{ alignItems: 'center', gap: 1, flexDirection: 'row', minWidth: 0 }}>
                            <Box
                                component="img"
                                src="/favicon.svg"
                                alt=""
                                sx={{ width: 18, height: 18, borderRadius: '50%', flexShrink: 0 }}
                            />
                            <Typography
                                variant="h6"
                                noWrap
                                sx={{ fontSize: 13, fontWeight: 600, letterSpacing: '-0.01em' }}
                            >
                                Suwayomi
                            </Typography>
                        </Stack>
                    )}
                    <IconButton
                        size="small"
                        aria-label={finalIsCollapsed ? 'expand sidebar' : 'collapse sidebar'}
                        onClick={() => setIsCollapsed(!finalIsCollapsed)}
                        sx={{ flexShrink: 0 }}
                    >
                        {getOptionForDirection(
                            finalIsCollapsed ? <ChevronRightIcon fontSize="small" /> : <ChevronLeftIcon fontSize="small" />,
                            finalIsCollapsed ? <ChevronLeftIcon fontSize="small" /> : <ChevronRightIcon fontSize="small" />,
                        )}
                    </IconButton>
                </Stack>
                <Box sx={{ flexGrow: 1, overflowY: 'auto', overflowX: 'hidden' }}>
                    <List sx={{ p: 1, display: 'flex', flexDirection: 'column', gap: 0.25 }}>
                        {navBarItems.map((navBarItem, index) => {
                            const previousItem = navBarItems[index - 1];
                            const startsSettingsGroup =
                                !!previousItem &&
                                previousItem.moreGroup !== NavBarItemMoreGroup.SETTING_INFO &&
                                navBarItem.moreGroup === NavBarItemMoreGroup.SETTING_INFO;

                            return (
                                <Fragment key={navBarItem.path}>
                                    {startsSettingsGroup && (
                                        <Divider sx={{ my: 0.75, mx: 0.5 }} />
                                    )}
                                    <NavigationBarItem {...navBarItem} isCollapsed={finalIsCollapsed} />
                                </Fragment>
                            );
                        })}
                    </List>
                </Box>
            </Box>
        </Drawer>
    );
};
