// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-black py-10">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row justify-between items-start">
//           <div className="mb-4 md:mb-0">
//             <h3 className="text-xl font-bold mb-2">Women</h3>
//             <ul className="list-none p-0 text-gray-400 ">
//               <li className="mb-2 hover:text-white"><a href="#">Westernwear</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Ethnicwear</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Sports & Activewear</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Sleepwear & Lingerie</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Bags,wallets & Clutches</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Footwear</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Accessories</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Shop By Occasion</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Shop By Brand</a></li>
//             </ul>
//           </div>
//           <div className="mb-4 md:mb-0">
//             <h3 className="text-xl font-bold mb-2">Men</h3>
//             <ul className="list-none p-0 text-gray-400 ">
//               <li className="mb-2 hover:text-white"><a href="#">Top Wear</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Bottom Wear</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Ethnic Wear</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Accessories</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Sports And Activewear</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Footwear</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Innerwear And Sleepwear</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Bags And Backpacks</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Shop By Occasion</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Shop By Brand</a></li>
//             </ul>
//           </div>
//           <div className="mb-4 md:mb-0">
//             <h3 className="text-xl font-bold mb-2">Kids</h3>
//             <ul className="list-none p-0 text-gray-400 ">
//               <li className="mb-2 hover:text-white"><a href="#">Boys Topwear</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Baby Bottomwear</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Girls Bottomwear</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Girls Topwear</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Boys Bottomwear</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Boys Innerwear And Sleepwear</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Girls Innerwear And Sleepwear</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Baby Innerwear And Sleepwear</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Girls Bags And Backpacks</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Boys Bags And Backpacks</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Baby Topwear</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Baby Footwear</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Girls Footwear</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Baby Accessories</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Boys Footwear</a></li>
//             </ul>
//           </div>
//           <div className="mb-4 md:mb-0">
//             <h3 className="text-xl font-bold mb-2">Home</h3>
//             <ul className="list-none p-0 text-gray-400 ">
//               <li className="mb-2 hover:text-white"><a href="#">Bath</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Bed</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Decor</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Kitchenware</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Shop By Product</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Shop By Brand</a></li>
//             </ul>
//           </div>
//           {/* <div className="mb-4 md:mb-0">
//             <h3 className="text-xl font-bold mb-2">Brands</h3>
//           </div> */}
//           <div className="mb-4 md:mb-0">
//             <h3 className="text-xl font-bold mb-2">Beauty</h3>
//             <ul className="list-none p-0 text-gray-400 ">
//               <li className="mb-2 hover:text-white"><a href="#">Makeup</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Mens Fragrances</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Womens Fragrances</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Shop By Brand</a></li>
//             </ul>
//           </div>
//           <div className="mb-4 md:mb-0">
//             <h3 className="text-xl font-bold mb-2">About</h3>
//             <ul className="list-none p-0 text-gray-400 ">
//               <li className="mb-2 hover:text-white"><a href="#">About Us</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Greencard</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Store Locator</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Payment Options</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Investor Relations</a></li>
//             </ul>
//           </div>
//           <div className="mb-4 md:mb-0">
//             <h3 className="text-xl font-bold mb-2">Customer</h3>
//             <ul className="list-none p-0 text-gray-400 ">
//               <li className="mb-2 hover:text-white"><a href="#">Track Order</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">FAQs</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Customer Support</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Returns & Exchange Policy</a></li>
//               <li className="mb-2 hover:text-white"><a href="#">Shipping Policy</a></li>
//             </ul>
//           </div>
//         </div>
//         <div className="flex flex-col md:flex-row justify-between items-center mt-8">
//           <div className="mb-4 md:mb-0">
//             <p className="text-gray-400">&copy; 2023 Your Company. All rights reserved.</p>
//           </div>
//           <div>
//             <ul className="flex items-center space-x-4">
//               <li><a href="#">Privacy Policy</a></li>
//               <li><a href="#">Terms of Service</a></li>
//               <li><a href="#">Contact Us</a></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-2 md:mb-0">
            <h3 className="text-xl font-bold mb-2 text-white inline-block border-b-2 border-gray-500 w-18">Women</h3>
            <ul className="list-none p-0 text-gray-400 mt-10">
              <li className="mb-2 hover:text-white"><a href="#">Westernwear</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Ethnicwear</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Sports & Activewear</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Sleepwear & Lingerie</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Bags,wallets & Clutches</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Footwear</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Accessories</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Shop By Occasion</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Shop By Brand</a></li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2 text-white inline-block border-b-2 border-gray-500 w-10">Men</h3>
            <ul className="list-none p-0 text-gray-400 mt-10">
              <li className="mb-2 hover:text-white"><a href="#">Top Wear</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Bottom Wear</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Ethnic Wear</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Accessories</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Sports And Activewear</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Footwear</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Innerwear And Sleepwear</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Bags And Backpacks</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Shop By Occasion</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Shop By Brand</a></li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2 text-white inline-block border-b-2 border-gray-500 w-12">Kids</h3>
            <ul className="list-none p-0 text-gray-400 mt-10">
              <li className="mb-2 hover:text-white"><a href="#">Boys Topwear</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Baby Bottomwear</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Girls Bottomwear</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Girls Topwear</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Boys Bottomwear</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Boys Innerwear And Sleepwear</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Girls Innerwear And Sleepwear</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Baby Innerwear And Sleepwear</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Girls Bags And Backpacks</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Boys Bags And Backpacks</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Baby Topwear</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Baby Footwear</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Girls Footwear</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Baby Accessories</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Boys Footwear</a></li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2 text-white inline-block border-b-2 border-gray-500 w-14">Home</h3>
            <ul className="list-none p-0 text-gray-400 mt-10">
              <li className="mb-2 hover:text-white"><a href="#">Bath</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Bed</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Decor</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Kitchenware</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Shop By Product</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Shop By Brand</a></li>
            </ul>
          </div>
          {/* <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Brands</h3>
          </div> */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2 text-white inline-block border-b-2 border-gray-500 w-18">Beauty</h3>
            <ul className="list-none p-0 text-gray-400 mt-10">
              <li className="mb-2 hover:text-white"><a href="#">Makeup</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Mens Fragrances</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Womens Fragrances</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Shop By Brand</a></li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2 text-white inline-block border-b-2 border-gray-500 w-18">About</h3>
            <ul className="list-none p-0 text-gray-400 mt-10">
              <li className="mb-2 hover:text-white"><a href="#">About Us</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Greencard</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Store Locator</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Payment Options</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Investor Relations</a></li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2 text-white inline-block border-b-2 border-gray-500 w-24">Customer</h3>
            <ul className="list-none p-0 text-gray-400 mt-10 ">
              <li className="mb-2 hover:text-white"><a href="#">Track Order</a></li>
              <li className="mb-2 hover:text-white"><a href="#">FAQs</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Customer Support</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Returns & Exchange Policy</a></li>
              <li className="mb-2 hover:text-white"><a href="#">Shipping Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">&copy; 2023 Your Company. All rights reserved.</p>
          </div>
          <div>
            <ul className="flex items-center space-x-4">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

