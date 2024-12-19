import fs from "fs/promises";
import path from "path";
import { marked } from "marked";
import { Request, Response } from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const getDoc = async (req: Request, res: Response) => {
  try {
    const readmePath = path.join(__dirname, "../../", "README.md");
    const readmeContent = await fs.readFile(readmePath, "utf-8");
    const htmlContent = marked(readmeContent);

    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Book API Server</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
            }
            pre {
              background-color: #f4f4f4;
              border: 1px solid #ddd;
              border-radius: 4px;
              padding: 10px;
              overflow-x: auto;
            }
          </style>
        </head>
        <body>
          ${htmlContent}
        </body>
        </html>
      `;

    res.send(html);
  } catch (error) {
    console.error("Error reading README.md:", error);
    res.status(500).send("Error reading README");
  }
};
