import express, { Request, Response } from "express";
import userRoutes from "./routes/userRoutes"
import adminRoutes from "./routes/adminRoutes"
import submissionRoutes from "./routes/submissionRoutes"

const app = express();
app.use(express.json());


app.use("/user", userRoutes);
app.use("/admin", adminRoutes);
app.use("/product", submissionRoutes)

app.listen(3000, () => console.log("Server running on port 3000"));