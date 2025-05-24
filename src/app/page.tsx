"use client";

import Form from "next/form";
import {Button} from "@/app/components/Button";
import {Input} from "@/app/components/Input";
import {useRouter} from "next/navigation";
import React, {useState} from "react";
import Link from "next/link";


export default function Home() {
    const router = useRouter();
    const [showHowToGetPlId, setShowHowToGetPlId] = useState(false)
    const [whyNoFullSearch, setWhyNoFullSearch] = useState(false)
    function searchPlaylists(formData: FormData): void {
        const query = formData.get("query") as string;
        if (!query) return;
        router.push(`playlist?q=${query}`);
    }

    function toggleHowToGetId(): void {
        setWhyNoFullSearch(false)
        setShowHowToGetPlId(!showHowToGetPlId)
    }

    function toggleWhyNoFullSearch(): void {
        setShowHowToGetPlId(false)
        setWhyNoFullSearch(!whyNoFullSearch)
    }

    return (
        <div className={'flex flex-col justify-center items-center w-full h-full'}>
            <div className={'self-start mb-5'}>Input the link to your playlist to create a deck of cards</div>

            <div className={'flex flex-row justify-between items-center w-full mb-5'}>
                <div className={'flex flex-col'}>
                    <Button onClick={toggleHowToGetId}>How to get the playlist link?</Button>
                </div>
                <div className={'flex flex-col'}>
                    <Button onClick={toggleWhyNoFullSearch}>Why no full search function?</Button>
                </div>
            </div>
            { showHowToGetPlId && <div className={'w-lg bg-gray-700 p-3 mb-5 rounded'}>Open your Playlist on Spotify and click on 'share' -{">"} 'copy link'. Paste the link into the search box below.</div>}
            { whyNoFullSearch && <div className={'w-lg bg-gray-700 p-3 mb-5 rounded'}>
                Spotify seems to not want people to use their search function outside of Spotify itself.
                The search returns <b>WAY TOO MANY GARBAGE RESULTS</b> and there is no way to filter them.
                It is also not possible to get more than 1000 results per search (which is usually not enough to find what you're looking for).
                Feel free to <Link className={"underline text-blue-600 hover:text-blue-800 visited:text-purple-600"} href={'search'}>search all playlists</Link>, but don't expect to find what you're looking for.
            </div>}

            <Form action={searchPlaylists} className={'flex flex-col justify-center items-center w-lg'}>
                <div className={'mb-8 w-full'}>
                    <Input vertical hideLabel label={"Input a Spotify Playlist ID or link"} placeholder={"Playlist Link"}
                           name={"query"}></Input>
                </div>
                <div className={'flex flex-col w-3/5'}>
                    <Button submit={true}>Search</Button>
                </div>

            </Form>
        </div>
    );
}
