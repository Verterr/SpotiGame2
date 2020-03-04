import SpotifyWebApi from 'spotify-web-api-js';
const spotifyWebApi = new SpotifyWebApi();

export const getArtistTracks = async id  => {
   return await spotifyWebApi.getArtistTopTracks(id, 'PL')
        .then(res => {
             return res
        });
};

