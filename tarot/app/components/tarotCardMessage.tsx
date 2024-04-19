'use client'
import React, { FC, useEffect, useState } from 'react';
import Button from './button'; // Ensure the import name matches the file name case

interface TarotCard {
  message?: string;
  name?: string;
  meaning_up?: string;
}

interface Quote {
  author: string;
  quote: string;
  category: string;
}

const TarotCardMessage: FC<TarotCard> = ({ message, name, meaning_up }) => {
  const [loadingQuote, setLoadingQuote] = useState(false);
  const [loadingAnalysis, setLoadingAnalysis] = useState(false);
  const [quote, setQuote] = useState<Quote | null>(null);
  const [getQuote, setGetQuote] = useState(false);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [getAnalysis, setGetAnalysis] = useState(false);
  const category = 'happiness';
  const api_url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
  const api_key = process.env.NEXT_PUBLIC_REACT_APP_API_KEY_NINJAS; // Use the environment variable
  const openai_api_key = process.env.NEXT_PUBLIC_REACT_APP_OPENAI_API_KEY; // Securely store and use your OpenAI API key

  const fetchQuote = async () => {
    setLoadingQuote(true);
    try {
      const response = await fetch(api_url, {
        headers: { 'X-Api-Key': api_key }
      });
      const quotes: Quote[] = await response.json();
      if (quotes.length > 0) {
        setQuote(quotes[0]);
      } else {
        setQuote(null);
        console.error('No quotes found');
      }
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
    setLoadingQuote(false);
  };

  const analyzeTarotCard = async () => {
    if (!quote || !name || !meaning_up) return;
    setLoadingAnalysis(true);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openai_api_key}`
        },
        body: JSON.stringify({
          model: "gpt-4",
          messages: [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": `Analyze the tarot card named "${name}" with the meaning "${meaning_up}" and its relation to the quote "${quote.quote}" by ${quote.author}.`}
          ],
          max_tokens: 150
        })
      });

      const data = await response.json();
      if (data.choices && data.choices.length > 0) {
        setAnalysis(data.choices[0].message.content);
      } else {
        console.error('Invalid response format:', data);
      }
    } catch (error) {
      console.error('Error in analysis:', error);
    }
    setLoadingAnalysis(false);
  };

  useEffect(() => {
    if (getQuote) {
      fetchQuote();
      setGetQuote(false); // Reset after fetching
    }
  }, [getQuote]);

  useEffect(() => {
    if (getAnalysis) {
      analyzeTarotCard();
      setGetAnalysis(false); // Reset after fetching
    }
  }, [getAnalysis]);

  const handleQuoteButtonClick = () => {
    setGetQuote(true);
  };

  const handleAnalysisButtonClick = () => {
    setGetAnalysis(true);
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='justify-center card w-96 bg-base-100 shadow-xl'>
        <div className="card-body">
          <div className="card-title">{name}</div>
          <p>{meaning_up}</p>
        </div>
      </div>
      <div className='items-center'>
        <Button name='Get Lucky Quote' onClick={handleQuoteButtonClick} />
        {loadingQuote && <p>Loading quote...</p>}
        {quote && (
          <div>
            <div className='card w-96 bg-base-100 shadow-xl'>
              <div className="card-body">
                <div className="card-title">{quote.author}</div>
                <div>{quote.quote}</div>
              </div>
            </div>
            <Button name='Analyze Tarot Card' onClick={handleAnalysisButtonClick} />
          </div>
        )}
        {loadingAnalysis && <p>Analyzing...</p>}
        {analysis && (
          <div className='card w-96 bg-base-100 shadow-xl mt-4'>
            <div className="card-body">
              <div className="card-title">Analysis</div>
              <p>{analysis}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TarotCardMessage;
