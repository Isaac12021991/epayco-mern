import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContex";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";


function LoginPage() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signin, isAuthenticated, errors: RegisterErrors } = useAuth();
    const navigate = useNavigate();
  
    useEffect(
      () => {
        if (isAuthenticated) {
          navigate("/");
        }
      },
      [isAuthenticated]
    );
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={ handleSubmit( async (values) => {
            signin(values);    
        }) }>
          <div>
          {RegisterErrors && (
            <span className="text-red-500">{RegisterErrors}</span>
            )}
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email', { required: true })}
              className="mt-1 h-10 border border-gray-300 rounded px-4 w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register('password', { required: true })}
              className="mt-1 h-10 border border-gray-300 rounded px-4 w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>

          <p className="mt-4 text-sm text-center">
          Don't have an account yet?  <Link to="/register" className="text-blue-500">Register</Link>
        </p>
        </form>
      </div>
    </div>

  );
}

export default LoginPage;