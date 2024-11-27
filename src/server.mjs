import express from "express";
import * as script from "./script.mjs";

const app = express();
const PORT = 3000;
// const mesocycleFilePath = "./mesocycleAdditions.json";

app.use(express.json());

// barebones testing
app.post("/run-script", (req, res) => {
  script.helloWorld(); // Call the script function
  res.json({ message: "Script executed successfully!" });
});

// endpoint
// app.post("/process", async (req, res) => {
//   try {
//     const userData = req.body;
//     await script.updateJson(mesocycleFilePath, userData);
//     res.json({ message: "Data processed successfully!", data: userData });
//   } catch (error) {
//     res.status(500).json({ message: "An error occurred." });
//   }
// });

// start server
app.listen(PORT, () => {
  console.log("testMessage");
  console.log(`Server running at http://localhost:${PORT}`);
});
