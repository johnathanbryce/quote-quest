import QuoterCard from "./QuoterCard";
import { useGame } from "../context/GameContext";

const QuoterFilterList = () => {
  const { quotersList, handleToggleActiveStatus } = useGame();
  return (
    <>
      {quotersList.map((quoter) => (
        <div key={quoter.id}>
          <QuoterCard
            image={quoter.image}
            name={quoter.name}
            handleSelect={handleToggleActiveStatus}
          />
        </div>
      ))}
    </>
  );
};

export default QuoterFilterList;
