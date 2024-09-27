import { Router } from "express";
import { wallet_client_check, wallet_load} from "../controllers/wallet.controller.js";

const router = Router();

router.post("/wallet_client_check", wallet_client_check);
router.post("/wallet_load", wallet_load);

export default router;