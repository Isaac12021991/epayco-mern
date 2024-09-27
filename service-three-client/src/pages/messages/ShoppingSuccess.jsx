function ShoppingSuccess() {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg text-center">
                {/* Success Message */}
                <h1 className="text-4xl font-bold text-green-500 mb-4">Thank You!</h1>
                <p className="text-lg text-gray-700 mb-6">
                    Your purchase was successful. We truly appreciate your trust in our payment gateway system!
                </p>

                {/* Purchase Details */}
                <p className="text-gray-600 mb-4">
                    You will receive an email confirmation shortly with your order details.
                </p>

                {/* CTA */}
                <a href="/" className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition duration-300">
                    Go to Homepage
                </a>


                {/* Thank You Section */}
                <div className="mt-6 text-center">
                    <p className="text-gray-600">Thank you for using our payment system!</p>
                </div>
            </div>
        </div>
      
    );
}

export default ShoppingSuccess;