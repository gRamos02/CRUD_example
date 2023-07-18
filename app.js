import express from "express";
import morgan from "morgan";

const app = express();

//routes
import userRoutes from "./routes/users.routes.js"

//middlewares
app.use(morgan("dev"));
app.use(express.json());


app.use("/api/users", userRoutes);

app.get("/", async (req, res) => {
  res.send("<h1>hola<h1/>");
});

export default app;