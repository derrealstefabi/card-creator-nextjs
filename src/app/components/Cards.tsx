import React, {use, useState} from "react";
import {Playlist, Track} from "@spotify/web-api-ts-sdk";
import {Card} from "@/app/components/Card";
import {Button} from "@/app/components/Button";

type Props = {
    promisedPlaylist: Promise<Playlist<Track>>,
    onCancel: () => void
}

export const Cards: React.FC<Props> = ({promisedPlaylist, onCancel}) => {
    const playlist = use(promisedPlaylist);

    const [selectedFormat, setSelectedFormat] = useState('card-a8');

    function printCards() {
        changeCardFormat(selectedFormat);
        print();
    }

    function changeCardFormat(format: string) {
        document.querySelectorAll(".card").forEach(el => {
            el.classList.remove(selectedFormat);
            el.classList.add(format);
        });

        console.log("format:", format);
        if (['card-a8', 'card-poker', 'card-magic', 'card-yugioh', 'card-pokemon'].includes(format)) {
            console.log("format: landscape", format);
            document.body.classList.remove('layout-portrait');
            document.body.classList.add('layout-landscape');
        } else {
            console.log("format: portrait", format);
            document.body.classList.remove('layout-landscape');
            document.body.classList.add('layout-portrait');
        }

        setSelectedFormat(format);
    }

    return (playlist &&
        <>
            <div className={"flex flex-row  flex-wrap w-full print:hidden"}>
                <select
                    value={selectedFormat}
                    onChange={e => changeCardFormat(e.target.value)}
                    name="format">
                    <option value={"card-a9"}>A9</option>
                    <option value={"card-a8"}>A8</option>
                    <option value={"card-a7"}>A7</option>
                    <option value={"card-poker"}>Poker</option>
                    <option value={"card-magic"}>Magic</option>
                    <option value={"card-yugioh"}>Yugioh</option>
                    <option value={"card-pokemon"}>Pokemon</option>
                </select>
                <Button onClick={printCards}>Print</Button>
                <Button onClick={onCancel}>Back</Button>
            </div>
            <div className={"flex flex-row flex-wrap w-full"}>
                {playlist.tracks.items.map(
                    track => <div className={"flex flex-col"}><Card track={track.track}></Card></div>
                )}
            </div>
        </>);
}