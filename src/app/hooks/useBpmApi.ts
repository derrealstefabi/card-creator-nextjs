export function useBpmApi() {
    // checked in because it doesn't really matter if anyone steals it
    const clientSecret = "a0a01d58a7745147ccb11dc9cd49235c";

    function getTrack(trackId: string): Promise<any> {
        return fetch(`https://getsongbpm.com/api/song/${trackId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': clientSecret,
            },
        }).then(response => response.json());
    }

    function search(track: string, artist: string): Promise<any> {
        if (!track && !artist) return Promise.resolve([]);

        let url = `https://getsongbpm.com/api/search/`;
        if (!track) {
            url += `?type=artist&lookup=${artist}`;
        } else if (!artist) {
            url += `?type=song&lookup=${track}`;
        } else {
            url += `?type=both&lookup=song:${track}artist:${artist}`;
        }


        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': clientSecret,
            },
        }).then(response => response.json());
    }

    return {search, getTrack};
}