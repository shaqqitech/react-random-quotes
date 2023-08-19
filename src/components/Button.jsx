import React from 'react';

const Button = ({ onClick }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-7 shadow-2xl"
      onClick={onClick}
    >
      Get New Quote
    </button>
  );
};

export default Button;
