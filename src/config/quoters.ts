import { v4 as uuidv4 } from "uuid";
import { Quoter } from "../types/quotes";
import charlie from "../assets/charlie.jpg";
import kanye from "../assets/kanye.jpg";
import trump from "../assets/trump.jpg";
import ozzy from "../assets/ozzy.jpg";
import ai from "../assets/ai.jpg";

export const quoters: Quoter[] = [
  {
    id: uuidv4(),
    name: "AI",
    image: ai,
  },
  {
    id: uuidv4(),
    name: "Trump",
    image: trump,
  },
  {
    id: uuidv4(),
    name: "Charlie Sheen",
    image: charlie,
  },
  {
    id: uuidv4(),
    name: "Ozzy Osbourne",
    image: ozzy,
  },
  {
    id: uuidv4(),
    name: "Kanye West",
    image: kanye,
  },
];
