import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoutes from "./src/routes/chatRoutes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;
app.use(cors());
app.use(express.json());

app.use("/api/chat", chatRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
