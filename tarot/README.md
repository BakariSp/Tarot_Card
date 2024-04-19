# Installation
To run this application:

## Ensure you have Node.js installed.
Clone the repository and navigate into the project directory.
Install dependencies with `npm install`.
Start the application with `npm run dev`.
Make sure to set up the necessary environment variables (NEXT_PUBLIC_REACT_APP_API_KEY_NINJAS and NEXT_PUBLIC_REACT_APP_OPENAI_API_KEY) to ensure API functionality.

## Main Functions

### Lucky Number and Tarot Card Fetching

- **Get Lucky Number:** Users can generate a random number by clicking the "Get Lucky!" button. This number is crucial for fetching a specific tarot card.
- **Fetch Tarot Card:** Utilizes the generated number to make an API call to `https://tarotapi.dev/api/v1/cards/search?value=${num}` and retrieve a tarot card. The card's name and upright meaning are then displayed.

### Quote Fetching and Tarot Card Analysis

- **Fetch Quote:** After a tarot card is displayed, users can opt to fetch a quote by clicking the "Get Lucky Quote" button, which makes an API call to `https://api.api-ninjas.com/v1/quotes?category=happiness`.
- **Tarot Card Analysis:** With a quote and a tarot card on display, users can request an analysis by clicking the "Analyze Tarot Card" button. This function uses the OpenAI API to analyze the significance of the tarot card in relation to the fetched quote.

## Installation and Setup

1. Clone the repository and navigate to the project directory.
2. Run `npm install` to install the necessary dependencies.
3. Set the environment variables for API keys (`NEXT_PUBLIC_REACT_APP_API_KEY_NINJAS` and `NEXT_PUBLIC_REACT_APP_OPENAI_API_KEY`).
4. Execute `npm start` to run the application.

This README focuses on the essential functionalities and setup instructions, providing users with a concise guide to start using the application immediately.
