import React, { useState } from "react";
import { MdAdd } from "react-icons/md";

const FrequentlyAskedQuestion = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="FrequentlyAskedQuestion w-4/5 text-lg lg:text-2xl font-normal bg-black">
      <div
        className="question flex items-center justify-between p-6 bg-customBackground cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <h3>{question}</h3>
        <MdAdd className={`w-9 h-9 ${show && "rotate-45"}`} />
      </div>
      {show && (
        <div className="answer p-7 bg-customBackground mt-[1px]">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FrequentlyAskedQuestion;
