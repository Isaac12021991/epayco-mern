import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContex";
import { useNavigate } from "react-router-dom";
import { shopping_pay } from "../api/shopping_pay";
import { useState } from "react";

function ShoppingPay() {
  const { handleSubmit, formState: { errors }, reset } = useForm();
  const {user, errors: RegisterErrors } = useAuth();
  const navigate = useNavigate();

  const [messageWallet, setMessageWallet] = useState(false);
  const randomAmount = Math.floor(Math.random() * (10000 - 10 + 1)) + 10;

  const formattedNumber = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(randomAmount);



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Pay</h2>
        <form
          onSubmit={handleSubmit(async () => {
            const resp = await shopping_pay({ amount: randomAmount, client_id: user.data.client_id });

            setMessageWallet(resp.data.message);
            if(!resp.data.error){
              navigate("/shoppingpayconfirm", { state: {token:resp.data.data, amount:randomAmount} });
            }

            reset();
          })}
        >
          {messageWallet &&
            <span className="text-black-500 text-lg text-center">
              {messageWallet}
            </span>}

          <div className="mt-4 flex items-center justify-center">
            <div className="bg-white rounded-lg p-10 text-center">
              <span className="text-6xl font-bold text-blue-500">
                {formattedNumber}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-green-500 text-white font-bold py-4 px-10 rounded-lg text-2xl shadow-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-300"
            >
              Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ShoppingPay;
