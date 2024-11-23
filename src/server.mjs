import express from "express";
import { updateJson } from "./script.mjs";

const app = express();
const PORT = 3000;
const mesocycleFilePath = "./mesocycleAdditions.json";

app.use(express.json());

// endpoint
app.post("/process", async (req, res) => {
  try {
    const userData = req.body;
    await updateJson(mesocycleFilePath, userData);
    res.json({ message: "Data processed successfully!", data: userData });
  } catch (error) {
    res.status(500).json({ message: "An error occurred." });
  }
});

// start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
