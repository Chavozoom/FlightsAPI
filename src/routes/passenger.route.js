import {Router} from "express";
import {create, findAll} from "../controllers/passenger.controller.js"
const router = Router();

// Create a new passenger
router.post("/", create);
router.get("/", findAll);


export default router;