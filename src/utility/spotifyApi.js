import axios from "axios";

const APIController = (function () {
    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
    const LIMIT = 50;
    const OFFSET = Math.floor(Math.random() * 90);

    // Private methods
    const _getOAuthToken = async () => {
        let result;
        try {
            result = await axios({
                url: "https://accounts.spotify.com/api/token",
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    Authorization:
                        "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET),
                },
                data: "grant_type=client_credentials",
            });
        } catch (e) {}

        const data = result.data;
        return data.access_token;
    };

    const _getTopArtistsAndSongs = async (token) => {
        let result;
        try {
            result = await axios({
                url: `https://api.spotify.com/v1/playlists/0OOCQaM7QnglpaHDRyucDg/tracks?market=ES&fields=items(track(name%2Chref%2Cartists(name)%2Calbum(name%2Cimages)))&limit=${LIMIT}&offset=${OFFSET}`,
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        } catch (e) {}

        const data = result.data.items;
        return data;
    };

    return {
        getOAuthToken() {
            return _getOAuthToken();
        },
        getTopArtistsAndSongs(token) {
            return _getTopArtistsAndSongs(token);
        },
    };
})();

const APPController = (function (APICtrl) {
    const topArtistsAndSongs = async () => {
        const OAuthToken = await APICtrl.getOAuthToken();
        const topArtists = await APICtrl.getTopArtistsAndSongs(OAuthToken);
        return topArtists;
    };

    return {
        getData() {
            return topArtistsAndSongs();
        },
    };
})(APIController);

export default APPController;
