import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Defina a interface do payload do JWT
interface JwtPayload {
  id: number;
}

export const userMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers['authorization']?.split(' ')[1]; 
  if (!token) {
    res.status(403).json({ message: 'Token não fornecido' });
    return;
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY || 'secret_key', (err, decoded) => {
    if (err) {
      res.status(401).json({ message: 'Token inválido' });
      return;
    }

    const decodedToken = decoded as JwtPayload;
    if (decodedToken && typeof decodedToken.id === 'number') {
      req.userId = decodedToken.id;
    }

    next(); 
  });
};