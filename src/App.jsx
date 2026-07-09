import { useState } from "react";
import "./App.css";
import questions from "./questions";

function App() {
  const [topic, setTopic] = useState("Java");
  const [difficulty, setDifficulty] = useState("Easy");
  const [generatedQuestions, setGeneratedQuestions] = useState([]);

  const handleGenerate = () => {
    const data = questions[topic]?.[difficulty] || [];
    setGeneratedQuestions(data);
  };

  return (
    <div className="container">
      <h1>🤖 AI Interview Question Generator</h1>

      <label>Choose Topic</label>
      <select value={topic} onChange={(e) => setTopic(e.target.value)}>
        <option>Java</option>
        <option>Python</option>
        <option>DSA</option>
        <option>DBMS</option>
        <option>HR Interview</option>
      </select>

      <label>Difficulty</label>
      <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>
     <button onClick={handleGenerate}>
  Generate Questions
</button>

<button
  onClick={() => setGeneratedQuestions([])}
  style={{
    marginTop: "10px",
    background: "#dc3545"
  }}
>
  Clear
</button>
      

      <div className="result">
        {generatedQuestions.map((item, index) => (
    <div className="card" key={index}>
      <h3>Question {index + 1}</h3>
      <p><strong>Question:</strong> {item.question}</p>
      <p><strong>Answer:</strong> {item.answer}</p>
      </div>
      ))}
      </div>
    </div>
  );
}

export default App;