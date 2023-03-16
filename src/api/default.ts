import axios from "axios";

export const baseURL =
  "https://1fhuccr2jh.execute-api.us-east-1.amazonaws.com/dev";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
