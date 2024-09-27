import express from "express";
import morgan from "morgan";
import clientRouter from "./routes/client.routes.js";
import walletRouter from "./routes/wallet.routes.js";
import ShoppingRouter from "./routes/shopping.routes.js";

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use("/api/client", clientRouter);
app.use("/api/wallet", walletRouter);
app.use("/api/shopping", ShoppingRouter);


export default app;