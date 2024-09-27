import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContex";
import { useNavigate } from "react-router-dom";
import { wallet_load } from "../api/wallet";
import { useState } from "react";

function WalletLoad() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { errors: RegisterErrors } = useAuth();
  const navigate = useNavigate();

  const [messageWallet, setMessageWallet] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Wallet Load</h2>
        <form
          onSubmit={handleSubmit(async values => {
            const resp = await wallet_load(values);
            setMessageWallet(resp.data.message);
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
              min={0}
              {...register("phone", { required: true })}
              className="mt-1 h-10 border border-gray-300 rounded px-4 w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Amount
            </label>
            <input
              type="number"
              id="amount"
              {...register("amount", {
                required: "Amount is required",
                validate: value => value > 0 || "Amount must be greater than zero"
              })}

              className="mt-1 h-10 border border-gray-300 rounded px-4 w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

              {errors.amount &&
              <span className="text-red-500">This field must a number valid</span>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Recharge money
          </button>
        </form>
      </div>
    </div>
  );
}

export default WalletLoad;
