import React, { useState } from 'react';
import Button from './button';
import { getData, fetchTarotCards } from '@/utils/getData';
import TarotCardMessage from './tarotCardMessage';

interface FetchButtonProps {
  value: number;
}

// const getLuckyCard = async (luckyNum: number) => {
//   if (!luckyNum) {
//     console.error('Invalid lucky number provided');
//     return;
//   }

//   try {
//     const { cards } = await fetchTarotCards(luckyNum);
//     const messages = cards.map(card => `Name: ${card.name}, Meaning Up: ${card.meaning_up}`);
//     return messages;
//   } catch (error) {
//     console.error('Failed to fetch data:', error);
//   }
// };

const CardFetchButton: ({}: FetchButtonProps) => Promise<JSX.Element> = async ({ value }) => {
  const data = await fetchTarotCards(value);
  // Construct a message string from the TarotCard object
  const message = data ? `Name: ${data.name}, Meaning Up: ${data.meaning_up}` : '';

  return (
    <div>
      <div>Your Lucky Card</div>
      {data && <TarotCardMessage message={message} />}
    </div>
  );
};

export default CardFetchButton;
