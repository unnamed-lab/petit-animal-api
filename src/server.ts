import express from "express";
import cors from "cors";
import path from "path";
import dogRoutes from "./routes/dogRoutes";
import catRoutes from "./routes/catRoutes";
import bunnyRoutes from "./routes/bunnyRoutes";
import docRoutes from "./routes/docRoute";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use("/api", dogRoutes);
app.use("/api", catRoutes);
app.use("/api", bunnyRoutes);
app.use("/", docRoutes);
app.get("/api", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "api-docs.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
