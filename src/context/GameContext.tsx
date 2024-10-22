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
  computerScore: number;
  currentQuote: Quote;
  quotersList: Quoter[];
  roundWinnerIsUser: boolean;
  handleSelectAnswer: (quoter: string) => void;
  handleToggleActiveStatus: (targetName: string) => void;
  handleResetGame: () => void;
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
  const [computerScore, setComputerScore] = useState(0);
  const [quotesArray, setQuotesArray] = useState<Quote[]>(quotes);
  const [currentQuote, setCurrentQuote] = useState<Quote>(
    quotes[Math.floor(Math.random() * quotes.length)]
  ); // initialize with a random quote
  const [quotersList, setQuotersList] = useState<Quoter[]>(quoters);
  const [roundWinnerIsUser, setRoundWinnerIsUser] = useState(false);

  // TODO: leverage useMemo where possible to minimize re-renders and optimize

  const handleSelectAnswer = (quoter: string) => {
    // if computer wins:
    if (currentQuote.author !== quoter) {
      setRoundWinnerIsUser(false);
      setComputerScore((prev) => prev + 1);
    }
    // if  user wins:
    if (currentQuote.author === quoter) {
      setRoundWinnerIsUser(true);
      setScore((prev) => prev + 1);
    }

    // filter out the current quote:
    const filteredQuotes = quotesArray.filter((quote) => quote !== currentQuote);
    setQuotesArray(filteredQuotes);

    // new random quote if there are remaining quotes:
    if (filteredQuotes.length > 0) {
      const nextQuote = filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];
      setCurrentQuote(nextQuote);
    } else {
      // TODO: end game logic:
      console.log("Game Over!"); // You can handle game end here
    }
  };

  const handleToggleActiveStatus = (targetName: string) => {
    // update quoters list to toggle target's isActive status:
    const updatedQuotersList = quotersList.map((quoter) =>
      quoter.name === targetName ? { ...quoter, isActive: !quoter.isActive } : quoter
    );
    setQuotersList(updatedQuotersList);

    // 1st. get a new array of quoters that have isActive status === true
    const activeQuoters = quotersList.filter((quoter) => quoter.isActive);
    const activeQuotersNames = activeQuoters.map((quoter) => quoter.name);
    // 2nd. filter out quotes without active quoters:
    const updatedQuotesList = quotes.filter((quote) => activeQuotersNames.includes(quote.author));
    setQuotesArray(updatedQuotesList);
    // 3rd. update the current quote:
    setCurrentQuote(updatedQuotesList[Math.floor(Math.random() * quotes.length)]);
  };

  const handleResetGame = () => {
    setScore(0);
    setComputerScore(0);
    setQuotesArray(quotes);
  };

  return (
    <GameContext.Provider
      value={{
        score,
        computerScore,
        currentQuote,
        quotersList,
        roundWinnerIsUser,
        handleSelectAnswer,
        handleToggleActiveStatus,
        handleResetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
