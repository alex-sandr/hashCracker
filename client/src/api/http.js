import axios from "axios";
import Cookies from "vue-cookies";

export const httpClient = axios.create({
  baseURL: "http://localhost:1234",
  timeout: 30000,
});
httpClient.interceptors.response.use(null, async (error) => {
  if (error.config && error.response && error.response.status === 401) {
    const originalRequest = error.config;
    try {
      const response = await axios.post(
        "http://localhost:1234/auth/refresh_token"
      );
      Cookies.set("accessToken", response.data.accessToken);
      originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
      return axios(originalRequest);
    } catch (err) {
      Cookies.remove("accessToken");
    }
  }

  return Promise.reject(error);
});
httpClient.interceptors.request.use(function (config) {
  const token = Cookies.get("accessToken");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});
export async function logoutUser() {
  try {
    const res = await httpClient.post("/auth/logout");
    Cookies.remove("accessToken");
    return res.data;
  } catch (err) {
    Cookies.remove("accessToken");

    console.error(`Error on logout: ${err}`);
    return null;
  }
}
export async function registerUser(data) {
  try {
    const res = await httpClient.post("/auth/register", data);
    return res.data;
  } catch (err) {
    console.error(`Error on register: ${err}`);
    return null;
  }
}

export async function loginUser(data) {
  try {
    const res = await httpClient.post("/auth/login", data);
    return res.data;
  } catch (err) {
    console.error(`Error on login: ${err}`);
    return null;
  }
}

export async function getUser() {
  try {
    const res = await httpClient.post("/auth/user");
    return res.data;
  } catch (err) {
    console.error(`Error on login: ${err}`);
    return null;
  }
}

export async function createHashes(hashes) {
  try {
    const res = await httpClient.post("/api/hashes", hashes);
    return res.data;
  } catch (err) {
    console.error(`Error on createHashes: ${err}`);
    return null;
  }
}

export async function getAllHashes() {
  try {
    const res = await httpClient.get("/api/hashes/getAllHashes");
    return res.data;
  } catch (err) {
    console.error(`Error on getAllHashes: ${err}`);
    return null;
  }
}

export async function updateHash(data) {
  try {
    const res = await httpClient.patch(`/api/hashes/${data.hash}`, {
      cracked: data.cracked,
    });
    return res.data;
  } catch (err) {
    console.error(`Error on updateHash: ${err}`);
    return null;
  }
}
