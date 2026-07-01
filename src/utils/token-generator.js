import jwt from 'jsonwebtoken';
import 'dotenv/config';
const secret_key = process.env.JWT_SECRET_KEY;

// Función para generar un token JWT
export const generateToken = (userData) => {

    const payload = {
        id: userData.id,
    };

    const expiration = { expiresIn: '1h' };

    return jwt.sign(payload, secret_key, expiration);

}