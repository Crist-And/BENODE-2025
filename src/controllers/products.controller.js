import {
  serviceGetProducts,
  serviceGetProductById,
  serviceCreateProduct,
  serviceDeleteProduct
} from "../services/products.service.js";

export const getProducts = async (req, res) => {
  const data = await serviceGetProducts();
  res.json(data);
};

export const getProductById = async (req, res) => {
  const data = await serviceGetProductById(req.params.id);
  res.json(data);
};

export const createProduct = async (req, res) => {
  const data = await serviceCreateProduct(req.body);
  res.json(data);
};

export const deleteProduct = async (req, res) => {
  const data = await serviceDeleteProduct(req.params.id);
  res.json(data);
};
