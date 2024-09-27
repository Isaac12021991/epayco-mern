function LandingPage() {
    return (
        <div className="bg-gray-100">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center h-screen bg-green-500 text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to Our Payment Gateway</h1>
            <p className="text-lg mb-6">
                Secure, fast, and easy payment processing for your business. Start accepting payments today!
            </p>
            <a href="/register" className="bg-white text-green-500 px-6 py-3 rounded hover:bg-gray-200 transition duration-300">
                Get Started Now
            </a>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white shadow-md rounded-lg p-6 text-center">
                    <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
                    <p className="text-gray-600">
                        Easily integrate our payment gateway with your existing systems and start processing payments in no time.
                    </p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 text-center">
                    <h3 className="text-xl font-semibold mb-2">Robust Security</h3>
                    <p className="text-gray-600">
                        Protect your transactions with state-of-the-art encryption and security measures.
                    </p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 text-center">
                    <h3 className="text-xl font-semibold mb-2">Real-Time Analytics</h3>
                    <p className="text-gray-600">
                        Gain insights into your transactions and customer behavior with our comprehensive analytics dashboard.
                    </p>
                </div>
            </div>
        </div>


        {/* Call to Action Section */}
        <div className="flex flex-col items-center justify-center py-16 bg-green-600 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Payments?</h2>
            <p className="text-lg mb-6">Join us and discover the power of our payment gateway.</p>
            <a href="/register" className="bg-white text-green-600 px-6 py-3 rounded hover:bg-gray-200 transition duration-300">
                Sign Up Now
            </a>
        </div>

        {/* Author and Links Section */}
        <div className="py-8 text-center">
            <p className="text-gray-600">Author: Isaac Elias Betancourt</p>
            <p className="text-gray-600">Email: <a href="mailto:isaac12021991@gmail.com" className="text-green-600 hover:underline">isaac12021991@gmail.com</a></p>
            <p className="text-gray-600">Date: {new Date().toLocaleDateString()}</p>
            <div className="mt-4">
                <a href="https://github.com/epayco" className="text-green-600 hover:underline mr-4">GitHub</a>
                <a href="https://github.com/isaac12021991" className="text-green-600 hover:underline">GitHub Profile</a>
            </div>
        </div>

        {/* Thank You Section */}
        <div className="bg-gray-200 py-8 text-center">
            <p className="text-gray-600">Thank you for considering to Eapyco !</p>
        </div>
    </div>
      
    );
}

export default LandingPage;