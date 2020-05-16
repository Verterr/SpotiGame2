const CLIENT_ID = 'b5f41c368fa84384b67c942712126436';
const SCOPES = encodeURIComponent("streaming user-top-read");
const REDIRECT_URI = encodeURIComponent("http://localhost:3000");
export const loginURL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=${SCOPES}&redirect_uri=${REDIRECT_URI}`