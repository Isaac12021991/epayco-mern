import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import clientRouter from "./routes/client.routes.js";
import walletRouter from "./routes/wallet.routes.js";
import shoppingRouter from "./routes/shopping.routes.js";
import { config } from 'dotenv';
config();

const app = express();

app.use(cors(
    {
        origin: process.env.CORS_ORIGINS.split(','), 
        credentials: true
    }
));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use("/api/client", clientRouter);
app.use("/api/wallet", walletRouter);
app.use("/api/shopping", shoppingRouter);

export default app;