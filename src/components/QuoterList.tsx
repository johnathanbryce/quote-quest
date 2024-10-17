import React from "react";
import QuoterCard from "./QuoterCard";
import { Quoter } from "../types/quotes";

type QuoterListProps = {
  quoters: Quoter[]; // TODO: create custom type
};

const QuoterList = ({ quoters }: QuoterListProps) => {
  return (
    <div>
      {quoters.map((quoter) => (
        <QuoterCard key={quoter.id} id={quoter.id} name={quoter.name} />
      ))}
    </div>
  );
};

export default QuoterList;
