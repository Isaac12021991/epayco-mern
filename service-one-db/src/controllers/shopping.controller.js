import Client from "../models/client.model.js";
import { Wallet, WalletMovement } from "../models/wallet.model.js";
import Shopping from "../models/shopping.model.js";
import { createAccessToken } from "../libs/jwt.js";

export const shopping_pay = async (req, res) => {
  const { client_id, amount } = req.body;

  try {
    const infoWallet = await Wallet.findOne({ client_id: client_id }).populate('client_id');

    if (!infoWallet) {
      return res.json({
        token: "",
        error: true,
        message: "You have no funds available",
        status: 200,
        data: ""
      });
    }

    if (infoWallet.amount < amount) {
      return res.json({
        token: "",
        error: true,
        message: "Insufficient balance",
        status: 200,
        data: ""
      });
    }

    const newShopping = new Shopping({
      amount,
      client_id: client_id
    });

    newShopping.save();

    const token = await createAccessToken({
      id_shopping: newShopping._id,
      client_id: client_id,
      amount: amount
    });

    const newTokenClient = Math.floor(100000 + Math.random() * 900000);

    const updatedClient = await Client.findByIdAndUpdate(
      client_id,
      { token_client: newTokenClient },
      { new: true }
    );
    if (!updatedClient) {
      return res.json({
        token: "",
        error: true,
        message: "Error",
        status: 200,
        data: ""
      });
    }

    return res.json({
      token: token,
      error: false,
      message: "Shopping created successfully",
      status: 200,
      data:  {newTokenClient:newTokenClient, email: infoWallet.client_id.email}
    });
  } catch (error) {
    console.log(error);
  }
};

export const shopping_pay_confirm = async (req, res) => {
  try {
    const dataShopping = req.body;

    const infoClient = await Client.findOne({_id: dataShopping.client_id, token_client: dataShopping.token_client });

    if (!infoClient) {
      return res.json({
        token: "",
        error: true,
        message: "the entered token is incorrect !",
        status: 200,
        data: ""
      });
    }

    const infoWallet = await Wallet.findOne({client_id:dataShopping.client_id});

    if (infoWallet) {
      const updatedWallet = await Wallet.findOneAndUpdate(
        { client_id: dataShopping.client_id },
        { $inc: { amount: -dataShopping.amount } },
        { new: true }
      );
      
      if (updatedWallet) {
        const updatedShopping = await Shopping.findByIdAndUpdate(
            dataShopping.id_shopping,
          { status: "Paid" },
          { new: true }
        );

        const newWalletMovement = new WalletMovement({
          amount: dataShopping.amount,
          movement: "Subtract",
          wallet_id: updatedWallet._id
        });

        newWalletMovement.save();

        return res.json({
          token: "",
          error: false,
          message: "Shopping paid successfully",
          status: 200,
          data: ""
        });
      }
    } else {

      return res.json({
        token: "",
        error: true,
        message: "Token incorrect",
        status: 200,
        data: ""
      });
    }
  } catch (error) {

    
    console.log(error);

    return res.json({
        token: "",
        error: true,
        message: "Error server",
        status: 500,
        data: ""
      });
  }
};
