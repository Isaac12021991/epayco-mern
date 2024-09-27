import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContex";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signup, user, isAuthenticated, errors: RegisterErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(
    () => {
      if (isAuthenticated) {
        navigate("/");
        console.log(user);
      }
    },
    [isAuthenticated]
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form
          onSubmit={handleSubmit(async values => {
            signup(values);
          })}
        >
          <div>
            {RegisterErrors && (
            <span className="text-red-500">{RegisterErrors}</span>
            )}
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              className="mt-1 h-10 border border-gray-300 rounded px-4 w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email &&
              <span className="text-red-500">This field is required</span>}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: true })}
              className="mt-1 h-10 border border-gray-300 rounded px-4 w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password &&
              <span className="text-red-500">This field is required</span>}
          </div>

          <div>
            <label
              htmlFor="document"
              className="block text-sm font-medium text-gray-700"
            >
              Document
            </label>
            <input
              type="text"
              id="document"
              {...register("document", { required: true })}
              className="mt-1 h-10 border border-gray-300 rounded px-4 w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.documen &&
              <span className="text-red-500">This field is required</span>}
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
              className="mt-1 h-10 border border-gray-300 rounded px-4 w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name &&
              <span className="text-red-500">This field is required</span>}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              {...register("phone", { required: true })}
              className="mt-1 h-10 border border-gray-300 rounded px-4 w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.phone &&
              <span className="text-red-500">This field is required</span>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
            Already have an account ? <Link to="/login" className="text-blue-500">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
