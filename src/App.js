import { useState } from "react";
import "./index.css";

const messages = [
  "Learn React ⚛️",
  "Apply for Job 🧑‍💼",
  "Invest your new Income 💰",
];

export default function App() {
  // const step = 1;
  // Managing States => Create -> Use -> Update
  // useState() should NOT use ->
  // inside of any if statement
  // inside of any other function
  // inside of any LOOP
  const [step, setStep] = useState(1);
  function handlePrevious() {
    console.log("Step Value : ", step);
    if (step > 1) setStep(step - 1);
    // step = step - 1;
  }

  function handleNext() {
    console.log("Step Value : ", step);
    if (step < 3) setStep(step + 1);
    // step = step + 1;
  }
  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <div className="message">
        Step {step} : {messages[step - 1]}
      </div>
      <div className="buttons">
        <button style={{ backgroundColor: "#7950f2" }} onClick={handlePrevious}>
          Previous
        </button>
        <button style={{ backgroundColor: "#7950f2" }} onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}
