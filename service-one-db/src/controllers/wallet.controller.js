import Client from "../models/client.model.js";
import {Wallet, WalletMovement} from "../models/wallet.model.js";

export const wallet_client_check = async (req, res) => {

    const {document, phone} = req.body;

    try {

        const client = await Client.findOne({ document: document, phone: phone });  // Búsqueda por un campo específico
        if (client) {

            const wallet = await Wallet.findOne({ client_id: client.id });  // Búsqueda por un campo específico

            if (wallet) {

                return  res.json({
                    token: "",
                    error: false,
                    message: "Wallet found",
                    status: 200,
                    data:wallet.amount
                  });

            }else{

                return  res.json({
                    token: "",
                    error: true,
                    message: "Wallet not found",
                    status: 200,
                    data:wallet
                  });
            }
            
        } else {

            return  res.json({
                token: "",
                error: true,
                message: "Client not found",
                status: 200,
                data:""
              });
        }
        
    } catch (error) {
        console.log(error);  
    }
};


export const wallet_load = async (req, res) => {

    try {
        const {document, amount} = req.body;
        const client = await Client.findOne({ document: document });  

        if (!client) {
            return  res.json({
                token: "",
                error: false,
                message: "Client not found",
                status: 200,
                data:""
              });
        }
        else {

            const updatedClient = await Wallet.findOneAndUpdate({client_id:client._id},  { $inc: { amount: amount } }, { new: true });
            if (updatedClient) {

                const newWalletMovement = new WalletMovement({
                    amount,
                    movement: "Add",
                    wallet_id: updatedClient._id
                });

                newWalletMovement.save();

                return  res.json({
                    token: "",
                    error: false,
                    message: "Update amount",
                    status: 200,
                    data:updatedClient
                  });


            } else {
                const newWallet = new Wallet({
                    client_id: client._id,
                    amount
                });
                const savedWallet = await newWallet.save();

                return  res.json({
                    token: "",
                    error: false,
                    message: "wallet created",
                    status: 200,
                    data:savedWallet
                  });

            }

            return  res.json({
                token: "",
                error: false,
                message: "Client no found",
                status: 200,
                data:savedWallet
              });
        }
   

    } catch (error) {
        console.log(error);
    }

};

