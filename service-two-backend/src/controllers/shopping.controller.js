import axios from "../axios.js";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import { config } from 'dotenv';
config();


export const shopping_pay = async (req, res) => {
  const { client_id, amount } = req.body;

  try {
    const data = await axios
      .post(`shopping/shopping_pay`, {
        client_id,
        amount
      })
      .then(response => {
        return response.data;
      })
      .catch(err => {
        console.log(err);
      });

    if (data.error) {
      return res.status(200).json({
        token: "",
        error: data.error,
        message: data.message,
        data: data.token
      });
    }

    try {

      const transporter = nodemailer.createTransport({
        host: process.env.HOST_EMAIL,
        port: process.env.PORT_EMAIL,
        secure: process.env.SECURE_EMAIL === 'true' ? true : false,
        auth: {
          user: process.env.USER_EMAIL,
          pass: process.env.PASS_EMAIL
        },
        tls: {
          rejectUnauthorized: process.env.REJECT_EMAIL === 'true' ? true : false,
        }
      });

      const mailOptions = {
        from: process.env.USER_EMAIL,
        to: data.data.email,
        subject: "Security token",
        text: "Verification code is: " + data.data.newTokenClient
      };

      // Enviar el correo
      await transporter.sendMail(mailOptions);
    } catch (error) {
      console.log(error);
    }

    return res.status(200).json({
      token: "",
      error: data.error,
      message: data.message,
      data: data.token
    });
  } catch (error) {
    console.log(error);
  }
};

export const shopping_pay_confirm = async (req, res) => {
  const { token, token_client } = req.body;

  let infoData = {};

  if (!token) {
    return res.status(401).json({
      error: true,
      message: "Unauthorized",
      data: ""
    });
  }

  jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        error: true,
        message: "Unauthorized",
        data: ""
      });
    } else {
      infoData = decoded;
    }
  });

  const dataShopping = {
    client_id: infoData.client_id,
    token_client: token_client,
    amount: infoData.amount,
    id_shopping: infoData.id_shopping
  };

  const data = await axios
    .post(`shopping/shopping_pay_confirm`, dataShopping)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });

  return res.status(200).json({
    token: "",
    error: data.error,
    message: data.message,
    data: data.data
  });
};
