import axios from "axios";

const baseUrl = "https://how-famous-api.herokuapp.com";
const accessToken = localStorage.getItem("accessToken");

const getArtists = name => {
  return axios.get(`${baseUrl}/artists/${name}/${accessToken}`);
};

export { getArtists };
