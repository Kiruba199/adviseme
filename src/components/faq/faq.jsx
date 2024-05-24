import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import React from "react";

const faq = [
  {
    question: "What services does AdviceMe provide ?",
    ans: " AdviceMe offers a wide range of consulting services tailored specifically for crypto and blockchain-based businesses. This includes strategic planning, market analysis, regulatory compliance, technology implementation, business development, and more across the full business lifecycle",
  },
  {
    question: "How does AdviceMe differentiate itself from competitors?",
    ans: " AdviceMe offers a wide range of consulting services tailored specifically for crypto and blockchain-based businesses. This includes strategic planning, market analysis, regulatory compliance, technology implementation, business development, and more across the full business lifecycle",
  },
  {
    question: "How does AdviceMe differentiate itself from competitors?",
    ans: " AdviceMe offers a wide range of consulting services tailored specifically for crypto and blockchain-based businesses. This includes strategic planning, market analysis, regulatory compliance, technology implementation, business development, and more across the full business lifecycle",
  },
  {
    question: "How does AdviceMe differentiate itself from competitors?",
    ans: " AdviceMe offers a wide range of consulting services tailored specifically for crypto and blockchain-based businesses. This includes strategic planning, market analysis, regulatory compliance, technology implementation, business development, and more across the full business lifecycle",
  },
  {
    question: "How does AdviceMe differentiate itself from competitors?",
    ans: " AdviceMe offers a wide range of consulting services tailored specifically for crypto and blockchain-based businesses. This includes strategic planning, market analysis, regulatory compliance, technology implementation, business development, and more across the full business lifecycle",
  },
  {
    question: "How does AdviceMe differentiate itself from competitors?",
    ans: " AdviceMe offers a wide range of consulting services tailored specifically for crypto and blockchain-based businesses. This includes strategic planning, market analysis, regulatory compliance, technology implementation, business development, and more across the full business lifecycle",
  },
];

const Accordions = () => (
  <Accordion.Root
    className="AccordionRoot"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    {faq.map((item, index) => (
      <Accordion.Item
        key={index}
        className="AccordionItem"
        value={`item-${index}`}
      >
        <AccordionTrigger>
          What services does AdviceMe provide?
        </AccordionTrigger>
        <AccordionContent>
          AdviceMe offers a wide range of consulting services tailored
          specifically for crypto and blockchain-based businesses. This includes
          strategic planning, market analysis, regulatory compliance, technology
          implementation, business development, and more across the full
          business lifecycle.
        </AccordionContent>
      </Accordion.Item>
    ))}
  </Accordion.Root>
);

// eslint-disable-next-line react/display-name
const AccordionTrigger = React.forwardRef(
  // eslint-disable-next-line react/prop-types
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className={classNames(
          "AccordionTrigger",
          className,
          "px-5 py-3 text-sm"
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        {/* <ChevronDownIcon className="AccordionChevron" aria-hidden /> */}
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

// eslint-disable-next-line react/display-name
const AccordionContent = React.forwardRef(
  // eslint-disable-next-line react/prop-types
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames("AccordionContent", className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  )
);

const FAQ = () => {
  return (
    <section id="faq" className="i_section section-2-container i_section-2 pr">
      <img
        style={{
          position: "absolute",
          height: "100%",
        }}
        className="i_ellipse"
        alt="decor"
        src="https://blockman.pro/wp-content/themes/romanuke/inc/images/ellipse_teal.png"
        width="2393"
        height="985"
      ></img>
      {/* <img
        className="i_ellipse"
        alt="decor"
        src="https://blockman.pro/wp-content/themes/romanuke/inc/images/ellipse_fiolet.png"
        width={2393}
        height={985}
      /> */}
      <div className=" pr">
        <div className="i_pdd pr">
          <div className="h3s animate start">
            <span className="translate-x-[-50%]">FAQ</span>
          </div>
          <h2 className="h4s animate start">Frequently Asked Questions</h2>
        </div>
        <div className="i_pdd pr faq-container">
          <Accordions />
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default FAQ;
