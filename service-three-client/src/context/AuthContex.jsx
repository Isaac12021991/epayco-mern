import { createContext, useState, useContext, useEffect } from "react";
import { registerClient, login, verifyToken } from "../api/auth";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errors, setError] = useState(false);

  const signup = async user => {
    try {
      const res = await registerClient(user);
      if (res.data.error) {
        setError(res.data.message);
      } else {
        setUser(res.data);
        setIsAuthenticated(true);
      }
    } catch (error) {
      setError(error);
    }
  };

  const signin = async user => {
    try {
      const res = await login(user);
      if (res.data.error) {
        setError(res.data.message);
      } else {
        setUser(res.data);
        setIsAuthenticated(true);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError("Usuario o contraseña incorrectos");
      } else {
        console.error("Error en la solicitud:", error);
      }
      setError(error);
    }
  };

  useEffect(
    () => {
      async function checkLogin() {
        const cookies = Cookies.get();

        if (!cookies.token) {
          setIsAuthenticated(false);
          setLoading(false);
          setUser(null);
          return;
        }

        try {
          const res = await verifyToken(cookies.token);

          if (res.data.error) {
            setIsAuthenticated(false);
            setLoading(false);
            setUser(null);
            return;
          } else {
            setUser(res.data);
            setIsAuthenticated(true);
            setLoading(false);
            return;
          }
        } catch (error) {
          setIsAuthenticated(false);
          setUser(null);
          setLoading(false);
        }
      }
      checkLogin();
    },
    [verifyToken]
  );

  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        loading,
        user,
        isAuthenticated,
        errors
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
