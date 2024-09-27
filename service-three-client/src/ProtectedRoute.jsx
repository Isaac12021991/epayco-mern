import { useAuth } from "./context/AuthContex";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute(){

    const { isAuthenticated, loading } = useAuth();

    if (loading) {
        return <h1>Loading...</h1>;
    }
    if (!loading && !isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet/>;
}

export default ProtectedRoute;