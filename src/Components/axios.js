import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-bacad/us-central1/api", //THE API (cloud function) Url
});
export default instance;
