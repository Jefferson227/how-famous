import axios from "axios";

const baseUrl = "https://how-famous-api.herokuapp.com";
const accessToken = localStorage.getItem("accessToken");

const getArtists = async name => {
  let response = {};

  await axios
    .get(`${baseUrl}/artists/${name}/${accessToken}`)
    .then(res => {
      response = res.data.data;
    })
    .catch(error => {
      throw error.errorMessage;
    });

  return response;
};

const getCities = async id => {
  let response = {};

  await axios
    .get(`${baseUrl}/artist/${id}/cities`)
    .then(res => {
      response = res.data.data;
    })
    .catch(error => {
      throw error.errorMessage;
    });

  return response;
};

export { getArtists, getCities };
