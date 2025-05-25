"use client";

import React from "react";
import Form from "next/form";
import {Input} from "@/app/components/Input";
import {Button} from "@/app/components/Button";
import {useBpmApi} from "@/app/hooks/useBpmApi";


export default function Home() {

    const [selectedTrack, setSelectedTrack] = React.useState<any | null>(null);
    const [allTracks, setAllTracks] = React.useState<any | null>(null);

    const {search, getTrack} = useBpmApi();

    function searchTracks(formData: FormData): void {
        const track = formData.get("track") as string;
        const artist = formData.get("artist") as string;
        search(track, artist).then(setAllTracks);
    }

    function selectTrack(track: any): void {
        getTrack(track.id).then(setSelectedTrack);
    }

    return (
        <div className={'flex flex-col justify-center items-center w-full h-full'}>
            <div className={'self-start mb-5'}>Search for a song to get some interesting stats like BPM, key, etc.</div>
            <div className={'self-start mb-5'}>This is going to use <a href={'https://getsongbpm.com/api'}>https://getsongbpm.com/api</a></div>
            <div className={'self-start mb-5'}>Under construction...</div>

            <Form action={searchTracks} className={'flex flex-col justify-center items-center w-lg'}>
                <div className={'mb-8 w-full'}>
                    <Input vertical hideLabel label={"Track name"} placeholder={"Track name"}
                           name={"track"}></Input>
                    <Input vertical hideLabel label={"Artist name"} placeholder={"Artist name"}
                           name={"artist"}></Input>
                </div>
                <div className={'flex flex-col w-3/5'}>
                    <Button submit={true}>Search</Button>
                </div>
            </Form>

            {allTracks && allTracks.map((track: any) => <div onClick={() => selectTrack(track)} className={'w-lg bg-gray-700 p-3 mb-5 rounded'}>{track.name}</div>)}
            {selectedTrack && <div className={'w-lg bg-gray-700 p-3 mb-5 rounded'}>{selectedTrack.name}</div>}
        </div>
    );
}
