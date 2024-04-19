'use client'

import React, { useEffect, useState } from 'react';
import Button from './button';
import TarotCardMessage from './tarotCardMessage';
import CardFetchButton from './cardFetchButton';

interface TarotCard {
  name: string;
  meaning_up: string;
}

interface ApiResponse {
  cards: TarotCard[];
}

export default function LuckyGenerator() {
  const [luckyNumber, setLuckyNumber] = useState<number | null>(null);
  const [data, setData] = useState<TarotCard | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getLuckyNumber = (max=24) => {
    setLuckyNumber(Math.floor(Math.random() * (max > 0 ? max : 24)));
  };

  const getLuckyCardByValue = async (num: number) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://tarotapi.dev/api/v1/cards/search?value=${num}`);
      const apiResponse: ApiResponse = await response.json();
      if (apiResponse.cards.length === 0) {
        setData(null);
        throw new Error('No cards found');
      }
      setData(apiResponse.cards[0]);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (luckyNumber !== null) {
      getLuckyCardByValue(luckyNumber);
    }
  }, [luckyNumber]);

  useEffect(() => {
    setMessage(data ? `Name: ${data.name}, Meaning Up: ${data.meaning_up}` : null);
  }, [data]);

  return (
    <div className="flex flex-col items-center justify-center p-24">
      <ul className="list-none">
        <li className="p-2">Click the button to get your lucky number</li>
        {luckyNumber !== null && 
          <li className="p-2 flex justify-start items-center">
            <div>Your lucky number is: </div>
            <div className='text-3xl p-4'>{luckyNumber}</div>
          </li>}
      </ul>
      <Button name="Get Lucky!" onClick={() => getLuckyNumber()} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && message && 
      <TarotCardMessage 
        message={message} 
        name={data?.name} 
        meaning_up={data?.meaning_up}
      />}
    </div>
  );
}
