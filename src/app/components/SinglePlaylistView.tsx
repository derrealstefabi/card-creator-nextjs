'use client';
import {Playlist, Track} from "@spotify/web-api-ts-sdk";
import {Button} from "@/app/components/Button";
import {use} from "react";

type Props = {
    promisedPlaylist: Promise<Playlist<Track>>,
    onConfirm: () => void,
    onCancel: () => void
}

export const SinglePlaylistView: React.FC<Props> = ({promisedPlaylist, onConfirm, onCancel}) => {

    const playlist = use(promisedPlaylist);

    return (
        <div className={"flex flex-col items-start"}>
            <div
                className={"flex flex-col items-start w-full pb-5 border-b-2 border-b-gray-400"}>
                <div className={"flex items-center mb-6"}>
                    <img className="block h-24 w-24 rounded-full me-5"
                         src={playlist.images.at(0)?.url || ""} alt=""/>
                    <div className={"flex flex-col items-start"}>
                        <div>Name: {playlist.name}</div>
                        <div>Author: {playlist.owner?.display_name || "anonymous"}</div>
                    </div>
                </div>
                <div className={"flex items-center w-full justify-between"}>
                    <Button onClick={onConfirm}>Create Deck</Button>
                    <Button onClick={onCancel}>Back</Button>
                </div>
            </div>


            <div className={"w-full rounded-b-lg bg-gray-700 divide-y-1 divide-gray-400"}>
                {playlist.tracks.items.filter(item => !!item).map(playlistedTrack => {
                        const track = playlistedTrack.track as Track;
                        return (
                            <div key={track.id} className={"flex items-center mb-0 p-2"}>
                                <img className="block h-12 w-12 rounded-full me-5"
                                     src={track.album.images.at(0)?.url || ""} alt=""/>
                                <div className={"flex flex-col items-start"}>
                                    <div className={`font-bold`}>{track.name}</div>
                                    <div>{track.artists.at(0)?.name || "unknown artist"}</div>
                                </div>
                            </div>
                        )
                    }
                )}
            </div>
        </div>
    );
}
