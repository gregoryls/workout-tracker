import express from "express";
import { execFile } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

// Utility to get __dirname in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5500;

app.use(express.static(__dirname)); // Serve static files from current directory

// Endpoint to handle script execution
app.post("/run-script", (req, res) => {
  // Path to your Node.js script
  const scriptPath = path.join(__dirname, "sync.mjs");

  execFile("node", [scriptPath], (error, stdout, stderr) => {
    // Log the script output
    console.log("stdout:", stdout);
    console.log("stderr:", stderr);
    if (error) {
      return res
        .status(500)
        .json({ message: `Error: ${stderr || error.message}` });
    }
    res.json({ message: stdout.trim() || "Script ran successfully!" });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
