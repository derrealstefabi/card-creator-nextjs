'use client';
import React, {Suspense} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import {Loading} from "@/app/components/Loading";
import {PlaylistSearchResult} from "@/app/components/PlaylistSearchResult";
import {Button} from "@/app/components/Button";
import {useSpotifyApi} from "@/app/hooks/useSpotifyApi";

function SearchParamWrapper() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const sdk = useSpotifyApi();

    const query = searchParams.get('q') || '';

    if (!query) {
        router.back();
    }

    const playlists = sdk.search(query, ['playlist']);

    return (
        <div className={`flex flex-col`}>
            <div className={`mb-5 flex flex-row justify-between items-center`}>
                <h2 className={`text-xl`}>Results for search {query}</h2>
                <Button onClick={() => router.back()}>Back to search</Button>
            </div>
            <Suspense fallback={<Loading/>}>
                <PlaylistSearchResult promisedPlaylists={playlists}></PlaylistSearchResult>
            </Suspense>
        </div>
    );
}

export default function Search() {
    return (
        <Suspense fallback={<Loading/>}>
            <SearchParamWrapper></SearchParamWrapper>
        </Suspense>
    );
}
