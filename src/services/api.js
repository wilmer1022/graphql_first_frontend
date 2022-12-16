import axios from "axios";

const serviceGraphQL = axios.create({
  baseURL: "http://localhost:8000",
});

serviceGraphQL.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = window.sessionStorage.getItem(
      "token"
    );
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

serviceGraphQL.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const graphpQLAPI = (data) => post(serviceGraphQL, "/api", data);

const post = (service, URL, data) => service.post(URL, data);
