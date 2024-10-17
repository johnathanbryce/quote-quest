import React from "react";

type QuoteDisplayProps = {
  quote: string;
};

const QuoteDisplay = ({ quote }: QuoteDisplayProps) => {
  return <div>{quote}</div>;
};

export default QuoteDisplay;
