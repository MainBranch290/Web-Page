import React from 'react';

const ProductGrid = () => {
  const products = [
    { id: 1, name: 'Stylish Jacket', price: '₹ 3500', image: '/jacket2.jpg' },
    { id: 2, name: 'Casual T-shirt', price: '₹ 4500', image: '/Casual T-shirt.jpg' },
    { id: 3, name: 'Classic Shoes', price: '₹ 5000', image: '/fashion-shoes-sneakers.jpg' },
    { id: 4, name: 'Elegant Dress', price: '₹ 2500', image: '/Elegant Dress.jpg' },
  ];

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        <span className="text-black-500">Shop</span> Our Collection
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <div key={product.id} className="border rounded-lg shadow-lg p-4 hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
            <img src={product.image} alt={product.name} className="h-48 w-full object-cover mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
            <p className="mt-2 text-gray-600">{product.price}</p>

            <div className="flex justify-between mt-4">
              {/* Rotating button with a heart icon */}
              <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300 ease-in-out transform hover:rotate-3"
                aria-label="Add to Wishlist">
                <svg className="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>

              {/* Pulsating button with a cart icon */}
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:animate-pulse"
                aria-label="Add to Cart">
                <svg className="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 002 2v6a2 2 0 002 2h-2v-7a2 2 0 00-2-2H5v7a2 2 0 002 2h12v-6a2 2 0 00-2-2m-5.657-1.757l-.707.707a1 1 0 00-1.414 1.414l-.707-.707a1 1 0 00-1.414 0l-.707.707a1 1 0 101.414 1.414l.707-.707a1 1 0 000-1.414z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;