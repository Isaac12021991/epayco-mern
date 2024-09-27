import  { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContex";

function Navbar(){
    const { isAuthenticated } = useAuth();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLogout = () => {
        Cookies.remove('token');
        window.location.reload();
    };

    return (
        
        <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex mt-0">
                    <div className="flex-shrink-0 mr-6 mt-3">
                        <a href="/" className="text-2xl font-bold text-blue-600">Epayco</a>
                    </div>
                    <div className="hidden md:flex md:space-x-8 mt-5">
                        <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
                        <a href="/walletload" className="text-gray-700 hover:text-blue-600">Recharge wallet</a>
                        <a href="/walletcheck" className="text-gray-700 hover:text-blue-600">Check Wallet</a>
                        <a href="/shoppingpay" className="text-gray-700 hover:text-blue-600">Buy</a>
                    </div>
                </div>
                <div className="hidden md:flex md:items-center">
                    {isAuthenticated ? ( 
                        <>
                        <span className="text-gray-700 mr-2">Welcome</span>
                        <a onClick={handleLogout} className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer">Logout</a>
                        </>

                    ) : (
                        <>
                        <a href="/login" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mr-2">Login</a>
                        </>

                    )}

                </div>
                <div className="-mr-2 flex md:hidden">
                    <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-blue-600 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        {/* Menú móvil */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className="space-y-1 px-2 pt-2 pb-3">
                <a href="/" className="block text-gray-700 hover:text-blue-600">Home</a>
                <a href="/walletload" className="block text-gray-700 hover:text-blue-600">Recharge wallet</a>
                <a href="/walletcheck" className="block text-gray-700 hover:text-blue-600">Check Wallet</a>
                <a href="/shoppingpay" className="block text-gray-700 hover:text-blue-600">Buy</a>
            </div>
        </div>
    </nav>

    )
}

export default Navbar;
