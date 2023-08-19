import React from 'react';

const Quote = ({ text, author }) => {
  return (
    <div className="bg-white p-6 rounded-lg border-2 border-black shadow-2xl">
      <blockquote className="text-xl italic">{text}</blockquote>
      <p className="text-right mt-2">- {author}</p>
    </div>
  );
};

export default Quote;
