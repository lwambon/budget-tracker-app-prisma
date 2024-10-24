import { Router } from "express";
import {
  createBudget,
  getAllBudget,
  getBudget,
  updateBuget,
  deleteBudget,
} from "../controllers/budget.controllers.js";
const router = Router();
//creating a budget list
router.post("", createBudget);

//getting all the budgets
router.get("", getAllBudget);

//getting one budget
router.get("/:title", getBudget);

//updating the bugdet list
router.patch("/:title", updateBuget);

//deleting a budget list
router.delete("/:title", deleteBudget);

export default router;
