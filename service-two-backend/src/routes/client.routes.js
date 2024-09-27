import { Router } from "express";
import { register_client, login, logout, verify_token } from "../controllers/client.controller.js";
import { validateSchema } from "../middlewares/validate.middlewares.js";
import { clientRegisterSchema, clientLoginSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post("/register_client", validateSchema(clientRegisterSchema), register_client);
router.post("/login", validateSchema(clientLoginSchema), login);
router.post("/logout", logout);
router.get("/verify_token", verify_token);


export default router;