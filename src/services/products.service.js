import { collection, getDocs, getDoc, doc, addDoc, deleteDoc } from "firebase/firestore";
import { db } from "../config/firebase.js";

export const serviceGetProducts = async () => {
  const snap = await getDocs(collection(db, "products"));
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
};

export const serviceGetProductById = async (id) => {
  const ref = doc(db, "products", id);
  const snap = await getDoc(ref);
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
};

export const serviceCreateProduct = async (data) => {
  const ref = await addDoc(collection(db, "products"), data);
  return { id: ref.id, ...data };
};

export const serviceDeleteProduct = async (id) => {
  await deleteDoc(doc(db, "products", id));
  return { message: "Producto eliminado" };
};
