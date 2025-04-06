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
                className={"flex flex-col items-start w-full p-5 rounded-t-lg bg-gray-500 border-b-2 border-b-gray-400"}>
                <div className={"flex items-center mb-6"}>
                    <img className="block h-24 w-24 rounded-full me-5"
                         src={playlist.images.at(0)?.url || ""} alt=""/>
                    <div className={"flex flex-col items-start"}>
                        <div>Name: {playlist.name}</div>
                        <div>Author: {playlist.owner?.display_name || "anonymous"}</div>
                    </div>
                </div>
                <div className={"flex items-center w-full justify-between"}>
                    <Button onClick={onConfirm}>Create Deck from this Playlist</Button>
                    <Button onClick={onCancel}>Back</Button>
                </div>
            </div>


            <ul className={"rounded-b-lg bg-gray-600  divide-y-1 divide-gray-400"}>
                {playlist.tracks.items.map(playlistedTrack => {
                        const track = playlistedTrack.track as Track;
                        return <li>
                            <div className={"flex items-center mb-0 p-2"}>
                                <img className="block h-12 w-12 rounded-full me-5"
                                     src={track.album.images.at(0)?.url || ""} alt=""/>
                                <div className={"flex flex-col items-start"}>
                                    <div>{track.name}</div>
                                    <div>{track.artists.at(0)?.name || "unknown artist"}</div>
                                </div>
                            </div>
                        </li>
                    }
                )}
            </ul>
        </div>
    );
}
