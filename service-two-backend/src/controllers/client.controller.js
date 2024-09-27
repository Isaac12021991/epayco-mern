import { createAccessToken } from "../libs/jwt.js";
import axios from "../axios.js";
import jwt from "jsonwebtoken";
import { config } from 'dotenv';
config();


export const register_client = async (req, res) => {
  const { document, name, email, phone, password } = req.body;
  
  try {
    const resp = await axios
      .post(`client/register_client`, {
        document,
        email,
        name,
        phone,
        password
      })
      .then(response => {
        return response.data;
      })
      .catch(err => {
        return res.status(500).json({
          error: true,
          message: "Error",
          data: ""
        });
      });

    const token = await createAccessToken({
      client_id: resp._id,
      document: resp.document,
      email: resp.email,
      phone: resp.phone
    });

    res.cookie("token", token);

    return res.status(200).json({
      token,
      error: false,
      message: "User registered successfully",
      data: resp
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const resp = await axios
      .post(`client/login`, {
        email,
        password
      })
      .then(response => {
        return response.data;
      })
      .catch(err => {
        console.log(err);
      });

    if (resp.error) {
      
      return res.status(200).json({
        token: "",
        error: resp.error,
        message: resp.message,
        resp: ""
      });
    }

    const token = await createAccessToken({
      client_id: resp.data.id,
      document: resp.data.document,
      email: resp.data.email,
      phone: resp.data.phone
    });
    res.cookie("token", token);

    return res.status(200).json({
      token,
      error: resp.error,
      message: resp.message,
      data: resp.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("token", "", {
      expires: new Date(0)
    });

    return res.status(200).json({
      error: false,
      message: "User logout successfully",
      data: ""
    });
  } catch (error) {
    console.log(error);
  }
};

export const verify_token = async (req, res) => {
  try {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json({
        error: true,
        message: "Unauthorized",
        data: ""
      });
    }

    
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decoded) => {
      if (err) {
          return res.status(401).json({
          error: true,
          message: "Unauthorized",
          data: ""
        });
      }

      const resp = await axios
        .post(`client/verify_token`, decoded)
        .then(response => {
          return response.data;
        })
        .catch(err => {
          console.log(err);
        });

      if (resp.error) {
        return res.status(400).json({
          error: true,
          message: resp.message,
          data: ""
        });
      }

      return res.status(200).json({
        error: false,
        message: "Token is valid",
        data: decoded
      });
    });
  } catch (error) {
    console.log(error);
  }
};
