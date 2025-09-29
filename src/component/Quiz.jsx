import React, { useState } from "react";

const Quiz = ({ questions }) => {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const currentQuestion = questions[0]; // keeping 1 question for now

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="mt-3 p-3 border rounded bg-gray-50">
      <p className="font-medium">{currentQuestion.question}</p>
      <ul className="mt-2">
        {currentQuestion.options.map((opt, idx) => (
          <li key={idx}>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="quiz"
                value={opt}
                onChange={() => setSelected(opt)}
                disabled={submitted}
              />
              {opt}
            </label>
          </li>
        ))}
      </ul>
      {!submitted ? (
        <button
          onClick={handleSubmit}
          className="mt-3 px-4 py-1 bg-blue-600 text-white rounded"
        >
          Submit
        </button>
      ) : (
        <p className="mt-2">
          {selected === currentQuestion.answer
            ? "✅ Correct!"
            : `❌ Wrong! Correct Answer: ${currentQuestion.answer}`}
        </p>
      )}
    </div>
  );
};

export default Quiz;
