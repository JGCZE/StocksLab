import express from "express";
import typicoRoute from './routes/typicoUsers.routes';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello from the backend!");
});

app.use("/api", typicoRoute);

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
