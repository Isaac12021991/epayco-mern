import { Router } from "express";
import { register_client, login, verify_token } from "../controllers/client.controller.js";

const router = Router();

router.post("/register_client", register_client);
router.post("/login", login);
router.post("/verify_token", verify_token);


export default router;