"use client";

import { useState } from "react";
import { RiArrowDownLine } from "react-icons/ri";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export function FAQ({ items }: Readonly<FAQProps>) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggle = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <div className="bg-card w-full space-y-2">
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        return (
          <div
            key={index}
            className="border border-foreground/20 rounded-lg overflow-hidden transition-all duration-300 bg-card"
          >
            <button
              onClick={() => toggle(index)}
              className="group flex w-full justify-between items-center p-4 font-medium text-left text-foreground"
            >
              <span>{item.question}</span>
              <RiArrowDownLine
                size={20}
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 text-muted-foreground px-4 overflow-hidden ${
                isOpen ? "grid-rows-[1fr] py-4" : "grid-rows-[0fr] py-0"
              }`}
            >
              <div className="overflow-hidden">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
