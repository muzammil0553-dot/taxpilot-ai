import "./FAQ.css";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function FAQ() {

  const [open, setOpen] = useState(0);

  const faqs = [

    {
      question: "Which TaxPilot product is right for me?",
      answer:
        "Use the Recommendation tool to find the best product based on your tax situation."
    },

    {
      question: "Can I compare all products?",
      answer:
        "Yes. Open the Compare Products page to compare all TaxPilot plans side by side."
    },

    {
      question: "What is RRSP?",
      answer:
        "RRSP (Registered Retirement Savings Plan) helps Canadians save for retirement while receiving tax benefits."
    },

    {
      question: "Does TaxPilot AI provide recommendations?",
      answer:
        "Yes. TaxPilot AI can answer tax-related questions and recommend suitable products."
    },

    {
      question: "Can I export product information?",
      answer:
        "Yes. The Admin Products page allows exporting product configuration as JSON."
    }

  ];

  return (

    <section className="faq-section">

      <div className="container">

        <div className="section-header">

          <h2>Frequently Asked Questions</h2>

          <p>

            Find answers to the most common questions about TaxPilot.

          </p>

        </div>

        <div className="faq-list">

          {faqs.map((item, index) => (

            <div className="faq-item" key={index}>

              <button

                className="faq-question"

                onClick={() =>
                  setOpen(open === index ? -1 : index)
                }

              >

                <span>{item.question}</span>

                {open === index ? (

                  <FaChevronUp />

                ) : (

                  <FaChevronDown />

                )}

              </button>

              {open === index && (

                <div className="faq-answer">

                  <p>{item.answer}</p>

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}