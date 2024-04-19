# Tarot Card Application

https://github.com/BakariSp/Tarot_Card/assets/46394756/4c06b6fd-c3f0-4bd0-bf64-84365e597a21


## Overview

This React application is designed to provide users with a unique tarot card experience by generating a lucky tarot card and additional insights. The application leverages asynchronous API calls to fetch tarot card details and relevant quotes, followed by a deeper analysis of the card's meaning in the context of the fetched quote.

## Key Features

### Lucky Number and Tarot Card Generation

- **Get Lucky Number:** Users can generate a random lucky number by clicking a button. This number is then used to fetch a tarot card from a remote API (`https://tarotapi.dev/api/v1/cards/search?value=${num}`).
- **Display Tarot Card:** Once the card is fetched, it is displayed along with its name and upright meaning.

### Quote and Analysis Integration

- **Fetching a Quote:** When a tarot card is displayed, users can opt to fetch a quote related to happiness from the API (`https://api.api-ninjas.com/v1/quotes?category=happiness`), using an API key for authentication.
- **Analyzing Tarot Card:** Post fetching the quote, users can request an analysis of how the tarot card’s themes relate to the quote. This analysis is performed by making a request to the OpenAI API, incorporating the card’s name, meaning, and the quote into a cohesive interpretative text.

## Application Logic

### Components

- **LuckyGenerator:** This component handles the generation of the lucky number and the fetching of the tarot card. It maintains states for the lucky number, fetched tarot card data, loading status, and any errors encountered.
- **TarotCardMessage:** Responsible for displaying the tarot card information, fetching quotes, and triggering the analysis. It handles multiple states for managing the quote data, analysis results, and their respective loading states.

### Hooks and State Management

- **useState:** Used to manage state across the application, including data handling and UI states (like loading indicators).
- **useEffect:** Reacts to changes in state, such as the updating of the lucky number or the need to fetch a new quote or analyze the tarot card.

### Error Handling

- The application gracefully handles errors from API requests by setting an error state and displaying appropriate error messages to the user.

## Installation

To run this application:

1. Ensure you have Node.js installed.
2. Clone the repository and navigate into the project directory.
3. Install dependencies with `npm install`.
4. Start the application with `npm start`.

Make sure to set up the necessary environment variables (`NEXT_PUBLIC_REACT_APP_API_KEY_NINJAS` and `NEXT_PUBLIC_REACT_APP_OPENAI_API_KEY`) to ensure API functionality.

## Usage

To use the application, simply access the main page, click the "Get Lucky!" button to generate a lucky number and fetch a tarot card. Optionally, you can fetch a related quote and request an analysis of the card in relation to the quote.
