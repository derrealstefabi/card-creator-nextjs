import {SpotifyApi} from "@spotify/web-api-ts-sdk";

export function useSpotifyApi() {
    const clientId = "cce9fcb1cb8144fa82b4e056628743af";
    // checked in because it doesn't really matter if anyone steals it
    const clientSecret = "e6bc91227f2043b48d704b7ba4e0ca4e";
    return SpotifyApi.withClientCredentials(clientId, clientSecret);
}