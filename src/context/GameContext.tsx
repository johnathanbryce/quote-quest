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
  handleToggleActiveQuoters: (targetName: string) => void;
  handleResetGame: () => void;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

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

  const handleToggleActiveQuoters = (targetName: string) => {
    const MIN_ACTIVE_QUOTERS = 2;

    // count the number of active quoters before the toggle
    const activeQuoters = quotersList.filter((quoter) => quoter.isActive);
    const activeQuotersCount = activeQuoters.length;

    // find the target quoter
    const targetQuoter = quotersList.find((quoter) => quoter.name === targetName);

    if (targetQuoter) {
      // ensure at least 2 active quoters
      if (targetQuoter.isActive && activeQuotersCount <= MIN_ACTIVE_QUOTERS) {
        // TODO: display message that you cannot have less than 2 quoters
        console.warn(
          `Cannot deactivate "${targetName}". There must be at least ${MIN_ACTIVE_QUOTERS} active quoters.`
        );
        return;
      }
    }

    // toggle the target quoter's isActive status
    const updatedQuotersList = quotersList.map((quoter) =>
      quoter.name === targetName ? { ...quoter, isActive: !quoter.isActive } : quoter
    );
    setQuotersList(updatedQuotersList);

    // update the list of active quoters using the updated list
    const updatedActiveQuoters = updatedQuotersList.filter((quoter) => quoter.isActive);
    const activeQuotersNames = updatedActiveQuoters.map((quoter) => quoter.name);

    // update the quotes array based on active quoters
    const updatedQuotesList = quotes.filter((quote) => activeQuotersNames.includes(quote.author));
    setQuotesArray(updatedQuotesList);

    // ensure there's at least one quote before updating the current quote
    if (updatedQuotesList.length > 0) {
      setCurrentQuote(updatedQuotesList[Math.floor(Math.random() * updatedQuotesList.length)]);
    } else {
      console.warn("No quotes available for the selected active quoters.");
      // TODO: handle "end game" of no more quotes
    }
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
        handleToggleActiveQuoters,
        handleResetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
