import { useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion";

function AccordionPage() {
  const items = [
    {
      index: 0,
      label: "a",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eaque tempore voluptatibus, iste, eligendi vero culpa laudantium eos rerum quis nemo. Quam officia autem molestias expedita ut! Suscipit, obcaecati at.",
    },
    {
      index: 1,
      label: "ab",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eaque tempore voluptatibus, iste, eligendi vero culpa laudantium eos rerum quis nemo. Quam officia autem molestias",
    },
    {
      index: 2,
      label: "abc",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eaque tempore voluptatibus, iste, eligendi vero culpa laudantium eos rerum quis nemo.",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
