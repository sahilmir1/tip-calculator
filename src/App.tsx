import { useEffect, useState } from "react";
import "./App.css";
import Result from "./components/Result";

function App() {
  const defaultTipValues: string[] = ["5", "10", "15", "25", "50"];

  const [bill, setBill] = useState<string>("");
  const [tip, setTip] = useState<string>("");
  const [people, setPeople] = useState<string>("");
  const [totalPerPerson, setTotalPerPerson] = useState<string>("");
  const [tipPerPerson, setTipPerPerson] = useState<string>("");
  const [selectedTipBtn, setSelectedTipBtn] = useState<string | null>(null);
  const [resetBtn, setResetBtn] = useState<boolean>(false);

  const handleTipBtn = (value: string) => {
    setTip(value);
    setSelectedTipBtn(value);
  };

  useEffect(() => {
    if (bill || tip || people) {
      setResetBtn(true);
    }

    if (people && people !== "0") {
      const billNumber = parseFloat(bill);
      const peopleNumber = parseInt(people, 10);
      const tipNumber = parseFloat(tip) / 100;

      const tipAmount = billNumber * tipNumber;
      const tipPerPerson = tipAmount / peopleNumber;
      const totalAmount = billNumber + tipAmount;
      const amountPerPerson = totalAmount / peopleNumber;

      setTotalPerPerson(amountPerPerson.toString());
      setTipPerPerson(tipPerPerson.toString());
    }
  }, [bill, people, tip]);

  const reset = () => {
    setBill("");
    setTip("");
    setPeople("");
    setTotalPerPerson("");
    setTipPerPerson("");
    setResetBtn(false);
    setSelectedTipBtn(null);
  };

  return (
    <div className="space-mono-bold min-h-screen flex flex-col justify-center items-center bg-light-grayish-cyan ">
      <div className="lg:-mt-20 lg:mb-20 mb-10">
        <h1 className="font-bold tracking-widest text-dark-grayish-cyan">
          SPLI
        </h1>
        <h1 className="font-bold tracking-widest text-dark-grayish-cyan">
          TTER
        </h1>
      </div>

      <div className="bg-white p-6 rounded-xl grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col gap-10">
          {/* BILL Input */}
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
                placeholder="0"
                value={bill !== null ? bill : ""}
                className="bg-very-light-grayish-cyan rounded w-full h-10  focus:outline-strong-cyan text-right px-3"
                onChange={(e) => setBill(e.target.value)}
              />
            </div>
          </div>

          {/* TIP Input */}
          <div className="flex flex-col">
            <label htmlFor="">Select Tip %</label>
            <div className="grid grid-cols-3 gap-2 text-[24px]">
              {defaultTipValues.map((value, index) => (
                <button
                  key={index}
                  className={`text-white w-[100px] py-1 rounded ${
                    selectedTipBtn === value
                      ? "bg-strong-cyan"
                      : "bg-very-dark-cyan"
                  }`}
                  onClick={() => handleTipBtn(value)}
                >
                  {value}%
                </button>
              ))}
              <input
                type="text"
                placeholder="Custom"
                value={tip ?? ""}
                onChange={(e) => setTip(e.target.value)}
                className="bg-very-light-grayish-cyan w-[100px] focus:outline-strong-cyan rounded text-center focus:text-right focus:placeholder-transparent"
              />
            </div>
          </div>

          {/* # of People Input */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <label htmlFor="">Number of People</label>
              {people === "0" && (
                <span className="text-xs text-red-500">Can't be zero</span>
              )}
            </div>
            <div className="flex relative items-center">
              <img
                src="/src/assets/icon-person.svg"
                className="h-[16px] w-[12px] absolute left-3"
                alt=""
              />
              <input
                type="text"
                placeholder="0"
                value={people ?? ""}
                className={`bg-very-light-grayish-cyan rounded w-full h-10  text-right px-3 ${
                  people === "0"
                    ? "focus:outline-red-500"
                    : "focus:outline-strong-cyan"
                }`}
                onChange={(e) => setPeople(e.target.value)}
              />
            </div>
          </div>
        </div>

        <Result
          total={parseFloat(totalPerPerson)}
          amountPerPerson={parseFloat(tipPerPerson)}
          handleReset={reset}
          activateResetBtn={resetBtn}
        />
      </div>
    </div>
  );
}

export default App;
