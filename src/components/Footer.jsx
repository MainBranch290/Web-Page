import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex justify-between">
        <p>© 2024 FashionCloth. All rights reserved.</p>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:text-gray-400">Facebook</a></li>
          <li><a href="#" className="hover:text-gray-400">Instagram</a></li>
          <li><a href="#" className="hover:text-gray-400">Twitter</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
