// components
import QuoterCard from "../Cards/QuoterCard";
// context
import { useGame } from "../../../context/GameContext";

const QuoterFilterList = () => {
  const { quotersList, handleToggleActiveQuoters } = useGame();
  return (
    <div className="flex-center">
      {quotersList.map((quoter) => (
        <div key={quoter.id}>
          <QuoterCard
            image={quoter.image}
            name={quoter.name}
            handleSelect={handleToggleActiveQuoters}
          />
        </div>
      ))}
    </div>
  );
};

export default QuoterFilterList;
