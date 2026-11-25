/*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useLingui } from '@lingui/react/macro';
import { Badge as KitBadge } from '@mliemm/kit/web/ui/badge';
import type { MangaCardMode } from '@/features/manga/Manga.types.ts';
import { MediaQuery } from '@/base/utils/MediaQuery.tsx';
import { useMetadataServerSettings } from '@/features/settings/services/ServerSettingsMetadata.ts';
import { MUIUtil } from '@/lib/mui/MUI.util.ts';

const COVER_BADGE_STYLE = {
    backgroundColor: 'rgba(10, 10, 10, 0.85)',
    borderColor: '#333333',
    color: '#EDEDED',
};

const CoverBadge = ({ value }: { value: number }) => (
    <KitBadge
        variant="neutral"
        style={COVER_BADGE_STYLE}
        className="h-5 min-w-5 justify-center rounded-[4px] border px-1.5 py-0 font-mono text-[10px] font-medium normal-case leading-none tracking-normal tabular-nums"
    >
        {value}
    </KitBadge>
);

export const MangaBadges = ({
    inLibraryIndicator,
    updateLibraryState,
    isInLibrary,
    unread,
    downloadCount,
    mode,
}: {
    inLibraryIndicator?: boolean;
    updateLibraryState: () => void;
    isInLibrary: boolean;
    unread?: number;
    downloadCount?: number;
    mode: MangaCardMode;
}) => {
    const { t } = useLingui();

    const isTouchDevice = MediaQuery.useIsTouchDevice();

    const {
        settings: { showUnreadBadge, showDownloadBadge },
    } = useMetadataServerSettings();

    return (
        <Stack direction="row" sx={{ alignItems: 'flex-start', gap: 0.5, flexWrap: 'wrap', minWidth: 0 }}>
            {!isTouchDevice && inLibraryIndicator && mode === 'source' && (
                <Button
                    className="source-manga-library-state-button"
                    component="div"
                    variant="outlined"
                    size="small"
                    {...MUIUtil.preventRippleProp()}
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        updateLibraryState();
                    }}
                    sx={{
                        display: 'none',
                        height: 20,
                        minWidth: 0,
                        px: 0.75,
                        borderRadius: '5px',
                        fontSize: 10,
                        fontWeight: 500,
                        lineHeight: 1,
                        backgroundColor: 'rgba(10, 10, 10, 0.85)',
                        borderColor: '#333333',
                        color: '#EDEDED',
                        '&:hover': {
                            backgroundColor: '#1A1A1A',
                            borderColor: isInLibrary ? '#F87171' : '#444444',
                        },
                    }}
                >
                    {isInLibrary ? t`Remove from the library` : t`Add To Library`}
                </Button>
            )}
            {inLibraryIndicator && isInLibrary && (
                <Typography
                    className="source-manga-library-state-indicator"
                    sx={{
                        px: 0.75,
                        height: 20,
                        display: 'flex',
                        alignItems: 'center',
                        borderRadius: '4px',
                        border: '1px solid #333333',
                        backgroundColor: 'rgba(10, 10, 10, 0.85)',
                        color: '#EDEDED',
                        fontSize: 10,
                        fontWeight: 500,
                        lineHeight: 1,
                        whiteSpace: 'nowrap',
                    }}
                >
                    {t`In Library`}
                </Typography>
            )}
            {((showUnreadBadge && mode === 'default') || mode === 'duplicate') && (unread ?? 0) > 0 && (
                <CoverBadge value={unread!} />
            )}
            {((showDownloadBadge && mode === 'default') || mode === 'duplicate') && (downloadCount ?? 0) > 0 && (
                <CoverBadge value={downloadCount!} />
            )}
        </Stack>
    );
};
