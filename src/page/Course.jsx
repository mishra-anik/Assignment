import React from "react";
import Module from "../component/Module";

const Course = ({ course }) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{course.courseTitle}</h1>
      <p className="mb-6 text-gray-600">{course.description}</p>
      {course.modules.map((mod, idx) => (
        <Module key={idx} module={mod} />
      ))}
    </div>
  );
};

export default Course;



