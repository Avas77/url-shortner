import axios from "axios";

const baseURL = "https://api.rebrandly.com/v1/links";

const headers = {
  "Content-Type": "application/json",
  apikey: "1ccea8afb42147e59d3057088136ad20",
};

export const getShortenURL = async (url) => {
  let linkRequest = {
    destination: url,
    domain: { fullName: "rebrand.ly" },
  };
  const apiCall = {
    method: "post",
    url: baseURL,
    data: linkRequest,
    headers: headers,
  };

  try {
    let response = await axios(apiCall);
    localStorage.setItem("shorten", response.data);
  } catch (error) {
    console.log(error);
  }
};
