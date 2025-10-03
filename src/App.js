import "./index.css";

const messages = [
  "Learn React ⚛️",
  "Apply for Job 🧑‍💼",
  "Invest your new Income 💰",
];

export default function App() {
  const step = 1;
  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1} ? "active" : "" `}>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <div className="message">
        Step {step} : {messages[step - 1]}
      </div>
      <div className="buttons">
        <button style={{ backgroundColor: "#7950f2" }}>Previous</button>
        <button style={{ backgroundColor: "#7950f2" }}>Next</button>
      </div>
    </div>
  );
}
