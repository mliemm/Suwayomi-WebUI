/*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import type { ComponentProps } from 'react';
import { AvatarSpinner } from '@/base/components/AvatarSpinner.tsx';

export const ListCardAvatar = (props: ComponentProps<typeof AvatarSpinner>) => {
    const { slots } = props;

    return (
        <AvatarSpinner
            {...props}
            slots={{
                ...slots,
                avatarProps: {
                    ...slots?.avatarProps,
                    sx: {
                        width: 40,
                        height: 40,
                        flex: '0 0 auto',
                        background: '#161616',
                        border: '1px solid #1F1F1F',
                        borderRadius: '6px',
                        ...slots?.avatarProps?.sx,
                    },
                },
            }}
        />
    );
};
