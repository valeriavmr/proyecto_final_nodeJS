import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret_key = process.env.JWT_SECRET_KEY;

// Middleware para verificar el token JWT
export const authentication = (req, res, next) => {

    const authHeader = req.headers.authorization;

    // Verificar que exista el encabezado Authorization
    if (!authHeader) {
        return res.status(401).json({ error: "Token no proporcionado" });
    }

    // Verificar que tenga el formato "Bearer <token>"
    if (!authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Formato de token inválido" });
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, secret_key, (err, decoded) => {
        if (err) {
            return res.status(403).json({ error: "Token inválido o expirado" });
        }

        // Guardar los datos del usuario para usarlos en los controllers
        req.user = decoded;

        next();
    });
};

export default authentication;