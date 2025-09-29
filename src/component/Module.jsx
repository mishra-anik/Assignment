import React from "react";
import Lesson from "./Lesson";

const Module = ({ module }) => {
  return (
    <div className="mb-8 border rounded-lg p-4 shadow">
      <h2 className="text-2xl font-semibold mb-3">{module.title}</h2>
      {module.lessons.map((lesson, idx) => (
        <Lesson key={idx} lesson={lesson} />
      ))}
    </div>
  );
};

export default Module;
