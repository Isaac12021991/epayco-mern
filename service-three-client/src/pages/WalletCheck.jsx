import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContex";
import { useNavigate } from "react-router-dom";
import { wallet_client_check } from "../api/wallet";
import { useState } from "react";

function WalletCheck() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { errors: RegisterErrors } = useAuth();
  const navigate = useNavigate();

  const [messageWallet, setMessageWallet] = useState(false);
  const [amountWallet, setAmountWallet] = useState(false);

  const formattedNumber = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amountWallet);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Wallet Check</h2>
        <form
          onSubmit={handleSubmit(async values => {
            const resp = await wallet_client_check(values);
            setMessageWallet(resp.data.message);
            setAmountWallet(resp.data.data);
            reset();
          })}
        >
          <div>

            {messageWallet &&
              <span className="text-black-500 text-lg text-center">
                {messageWallet}
              </span>}
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Document
            </label>
            <input
              type="document"
              id="document"
              {...register("document", { required: true })}
              className="mt-1 h-10 border border-gray-300 rounded px-4 w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="number"
              id="phone"
              {...register("phone", { required: true })}
              className="mt-1 h-10 border border-gray-300 rounded px-4 w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Check
          </button>
        </form>

        
      {amountWallet &&
            <div className="mt-4 flex items-center justify-center">
              <div className="bg-white rounded-lg p-10 text-center">
                <span className="text-6xl font-bold text-blue-500">{formattedNumber}</span>
              </div>
            </div>
        }
      </div>

            

    </div>
  );
}

export default WalletCheck;
