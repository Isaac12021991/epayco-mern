import Client from "../models/client.model.js";
import bcrypt from "bcryptjs";

export const register_client = async (req, res) => {
  const { document, name, email, phone, password } = req.body;

  const passwordHash = await bcrypt.hash(password, 10);

  try {
    const newClient = new Client({
      email,
      document,
      name,
      phone,
      password: passwordHash
    });

    const savedClient = await newClient.save();

    return res.json(savedClient);
  } catch (error) {
    return res.json({
      message: "Error creating client",
      status: 400,
      error: true,
      data: ""
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const clientFound = await Client.findOne({ email });

    if (!clientFound) {
      return res.json({
        message: "User not found",
        status: 400,
        error: true,
        data: ""
      });
    }

    const isMatch = await bcrypt.compare(password, clientFound.password);

    if (!isMatch) {
      return res.json({
        message: "password wrong",
        status: 400,
        error: true,
        data: ""
      });
    }

    return res.json({
      message: "client found",
      status: 200,
      error: false,
      data: {
        id: clientFound._id,
        phone: clientFound.phone,
        email: clientFound.email,
        document: clientFound.document
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const verify_token = async (req, res) => {
  const data = req.body;

  try {
    const client = await Client.findOne({ _id: data.client_id });

    if (!client) {
      return res.json({
        token: "",
        error: true,
        message: "Client not found",
        status: 200,
        data: ""
      });
    }

    return res.json({
      token: "",
      error: false,
      message: "Client found",
      status: 200,
      data: {
        id: client._id,
        phone: client.phone,
        email: client.email,
        document: client.document
      }
    });
  } catch (error) {
    console.log(error);
  }
};
