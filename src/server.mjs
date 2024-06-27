import express from "express";
import { execFile } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

// Utility to get __dirname in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
