import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import './App.css'


const FAQs = [
  {
    question: "What is Lorem Ipsum?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    question: "Why do we use Lorem Ipsum?",
    answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    question: "Where does Lorem Ipsum come from?",
    answer: "Contrary to popular belief, Lorem Ipsum is not simply random text."
  },
  {
    question: "Is Lorem Ipsum readable English?",
    answer: "It looks like English, but its words are altered. The words have been scrambled to make it nonsensical."
  },
  {
    question: "What are the applications of Lorem Ipsum?",
    answer: "Lorem Ipsum is used in typography, graphic design, and printing as a placeholder text."
  },
  {
    question: "Who uses Lorem Ipsum?",
    answer: "It's commonly used by designers, developers, and printers as a placeholder text."
  },
  {
    question: "Is Lorem Ipsum copyrighted?",
    answer: "No, Lorem Ipsum is not copyrighted, and it can be freely used."
  },
  {
    question: "Can Lorem Ipsum be translated?",
    answer: "Yes, Lorem Ipsum can be translated into different languages."
  },
  {
    question: "Where can I get Lorem Ipsum?",
    answer: "There are many websites that provide Lorem Ipsum generators."
  }
];


function App() {

  return (
    <>
    <Accordion type="single" collapsible className="w-full">
      {
        FAQs.map((faq, index) => 
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        )
      }
    </Accordion>
    </>
  )
}

export default App