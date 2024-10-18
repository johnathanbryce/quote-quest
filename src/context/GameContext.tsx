import React, { createContext, useState, useContext } from "react";
// config
import { quotes } from "../config/quotes";
import { quoters } from "../config/quoters";
// types
import { Quoter, Quote } from "../types/quotes";

type GameProviderProps = {
  children: React.ReactNode;
};

type GameContextType = {
  score: number;
  currentQuote: Quote;
  quotersList: Quoter[];
  handleSelectAnswer: (quoter: string) => void;
  handleQuoterToggle: (quoter: string) => void;
};

// Define the context and its default values
const GameContext = createContext<GameContextType | undefined>(undefined);

// Custom hook to use the GameContext
export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};

export const GameProvider = ({ children }: GameProviderProps) => {
  const [score, setScore] = useState(0);
  const [quotesArray, setQuotesArray] = useState<Quote[]>(quotes);
  const [currentQuote, setCurrentQuote] = useState<Quote>(
    quotes[Math.floor(Math.random() * quotes.length)]
  ); // initialize with a random quote
  const [quotersList, setQuotersList] = useState<Quoter[]>(quoters);

  // TODO: leverage useMemo where possible to minimize re-renders and optimize

  const handleSelectAnswer = (quoter: string) => {
    console.log(`Selected quoter: ${quoter}`);

    // Check if quoter matches currentQuote's author
    // Update the score if needed

    // Filter out the current quote
    const filteredQuotes = quotesArray.filter((quote) => quote !== currentQuote);

    // Update the state with the new filtered array
    setQuotesArray(filteredQuotes);

    // Select a new random quote if there are remaining quotes
    if (filteredQuotes.length > 0) {
      const nextQuote = filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];
      setCurrentQuote(nextQuote);
    } else {
      // TODO: end game logic:
      console.log("Game Over!"); // You can handle game end here
    }
  };

  const handleQuoterToggle = (quoter: any) => {
    console.log("click");
  };

  /*   const handleFilterQuoter = (author: string) => {
    // toggle filtering out the quotes by quotes.author
    // update currentQuote with filtered results
  };

  // reset the game
  const handleResetGame = () => {};
 */
  return (
    <GameContext.Provider
      value={{ score, currentQuote, quotersList, handleSelectAnswer, handleQuoterToggle }}
    >
      {children}
    </GameContext.Provider>
  );
};
