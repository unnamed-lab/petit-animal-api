import express from "express";
import cors from "cors";
import dogRoutes from "./routes/dogRoutes";
import catRoutes from "./routes/catRoutes";
import bunnyRoutes from "./routes/bunnyRoutes";
import docRoutes from "./routes/docRoute";

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use("/api", dogRoutes);
app.use("/api", catRoutes);
app.use("/api", bunnyRoutes);
app.use("/", docRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
