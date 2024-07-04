import express from "express";
import { execFile } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

// Utility to get __dirname in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Serve static files from current directory
const staticPath = path.resolve(__dirname, "../dist");
console.log("Static path:", staticPath);

app.use(express.static(staticPath));

// Endpoint to handle script execution
app.post("/run-script", (req, res) => {
  // Path to Node.js script
  const scriptPath = path.join(__dirname, "script.mjs");

  execFile("node", [scriptPath], (error, stdout, stderr) => {
    // Log the script output
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

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
