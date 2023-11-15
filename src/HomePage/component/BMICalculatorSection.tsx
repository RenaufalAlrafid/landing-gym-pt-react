import React from "react";
import BMICalculator from "./BMICalculator";

export default function BMICalculatorSection() {
  return (
    <div className="flex flex-col justify-center items-center pb-36">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-3xl pb-5">
        BMI Calculator
        </h1>
        <p>
          Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women. Use the tool below to compute yours!
        </p>
      </div>
      <BMICalculator></BMICalculator>
    </div>
  );
}
