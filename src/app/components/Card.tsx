import './Card.scss'
import React from "react";
import {Track} from "@spotify/web-api-ts-sdk";

type Props = {
    track: Track,
}

export const Card: React.FC<Props> = ({track}) => {
    const randomColor = getRandomColor();
    return <div className={"flex flex-row gap-2 print:gap-0"}>
        <div
            className={`card card-a8 flex box-border flex-col justify-center m-0 border-10 border-stone-900 rounded-lg`}
            style={{backgroundColor: randomColor}}>
            <img alt={"spotify code"}
                 src={`https://scannables.scdn.co/uri/plain/jpeg/000000/white/640/spotify:track:${track["id"]}`}></img>
        </div>

        <div
            className={`card card-a8 flex box-border flex-col justify-center items-center m-0 border-10 border-stone-900 rounded-lg text-black text-lg font-bold`}
            style={{backgroundColor: randomColor}}>
            <div
                className={"track-date text-5xl text-center font-black mb-3"}>{(track["album"]["release_date"] as string).slice(0, 4)}</div>
            <div className={"track-name text-center"}>{track["name"]}</div>
            <div className={"track-artist text-center"}>{track["artists"][0]["name"]}</div>
        </div>
    </div>;
}

function getRandomColor() {
    return 'hsla(' + (Math.random() * 360) + ', 25%, 50%, 1)';
}