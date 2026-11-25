/*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { memo, useRef } from 'react';
import { CustomTooltip } from '@/base/components/CustomTooltip.tsx';
import { SpinnerImage } from '@/base/components/SpinnerImage.tsx';
import { MangaOptionButton } from '@/features/manga/components/MangaOptionButton.tsx';
import { Mangas } from '@/features/manga/services/Mangas.ts';
import type { SpecificMangaCardProps } from '@/features/manga/Manga.types.ts';
import { TypographyMaxLines } from '@/base/components/texts/TypographyMaxLines.tsx';
import { MANGA_COVER_ASPECT_RATIO } from '@/features/manga/Manga.constants.ts';
import { MediaQuery } from '@/base/utils/MediaQuery.tsx';
import { MUIUtil } from '@/lib/mui/MUI.util.ts';

export const MangaGridCard = memo(
    ({
        manga,
        longPressBind,
        popupState,
        mangaLinkTo,
        selected,
        inLibraryIndicator,
        isInLibrary,
        handleSelection,
        continueReadingButton,
        mangaBadges,
        mode,
    }: SpecificMangaCardProps) => {
        const optionButtonRef = useRef<HTMLButtonElement>(null);

        const { id, title } = manga;

        return (
            <Link
                component={RouterLink}
                {...longPressBind(() => popupState.open(optionButtonRef.current))}
                to={mangaLinkTo}
                state={Mangas.createLocationState(manga, mode)}
                sx={MUIUtil.mergeSx(MediaQuery.preventMobileContextMenuSx(), {
                    textDecoration: 'none',
                    display: 'block',
                    color: 'text.primary',
                    '@media (hover: hover) and (pointer: fine)': {
                        '&:hover .manga-option-button': {
                            visibility: 'visible',
                            pointerEvents: 'all',
                        },
                        '&:hover .source-manga-library-state-button': {
                            display: 'inline-flex',
                        },
                        '&:hover .source-manga-library-state-indicator': {
                            display: mode === 'source' ? 'none' : 'flex',
                        },
                    },
                })}
            >
                <Card
                    sx={{
                        overflow: 'hidden',
                        borderColor: selected ? '#5E6AD2' : undefined,
                        boxShadow: selected ? '0 0 0 1px #5E6AD2' : 'none',
                        '&:hover': {
                            borderColor: selected ? '#5E6AD2' : undefined,
                        },
                    }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'stretch',
                        }}
                    >
                        <Box
                            sx={{
                                position: 'relative',
                                width: '100%',
                                aspectRatio: MANGA_COVER_ASPECT_RATIO,
                                backgroundColor: '#161616',
                                overflow: 'hidden',
                            }}
                        >
                            <SpinnerImage
                                alt={title}
                                src={Mangas.getThumbnailUrl(manga)}
                                imgSx={
                                    inLibraryIndicator && isInLibrary
                                        ? {
                                              height: '100%',
                                              width: '100%',
                                              objectFit: 'cover',
                                              filter: 'brightness(0.4)',
                                          }
                                        : {
                                              height: '100%',
                                              width: '100%',
                                              objectFit: 'cover',
                                          }
                                }
                                spinnerSx={{
                                    display: 'grid',
                                    placeItems: 'center',
                                }}
                            />
                            <Stack
                                direction="row"
                                sx={{
                                    alignItems: 'flex-start',
                                    justifyContent: 'space-between',
                                    position: 'absolute',
                                    top: 6,
                                    left: 6,
                                    right: 6,
                                    gap: 1,
                                }}
                            >
                                {mangaBadges}
                                <MangaOptionButton
                                    ref={optionButtonRef}
                                    popupState={popupState}
                                    id={id}
                                    selected={selected}
                                    handleSelection={handleSelection}
                                />
                            </Stack>
                            <Stack
                                direction="row"
                                sx={{
                                    justifyContent: 'flex-end',
                                    alignItems: 'flex-end',
                                    position: 'absolute',
                                    bottom: 6,
                                    right: 6,
                                    left: 6,
                                    gap: 1,
                                }}
                            >
                                {continueReadingButton}
                            </Stack>
                        </Box>
                        <Box
                            sx={{
                                width: '100%',
                                px: 1,
                                pt: 0.75,
                                pb: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 0.25,
                            }}
                        >
                            <CustomTooltip title={title} placement="top">
                                <TypographyMaxLines
                                    component="h3"
                                    lines={2}
                                    sx={{
                                        fontSize: 13,
                                        fontWeight: 500,
                                        lineHeight: 1.35,
                                        letterSpacing: '-0.006em',
                                        minHeight: '2.7em',
                                        color: 'text.primary',
                                    }}
                                >
                                    {title}
                                </TypographyMaxLines>
                            </CustomTooltip>
                        </Box>
                    </Box>
                </Card>
            </Link>
        );
    },
);
