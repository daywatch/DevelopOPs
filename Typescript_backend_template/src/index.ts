import express from "express";
import cors from "cors";
import companyRouter from "./routes/Company.routes";
import { initDatabase } from "./config/dataSource";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors({ origin: "*" }));

// Mount routers
app.use("/api/v1", companyRouter);

// Health check
app.get("/", (req, res) => res.send("Server running 🚀"));

app.listen(PORT, async () => {
  await initDatabase();
  console.log(`Server up on port ${PORT}!`);
});
