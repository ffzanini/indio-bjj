import * as Accordion from '@radix-ui/react-accordion'
import { RiArrowDownLine } from 'react-icons/ri'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
}

export function FAQ({ items }: FAQProps) {
  return (
    <Accordion.Root type="multiple" className="w-full space-y-2">
      {items.map((item, index) => (
        <Accordion.Item
          key={index}
          value={`item-${index}`}
          className="border rounded-lg overflow-hidden"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full justify-between items-center p-4 font-medium text-left text-gray-600">
              <span>{item.question}</span>
              <RiArrowDownLine
                size={20}
                fill="#515151"
                className="transition-transform duration-300 group-data-[state=open]:rotate-180 mr-8 "
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="p-4 text-gray-600 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden transition-all duration-300">
            {item.answer}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
