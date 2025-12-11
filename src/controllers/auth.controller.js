import { serviceLogin } from "../services/auth.service.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  const result = await serviceLogin(email, password);

  if (!result.success) {
    return res.status(401).json({ error: "Credenciales inválidas" });
  }

  res.json({ token: result.token });
};
