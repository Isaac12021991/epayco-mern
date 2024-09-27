import { Router } from "express";
import { shopping_pay, shopping_pay_confirm } from "../controllers/shopping.controller.js";

const router = Router();

router.post("/shopping_pay", shopping_pay);
router.post("/shopping_pay_confirm", shopping_pay_confirm);


export default router;