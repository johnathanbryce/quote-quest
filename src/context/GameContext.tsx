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
  correctAnswer: string;
  isGameStarted: boolean;
  isGameEnded: boolean;
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
  // score
  const [score, setScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  // quotes:
  const [quotesArray, setQuotesArray] = useState<Quote[]>(quotes);
  const [currentQuote, setCurrentQuote] = useState<Quote>(
    quotes[Math.floor(Math.random() * quotes.length)]
  ); // initialize with a random quote
  const [quotersList, setQuotersList] = useState<Quoter[]>(quoters);
  // game & round status:
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameEnded, setIsGameEnded] = useState(false);
  // user feedback
  const [roundWinnerIsUser, setRoundWinnerIsUser] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState("");

  const handleSelectAnswer = (quoter: string) => {
    if (!isGameStarted) setIsGameStarted(true);
    // if computer wins:
    if (currentQuote.author !== quoter) {
      setRoundWinnerIsUser(false);
      setCorrectAnswer(currentQuote.author.toString());
      setComputerScore((prev) => prev + 1);
    }

    // if  user wins:
    if (currentQuote.author === quoter) {
      setRoundWinnerIsUser(true);
      setCorrectAnswer("");
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
      setIsGameStarted(false);
      setIsGameEnded(true);
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

    console.log(targetQuoter);

    if (targetQuoter) {
      // ensure at least 2 active quoters
      if (targetQuoter.isActive && activeQuotersCount <= MIN_ACTIVE_QUOTERS) {
        console.error(
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

    console.log(activeQuotersNames);

    // step 1: update the quotes array based on active quoters
    const updatedQuotesListNamesRemoved = quotes.filter((quote) =>
      activeQuotersNames.includes(quote.author)
    );

    // step 2: filter to remove AI quotes imitating the targetName
    const updatedQuotesList = updatedQuotesListNamesRemoved.filter(
      (quote) => quote.imitating !== targetName
    );

    // Set the updated quotes array
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
    setIsGameStarted(false);
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
        correctAnswer,
        isGameStarted,
        isGameEnded,
        handleSelectAnswer,
        handleToggleActiveQuoters,
        handleResetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
