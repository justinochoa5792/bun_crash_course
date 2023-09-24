import axios from "axios";
import { resolve } from "dns";

async function fetchUser(user) {
  let res = await axios.get("https:/api.github.com/users/" + user);
  return res.data;
}

export default fetchUser;
