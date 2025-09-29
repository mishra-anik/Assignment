import React from "react";
import Quiz from "./Quiz";

const Lesson = ({ lesson }) => {
  return (
    <div className="mb-4 p-3 border-b">
      <h3 className="font-semibold">{lesson.title}</h3>
      {lesson.type === "video" && (
        <video className="mt-2 rounded" src={lesson.url} controls width="100%" />
      )}
      {lesson.type === "text" && (
        <p className="mt-2 text-gray-700">{lesson.content}</p>
      )}
      {lesson.type === "quiz" && <Quiz questions={lesson.questions} />}
    </div>
  );
};

export default Lesson;
