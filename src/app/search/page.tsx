'use client';
import React, {Suspense, useState} from "react";
import {useRouter} from "next/navigation";
import {Loading} from "@/app/components/Loading";
import {PlaylistSearchResult} from "@/app/components/PlaylistSearchResult";
import {Button} from "@/app/components/Button";
import {useSpotifyApi} from "@/app/hooks/useSpotifyApi";
import Form from "next/form";
import {Input} from "@/app/components/Input";
import {PartialSearchResult} from "@spotify/web-api-ts-sdk";

function SearchParamWrapper() {
    const router = useRouter();

    const sdk = useSpotifyApi();

    const [playlists, setPlaylists] = useState<Promise<Required<Pick<PartialSearchResult, "playlists">>> | Promise<null>>(Promise.resolve(null));

    const searchPlaylists = (formData: FormData): void => {
        const query = formData.get("query") as string;
        if (!query) return;
        setPlaylists(sdk.search(query, ['playlist'], undefined, 50));
    }

    return (

        <div className={'flex flex-col justify-center items-center w-full h-full'}>
            <div className={`mb-5 flex flex-row justify-between items-center`}>
                <h2 className={`text-xl`}>Search all playlists (aka get some random playlists)</h2>
            </div>
            <Form action={searchPlaylists} className={'flex flex-col justify-center items-center w-lg'}>
                <div className={'mb-5 w-full'}>
                    <Input vertical hideLabel label={"Search for a playlist (you won't find it though)"}
                           placeholder={"Search for a playlist (you won't find it though)"}
                           name={"query"}></Input>
                </div>
                <div className={'flex flex-row justify-between items-center w-full mb-5'}>
                    <div className={'flex flex-col w-2/5'}>
                        <Button submit={true}>Search</Button>
                    </div>
                    <div className={'flex flex-col w-2/5'}>
                    <Button onClick={() => router.back()}>Go Back (pls)</Button>
                    </div>
                </div>

            </Form>
            <div className={`flex flex-col`}>
                <Suspense fallback={<Loading/>}>
                    <PlaylistSearchResult promisedPlaylists={playlists}></PlaylistSearchResult>
                </Suspense>
            </div>
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
