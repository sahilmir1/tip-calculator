import React from "react";

interface ResultProps {
  amountPerPerson?: number;
  total?: number;
  handleReset: () => void;
  activateResetBtn: boolean;
}

const Result: React.FC<ResultProps> = ({
  amountPerPerson = 0,
  total = 0,
  handleReset,
  activateResetBtn,
}) => {
  console.log(activateResetBtn);
  return (
    <div className="bg-very-dark-cyan rounded-xl px-6 pt-10 pb-6 flex flex-col gap-10">
      <div className="flex justify-between items-end">
        <div className="flex flex-col">
          <span className="text-white text-sm">Tip Amount</span>
          <span className="text-xs text-dark-grayish-cyan">/ person</span>
        </div>
        <span className="text-3xl text-strong-cyan">
          ${amountPerPerson ? amountPerPerson.toFixed(2) : "0.00"}
        </span>
      </div>
      <div className="flex justify-between items-end">
        <div className="flex flex-col">
          <span className="text-white text-sm">Total</span>
          <span className="text-xs text-dark-grayish-cyan">/ person</span>
        </div>
        <span className="text-3xl text-strong-cyan">
          ${total ? total.toFixed(2) : "0.00"}
        </span>
      </div>
      <button
        onClick={handleReset}
        className={`w-ful rounded py-2 text-very-dark-cyan mt-auto ${
          activateResetBtn ? "bg-strong-cyan" : "bg-dark-grayish-cyan"
        }`}
      >
        RESET
      </button>
    </div>
  );
};

export default Result;
