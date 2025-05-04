import express, { Request, Response } from "express";
import userRoutes from "./routes/userRoutes";
import adminRoutes from "./routes/adminRoutes";
import submissionRoutes from "./routes/submissionRoutes";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

app.use("/user", userRoutes);
app.use("/admin", adminRoutes);
app.use("/product", submissionRoutes);

app.listen(8000, () => console.log("Server running on port 8000"));
