import { Request, Response } from 'express';
import { ENDPOINT } from '../config';

const getTypicoUsers = async (_req: Request, res: Response) => {
  try {
    const response = await fetch(ENDPOINT)

    if (!response.ok) {
      throw new Error(`
        route: api/testAPI,
        ENDPOINT: ${ENDPOINT}
        - Response is not ok!
      `);
    }

    const data = await response.json()

    return res.json({ data })
  } catch (error) {
    console.error("Error fetching data:", error);

    return res
      .status(500)
      .json({ error: "Failed to fetch data" });
  }
}

export default getTypicoUsers;