import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || "";

export const createToken = (payload: any) => {
    return jwt.sign(payload, secret, { expiresIn: '15m' });
};

export const verifyToken = (token: any) => {
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        return null;
    }
};
