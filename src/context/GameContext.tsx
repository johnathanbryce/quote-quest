import React, { createContext, useState, useContext } from "react";

type GameProviderProps = {
  children: React.ReactNode;
};

// Define the context and its default values
const GameContext = createContext({
  score: 0,
  currentQuote: "",
  quoters: [],
  handleSelectQuoter: (quoter: string) => {},
});

// Custom hook to use the GameContext
export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }: GameProviderProps) => {
  const [score, setScore] = useState(0);
  const [currentQuote, setCurrentQuote] = useState("Hello World");
  const [quoters, setQuoters] = useState(["AI", "Trump", "Charlie Sheen", "Ozzy Osbourne"]);

  const handleSelectQuoter = (quoter) => {
    console.log(`Selected quoter: ${quoter}`);
    // Logic for handling quoter selection, updating score, etc.
  };

  return (
    <GameContext.Provider value={{ score, currentQuote, quoters, handleSelectQuoter }}>
      {children}
    </GameContext.Provider>
  );
};
