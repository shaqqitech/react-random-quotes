import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Quote from './components/Quote';
import Button from './components/Button';

const App = () => {
  const [quote, setQuote] = useState({ text: '', author: '' });

  const fetchRandomQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      const { content, author } = response.data;
      setQuote({ text: content, author: author });
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Quote text={quote.text} author={quote.author} />
      <Button onClick={fetchRandomQuote} />
    </div>
  );
};

export default App;
