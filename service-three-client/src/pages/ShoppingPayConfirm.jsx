import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContex";
import { useNavigate, useLocation } from "react-router-dom";
import { shopping_pay_confirm } from "../api/shopping_pay";
import { useState } from "react";

function ShoppingPayConfirm() {
  const location = useLocation();
  const  infoSolicitud  = location.state || {};
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { errors: RegisterErrors } = useAuth();
  const navigate = useNavigate();

  const [messageWallet, setMessageWallet] = useState(false);

  const formattedNumber = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(infoSolicitud.amount);


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Confirm Pay</h2>
        <p className="text-center text-gray-500">
          Enter the token sent to your email
        </p>
        <form
          onSubmit={handleSubmit(async (values) => {

            const resp = await shopping_pay_confirm({
              token: infoSolicitud.token,
              token_client: values.token
            });
            setMessageWallet(resp.data.message);

            if (!resp.data.error) {
              navigate("/shopping-success");
            }

            reset();
          })}
        >
          {messageWallet &&
            <span className="text-black-500 text-lg text-center">
              {messageWallet}
            </span>}

          <div className="mt-4 flex items-center justify-center">
            <div>
              <label
                htmlFor="token"
                className="block text-sm font-medium text-center text-gray-700"
              >
                Token
              </label>
              <input
                type="text"
                id="token"
                maxLength={6}
                placeholder="Enter the token"
                {...register("token", { required: true })}
                className="text-center h-12 w-80 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center">
            <div className="bg-white rounded-lg p-10 text-center">
              <span className="text-6xl font-bold text-blue-500">
                {formattedNumber}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center mt-4">
            <button
              type="submit"
              className="bg-green-500 text-white font-bold py-4 px-10 rounded-lg text-2xl shadow-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-300"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ShoppingPayConfirm;
