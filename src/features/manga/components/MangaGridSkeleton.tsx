/*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Skeleton } from '@mliemm/kit/web/ui/skeleton';

const SKELETON_KEYS = Array.from({ length: 24 }, (_, index) => `manga-skeleton-${index}`);

export const MangaGridSkeleton = ({ count = 18 }: { count?: number }) => (
    <div aria-hidden="true" className="grid w-full grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-3 p-2">
        {SKELETON_KEYS.slice(0, count).map((key) => (
            <div key={key} className="flex flex-col gap-2">
                <Skeleton className="aspect-[2/3] w-full rounded-md" />
                <Skeleton className="h-3 w-3/4 rounded-[4px]" />
                <Skeleton className="h-2.5 w-1/2 rounded-[4px]" />
            </div>
        ))}
    </div>
);
