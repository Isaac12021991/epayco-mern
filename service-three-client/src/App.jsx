import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContex";

import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import WalletLoad from "./pages/WalletLoad";
import WalletCheck from "./pages/WalletCheck";
import ShoppingPay from "./pages/ShoppingPay";
import ShoppingPayConfirm from "./pages/ShoppingPayConfirm";
import Navbar from "./components/Navbar";

import ShoppingSuccess from "./pages/messages/ShoppingSuccess";

import ProtectedRoute from "./ProtectedRoute";

function App(){
    return (
        <AuthProvider>
            <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/login" element={<LoginPage/>} />
                    <Route path="/register" element={<RegisterPage/>} />

                    <Route path="/shopping-success" element={<ShoppingSuccess/>} />

                    <Route element={<ProtectedRoute/>}>
                        <Route path="/walletload" element={<WalletLoad/>} />
                        <Route path="/walletcheck" element={<WalletCheck/>} />
                        <Route path="/shoppingpay" element={<ShoppingPay/>} />
                        <Route path="/shoppingpayconfirm" element={<ShoppingPayConfirm/>} />
                    </Route>

                </Routes>
            </BrowserRouter>
        </AuthProvider>
        )
}


export default App;