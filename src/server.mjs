import express from "express";
import { execFile } from "child_process";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

// Utility to get __dirname in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Serve static files from current directory
const staticPath = path.resolve(__dirname, "../dist");
console.log("Static path:", staticPath);

app.use(express.static(staticPath));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS"); // Allow these methods
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Allow these headers

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.sendStatus(204); // No Content
  }

  next();
});

// Endpoint to handle script execution
app.post("/run-script", (req, res) => {
  // Path to Node.js script
  const scriptPath = path.join(__dirname, "script.mjs");

  execFile("node", [scriptPath], (error, stdout, stderr) => {
    console.log("stdout:", stdout);
    console.log("stderr:", stderr);
    if (error) {
      return res
        .status(500)
        .json({ message: `Error: ${stderr || error.message}` });
    }
    const output = stdout.trim();
    if (!output) {
      return res.status(500).json({ message: "No output from script" });
    }
    res.json({ message: output });
  });
});

// route to save data
app.post("/save-data", (req, res) => {
  const data = req.body;
  const filePath = path.resolve(__dirname, "data.json");

  fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ message: "Failed to save data" });
    }
    res.json({ message: "Data saved successfully" });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
