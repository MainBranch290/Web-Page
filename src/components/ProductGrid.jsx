import React from 'react';

const ProductGrid = () => {
  const products = [
    { id: 1, name: 'Stylish Jacket', price: '$120', image: 'https://example.com/jacket.jpg' },
    { id: 2, name: 'Casual T-shirt', price: '$35', image: 'https://example.com/tshirt.jpg' },
    { id: 3, name: 'Classic Shoes', price: '$75', image: 'https://example.com/shoes.jpg' },
    { id: 4, name: 'Elegant Dress', price: '$180', image: 'https://example.com/dress.jpg' },
  ];

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Shop Our Collection</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <div key={product.id} className="border rounded-lg shadow-lg p-4">
            <img src={product.image} alt={product.name} className="h-48 w-full object-cover mb-4" />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="mt-2">{product.price}</p>
            <button className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
