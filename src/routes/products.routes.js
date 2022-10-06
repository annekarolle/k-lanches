import { Router } from "express";
import {
  createProductsController,
  deleteProductsController,
  listProductByCategoryController,
  listProductsController,
  listProductsIDController,
  updateProductsController,
} from "../controllers/products.controllers";

const router = Router();

router.post("", createProductsController);

router.get("", listProductsController);

router.get("/:uuid", listProductsIDController);

router.patch("/:uuid", updateProductsController);

router.delete("/:uuid", deleteProductsController);

router.get("/category/:category_id", listProductByCategoryController);

export default router;
