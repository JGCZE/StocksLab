import { ENDPOINT } from "../config";
import resolveTypicoUsers from "./resolveTypicoUsers";

const getTypicoUsersApi = async () => {
  const response = await fetch(ENDPOINT)

  if (!response.ok) {
    throw new Error(`
      Request to Api typico failed: response not ok (status ${response.status}).
    `);
  }

  const data = await response.json()

  return resolveTypicoUsers(data);
}

export default getTypicoUsersApi;
