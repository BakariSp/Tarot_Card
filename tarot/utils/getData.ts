import React from 'react'

interface TarotCard {
  name: string;
  meaning_up: string;
}


interface ApiResponse {
  cards: TarotCard[];
}


const getData = async () => {
  return (
    'hello world'
  )
}

interface TarotCard {
  name: string;
  meaning_up: string;
}

async function fetchTarotCards(num: number): Promise<TarotCard> {
  const response = await fetch(`https://tarotapi.dev/api/v1/cards/search?value=${num}`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data: ApiResponse = await response.json();
  if (data.cards.length === 0) {
    throw new Error('No cards found');
  }
  return data.cards[0];  // Return only the first card
}


export { getData, fetchTarotCards }
