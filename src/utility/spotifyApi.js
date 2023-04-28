import querystring from "querystring";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.REACT_APP_REFRESH_TOKEN;

const ACCESS_TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const BASIC = "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET);

const TOP_TRACKS_ENDPOINT =
  "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=50";
const TOP_ARTISTS_ENDPOINT =
  "https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=4";

const APIController = (function () {
  // Private methods
  const _getAccessToken = async () => {
    const response = await fetch(ACCESS_TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: BASIC,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: querystring.stringify({
        grant_type: "refresh_token",
        refresh_token: REFRESH_TOKEN,
      }),
    });

    return response.json();
  };

  const _getTopTracks = async (accessToken) => {
    const response = await fetch(TOP_TRACKS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.json();
  };

  const _getTopArtists = async (accessToken) => {
    const response = await fetch(TOP_ARTISTS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.json();
  };

  return {
    getAccessToken() {
      return _getAccessToken();
    },
    getTopTracks(accessToken) {
      return _getTopTracks(accessToken);
    },
    getTopArtists(accessToken) {
      return _getTopArtists(accessToken);
    },
  };
})();

const APPController = (function (APICtrl) {
  const getSpotifyData = async () => {
    const { access_token: accessToken } = await APICtrl.getAccessToken();
    const { items: topTracks } = await APICtrl.getTopTracks(accessToken);
    const { items: topArtists } = await APICtrl.getTopArtists(accessToken);

    // Artist with explicit album covers
    const bannedArtists = ["Teyana Taylor", "Blood Orange"];
    const filteredTracks = topTracks.filter(
      (track) => !bannedArtists.includes(track.artists[0].name)
    );

    return [filteredTracks, topArtists];
  };

  return {
    getData() {
      return getSpotifyData();
    },
  };
})(APIController);

export default APPController;
