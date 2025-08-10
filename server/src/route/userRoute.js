import express from "express"
const router = express.Router()
import { signUp } from "../controllers/userController.js"

// user route
router.post("/auth/sign-up" , signUp)

export default router