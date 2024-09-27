import jwt from "jsonwebtoken";
import { config } from 'dotenv';
config();

export const authRequire = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.json({
      error: true,
      message: "Unauthorized",
      status: 401,
      data: ""
    });
  }

  jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.json({
        error: true,
        message: "Unauthorized",
        status: 401,
        data: ""
      });
    } else {
      req.user = decoded;
    }
  });

  next();
};
