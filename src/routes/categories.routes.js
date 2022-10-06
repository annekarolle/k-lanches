import { Router } from "express";
import { createCategoriesController, deleteCategoriesController, listCategoriesController, listCategoriesIDController, updateCategoriesController } from "../controllers/categories.controllers";






const router = Router()

router.post('', createCategoriesController);

router.get('', listCategoriesController);

router.get("/:id", listCategoriesIDController)

router.patch("/:id",updateCategoriesController)

router.delete("/:id", deleteCategoriesController)


export default router