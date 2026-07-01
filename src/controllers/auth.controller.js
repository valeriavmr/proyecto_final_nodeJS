import { generateToken } from '../utils/token-generator.js';
const default_user = {
id: 1,
email: "user@email.com",
password: "strongPass123"
}
export async function login(req, res) {
const { email, password } = req.body;

// Validar que se proporcionen las credenciales

if (!email || !password) {
    return res.status(400).json({
      message: "Faltan credenciales",
    });
  }

// Validar las credenciales del usuario
if (email !== default_user.email || password !== default_user.password) {
    return res.status(401).json({
      message: "Credenciales inválidas",
    });
  }

  const token = generateToken(default_user);

  res.json({
    message: "Login exitoso",
    token,
  });
};