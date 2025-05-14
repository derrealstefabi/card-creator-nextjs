'use client'
import {PartialSearchResult, SimplifiedPlaylist} from "@spotify/web-api-ts-sdk";
import {Button} from "@/app/components/Button";
import {use} from "react";
import {useRouter} from "next/navigation";

type Props = {
    promisedPlaylists: Promise<Required<Pick<PartialSearchResult, "playlists">>>,
}

export const PlaylistSearchResult: React.FC<Props> = ({promisedPlaylists}) => {

    const router = useRouter();
    const playlists = use(promisedPlaylists).playlists.items as SimplifiedPlaylist[];

    function selectPlaylist(playlistId: string): void {
        router.push(`playlist?id=${playlistId}`);
    }

    return <>
        {
            playlists.filter(playlist => !!playlist).map(playlist =>
                <div key={playlist.id}>
                    <div className={"flex flex-col lg:flex-row items-center mb-3 p-5 rounded-lg bg-gray-900"}>
                        <img className="block h-24 w-24 rounded-full me-7 mb-5 lg:mb-0" src={playlist.images.at(0)?.url || ""}
                             alt=""/>
                        <div className={"flex flex-col items-start me-7 mb-5 lg:mb-0"}>
                            <div><span className={'font-black'}>Name: </span>{playlist.name}</div>
                            <div><span
                                className={'font-black'}>Author: </span>{playlist.owner?.display_name ? playlist.owner?.display_name : "anonymous"}
                            </div>
                        </div>
                        <div className={`lg:ms-auto justify-self-end`}>
                            <Button onClick={() => selectPlaylist(playlist.id)}>Select Playlist</Button>
                        </div>
                    </div>
                </div>
            )
        }
    </>;
}
