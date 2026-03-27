import { ENDPOINT } from "../config";
import resolveTypicoUsers from "./resolveTypicoUsers";

const getTypicoUsersApi = async () => {
  const response = await fetch(ENDPOINT)

  if (!response.ok) {
    throw new Error("route: api/testUsersMock - Response is not ok!");
  }

  const data = await response.json()

  return resolveTypicoUsers(data);
}

export default getTypicoUsersApi;
