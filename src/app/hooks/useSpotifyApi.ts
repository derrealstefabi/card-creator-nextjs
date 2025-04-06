import {SpotifyApi} from "@spotify/web-api-ts-sdk";

export function useSpotifyApi() {
    const clientId = "cce9fcb1cb8144fa82b4e056628743af";
    const clientSecret = "55fb10793c724c119d7be1de258e604e";
    return SpotifyApi.withClientCredentials(clientId, clientSecret);
}