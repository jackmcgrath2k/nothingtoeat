'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const IngredientsAccordion = ({ ingredients }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full max-w-md mx-auto my-8">
      <button
        onClick={toggleAccordion}
        className="w-full flex items-center justify-between p-4 text-lg font-semibold text-left bg-gray-100"
      >
        <span className='text-black'>Ingredients</span>
        <span className="ml-2 text-2xl text-black font-light">
          {isOpen ? '-' : '+'} {/* Toggle between + and - */}
        </span>
      </button>

      {/* Motion for animated accordion content */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden bg-gray-50"
      >
        <div className="p-4 text-gray-700">
          <ul>
            {ingredients.length > 0 ? (
              ingredients.map((ingredient, index) => (
                <li key={index} className="mb-2">
                  {ingredient}
                </li>
              ))
            ) : (
              <li>No ingredients available</li>
            )}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default IngredientsAccordion;
