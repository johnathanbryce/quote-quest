import React from "react";
import Quoter from "./Quoter";

type QuoterListProps = {
  quoters: any[]; // TODO: create custom type
  handleSelectQuoter: () => void;
};
const QuoterList = ({ quoters, handleSelectQuoter }: QuoterListProps) => {
  return (
    <div>
      {quoters.map((quoter) => (
        <p>{quoter}</p>
      ))}
    </div>
  );
};

export default QuoterList;
