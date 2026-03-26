import express from 'express';
import getTypicoUsers from '../controllers/typicoUsers.controllers';


const router = express.Router();

router.get('/testUsersMock', getTypicoUsers)

export default router;
