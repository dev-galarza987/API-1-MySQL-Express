import { Router } from "express";
import { getRoot } from "../controller/root.controller.js";

const router = Router();    //? --> Router({ options? })

//* --> Route
export const root = router.get('/', getRoot);