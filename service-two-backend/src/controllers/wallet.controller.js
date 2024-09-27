import axios from "../axios.js";

export const wallet_client_check = async (req, res) => {
  const { document, phone } = req.body;

  try {
    const data = await axios
      .post(`wallet/wallet_client_check`, {
        document,
        phone
      })
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
  } catch (error) {
    console.log(error);
  }
};

export const wallet_load = async (req, res) => {
  try {
    const { document, amount } = req.body;

    const data = await axios
      .post(`wallet/wallet_load`, {
        document,
        amount
      })
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
      data: ""
    });
  } catch (error) {
    console.log(error);
  }
};
