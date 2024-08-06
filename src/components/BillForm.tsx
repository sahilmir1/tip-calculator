import React, { useState } from "react";

const BillForm = () => {
  const [bill, setBill] = useState<number>(0);
  const [tip, setTip] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);

  //Calculations
  const calculateBill = () => {
    const tipAmount = bill * tip;
    const totalAmount = bill + tipAmount;
    const amountPerPerson = totalAmount / people;
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col">
        <label htmlFor="">Bill</label>
        <div className="flex relative items-center">
          <img
            src="/src/assets/icon-dollar.svg"
            className="h-[16px] w-[12px] absolute left-3"
            alt=""
          />
          <input
            type="text"
            className="bg-very-light-grayish-cyan rounded w-full h-10  focus:outline-strong-cyan text-right px-3"
            onChange={(e) => setBill(parseFloat(e.target.value))}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Select Tip %</label>
        <div className="grid grid-cols-3 gap-2 text-[24px]">
          <button
            className="bg-very-dark-cyan text-white w-[100px] py-1 rounded"
            onClick={() => setTip(0.05)}
          >
            5%
          </button>
          <button
            className="bg-very-dark-cyan text-white w-[100px] py-1 rounded"
            onClick={() => setTip(0.1)}
          >
            10%
          </button>
          <button
            className="bg-very-dark-cyan text-white w-[100px] py-1 rounded"
            onClick={() => setTip(0.15)}
          >
            15%
          </button>
          <button
            className="bg-very-dark-cyan text-white w-[100px] py-1 rounded"
            onClick={() => setTip(0.25)}
          >
            25%
          </button>
          <button
            className="bg-very-dark-cyan text-white w-[100px] py-1 rounded"
            onClick={() => setTip(0.5)}
          >
            50%
          </button>
          <button className="bg-very-light-grayish-cyan text-dark-grayish-cyan w-[100px] py-1 rounded">
            Custom
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="">Number of People</label>
        <input
          type="text"
          className="bg-very-light-grayish-cyan"
          onChange={(e) => setPeople(parseFloat(e.target.value))}
        />
      </div>
    </div>
  );
};

export default BillForm;
