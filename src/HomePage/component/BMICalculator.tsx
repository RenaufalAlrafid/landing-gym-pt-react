import React, { useState } from "react";

export default function BMICalculator() {
  const [unitType, setUnitType] = useState("US");

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [heightInchies, setHeightInchies] = useState(0);
  const [age, setAge] = useState(0);
  const [result, setResult] = useState(0);
  // Calculate the result of BMI using formula: (weight / height^2) * 703
  const calculateBMI = () => {
    let kg = 0;
    let meter = 0;

    if (unitType == "US") {
      meter = height * 0.3048 + heightInchies * 0.0254;
      kg = weight * 0.453592;
    } else {
      meter = height / 100;
      kg = weight;
    }
    let bmi = kg / (meter * meter);
    setResult(bmi);
  };

  const changeToUS = () => {
    setUnitType("US");
  };
  const changeToMatric = () => {
    setUnitType("Metric");
  };
  return (
    <div className="grid grid-cols-2 w-full pl-40 gap-24 pt-24 pr-20">
      <div id="calculator-form">
        <div className="flex">
          <button
            className={`px-6 py-3 rounded-lg ${
              unitType == "US" ? "bg-neutral-0" : "bg-neutral-50"
            }`}
            onClick={changeToUS}
          >
            <span className="font-bold">US Units</span>
          </button>
          <button
            className={`px-6 py-3 rounded-lg ${
              unitType !== "US" ? "bg-neutral-0" : "bg-neutral-50"
            }`}
            onClick={changeToMatric}
          >
            <span className="font-bold">Metric Units</span>
          </button>
        </div>
        <div className="rounded-xl bg-neutral-0 px-7 py-7">
          <div className="flex flex-col">
            <label htmlFor="Age" className="text-neutral-60 mb-1">
              Age
            </label>
            <input
              type="text"
              placeholder="Input your age"
              name="age"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className=" bg-transparent border-neutral-60 border-solid border-2  px-3 py-2 rounded-lg placeholder:text-neutral-60 mb-5"
            />
          </div>
          <div
            className={`gap-3 w-full ${
              unitType == "US" ? "grid grid-cols-2" : ""
            }`}
          >
            <div className="flex flex-col ">
              <label htmlFor="Name" className="text-neutral-60 mb-1">
                Height ( {unitType == "US" ? "Feet" : "Centi Meters"} )
              </label>
              <input
                type="text"
                placeholder={unitType == "US" ? "Feet" : "Centi Meters"}
                className=" bg-transparent border-neutral-60 border-solid border-2  px-3 py-2 rounded-lg placeholder:text-neutral-60 mb-5"
                name="height"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
              />
            </div>
            <div
              className={`flex flex-col ${unitType !== "US" ? "hidden" : ""} `}
            >
              <label htmlFor="heightInchies" className="text-neutral-60 mb-1">
                Height ( Inches )
              </label>
              <input
                type="text"
                placeholder="Inches"
                className=" bg-transparent border-neutral-60 border-solid border-2  px-3 py-2 rounded-lg placeholder:text-neutral-60 mb-5"
                name="heightInchies"
                value={heightInchies}
                onChange={(e) => setHeightInchies(Number(e.target.value))}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="weight" className="text-neutral-60 mb-1">
              Weight ( {unitType == "US" ? "Pounds" : "Kilograms"} )
            </label>
            <input
              type="text"
              placeholder={unitType == "US" ? "Pounds" : "Kilogram"}
              className=" bg-transparent border-neutral-60 border-solid border-2  px-3 py-2 rounded-lg placeholder:text-neutral-60 mb-5"
              name="weight"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
            />
          </div>
          <button
            className="rounded-lg px-4 py-3 bg-secondary-50"
            onClick={calculateBMI}
          >
            <span className="font-bold text-white">Calculate</span>
          </button>
        </div>
      </div>
      <div id="calculator-result" className="w-full pt-6">
        <h1 className="text-center text-2xl font-bold">The Result</h1>
        <h1
          className={`text-center text-4xl font-bold  mt-24  ${
            result == 0 ? "text-neutral-60" : "text-black"
          }`}
        >
          <span>BMI = </span> <span>{result == 0 ? "X" : result}</span>
        </h1>
        <p className="mt-6 text-center flex gap-3">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <g clipPath="url(#clip0_48_445)">
                <path
                  d="M5.895 1.5H12.105L16.5 5.895V12.105L12.105 16.5H5.895L1.5 12.105V5.895L5.895 1.5Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 6V9"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 12H9.0075"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <cclipPath id="clip0_48_445">
                  <rect width="18" height="18" fill="white" />
                </cclipPath>
              </defs>
            </svg>
          </span>
          Please choose your preferable unit type, then input the data and click
          on calculate to see your BMI result here.
        </p>
      </div>
    </div>
  );
}
