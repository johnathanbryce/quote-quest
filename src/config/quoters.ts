import { v4 as uuidv4 } from "uuid";
import { Quoter } from "../types/quotes";

export const quoters: Quoter[] = [
  {
    id: uuidv4(),
    name: "AI",
  },
  {
    id: uuidv4(),
    name: "Trump",
  },
  {
    id: uuidv4(),
    name: "Charlie Sheen",
  },
  {
    id: uuidv4(),
    name: "Ozzy Osbourne",
  },
];
