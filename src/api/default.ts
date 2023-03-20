import axios from "axios";
import { store } from "../store/redusers/reduser";
import {
  setToken,
  setRefreshToken,
  clearAuth,
} from "../store/redusers/reduser";

const instance = axios.create({
  baseURL: "https://1fhuccr2jh.execute-api.us-east-1.amazonaws.com/dev",
});

instance.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const refreshToken = store.getState().auth.refreshToken;
    if (
      error.response.status === 401 &&
      refreshToken &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const response = await axios.post(
          "https://1fhuccr2jh.execute-api.us-east-1.amazonaws.com/dev/refresh",
          {
            refreshToken,
          }
        );
        const token = response.data.token;
        store.dispatch(setToken(token));
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return axios(originalRequest);
      } catch (error) {
        store.dispatch(clearAuth());
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
