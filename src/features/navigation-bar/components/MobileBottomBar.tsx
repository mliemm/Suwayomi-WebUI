/*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import Paper from '@mui/material/Paper';
import { useCallback, useLayoutEffect, useRef } from 'react';
import { useResizeObserver } from '@/base/hooks/useResizeObserver.tsx';
import { useNavBarContext } from '@/features/navigation-bar/NavbarContext.tsx';
import type { NavbarItem } from '@/features/navigation-bar/NavigationBar.types.ts';
import { NavigationBarItem } from '@/features/navigation-bar/components/NavigationBarItem.tsx';
import Stack from '@mui/material/Stack';

export const MobileBottomBar = ({ navBarItems }: { navBarItems: NavbarItem[] }) => {
    const { setBottomBarHeight } = useNavBarContext();

    const ref = useRef<HTMLDivElement | null>(null);
    useResizeObserver(
        ref,
        useCallback(() => setBottomBarHeight(ref.current?.clientHeight ?? 0), [ref.current]),
    );
    useLayoutEffect(() => () => setBottomBarHeight(0), []);

    return (
        <Paper
            ref={ref}
            elevation={0}
            square
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                pb: 'env(safe-area-inset-bottom)',
                pl: 'env(safe-area-inset-left)',
                pr: 'env(safe-area-inset-right)',
                zIndex: (theme) => theme.zIndex.drawer - 1,
                backgroundColor: 'rgba(10, 10, 10, 0.92)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                borderTop: '1px solid #262626',
                backgroundImage: 'none',
            }}
        >
            <Stack sx={{ flexDirection: 'row', alignItems: 'stretch' }}>
                {navBarItems.map((item) => (
                    <NavigationBarItem key={item.path} {...item} isCollapsed isMobileBottomBar />
                ))}
            </Stack>
        </Paper>
    );
};
