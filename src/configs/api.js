import axios from "axios";

const fallbackBaseURL = "https://server-jet-theta.vercel.app";
const configuredBaseURL = import.meta.env.VITE_BASE_URL;

const safeBaseURL =
  configuredBaseURL &&
  configuredBaseURL !== "https://resume-builder.sdblogs743348.workers.dev"
    ? configuredBaseURL
    : fallbackBaseURL;

const api = axios.create({
  baseURL: safeBaseURL.replace(/\/$/, ""),
});

export default api;
