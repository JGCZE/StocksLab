import { Request, Response } from 'express';
import getTypicoUsersApi from '../service/typicoUsers.service';

const getTypicoUsers = async (_req: Request, res: Response) => {
  try {
    const response = await getTypicoUsersApi();

    return res.json(response);
  } catch (error) {
    console.error("Error fetching data:", error);

    return res
      .status(502)
      .json({ error: "Failed to fetch data" });
  }
}

export default getTypicoUsers;
