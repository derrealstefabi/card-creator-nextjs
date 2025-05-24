"use client";

import React, {Suspense, useState} from "react";
import {SinglePlaylistView} from "@/app/components/SinglePlaylistView";
import {Cards} from "@/app/components/Cards";
import {useRouter, useSearchParams} from "next/navigation";
import {Loading} from "@/app/components/Loading";
import {useSpotifyApi} from "@/app/hooks/useSpotifyApi";

function SearchParamWrapper() {
    const searchParams = useSearchParams();

    const sdk = useSpotifyApi();
    const router = useRouter();
    const [showCards, setShowCards] = useState<boolean | null>(false);

    const query = searchParams.get('q') || '';

    if (!query) {
        router.back();
    }

    let playlistId = query;

    if (query.includes('spotify')) {
        const endIdx = query.indexOf('?') == -1 ? query.length : query.indexOf('?');
        playlistId = query.slice(query.indexOf('playlist') + 9, endIdx);
    }

    const playlist = sdk.playlists.getPlaylist(playlistId || '');

    function createCards(): void {
        setShowCards(true);
    }

    function returnToSearchResult(): void {
        router.back();
    }

    return (

            <Suspense fallback={<Loading/>}>
                {!showCards && <SinglePlaylistView promisedPlaylist={playlist} onConfirm={createCards}
                                                   onCancel={returnToSearchResult}></SinglePlaylistView>}
                {!!showCards && <Cards promisedPlaylist={playlist}
                                       onCancel={returnToSearchResult}></Cards>}
            </Suspense>
    );
}

export default function Playlist() {
    return (
        <Suspense fallback={<Loading/>}>
            <SearchParamWrapper></SearchParamWrapper>
        </Suspense>
    );
}
