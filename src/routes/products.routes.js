import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct
} from "../controllers/products.controller.js";

import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

// obtener todos
router.get("/", getProducts);

// obtener uno
router.get("/:id", getProductById);

// crear (requiere token)
router.post("/", verifyToken, createProduct);

// eliminar (requiere token)
router.delete("/:id", verifyToken, deleteProduct);

export default router;
