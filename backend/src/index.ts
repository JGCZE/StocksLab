import express from "express";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

const ENDPOINT = "https://jsonplaceholder.typicode.com/usersY"

app.get("/", (_req, res) => {
  res.send("Hello from the backend!");
});

app.get("/api/testApi", async (_req, res) => {
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
})

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
