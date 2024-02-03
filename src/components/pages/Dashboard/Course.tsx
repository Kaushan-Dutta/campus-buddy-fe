// Course.tsx
import React, { useEffect, useState } from "react";
import { course } from "../../../utils/api/Dashboard/course.ts";
import { userData } from "../../../context/AuthContext.tsx";

import CourseMaterials from "../Course/CourseMaterials.tsx";
import CourseDetails from "../Course/CourseDetails.tsx";
import CourseAssignments from "../Course/CourseAssignments.tsx";
import CourseQuizzes from "../Course/CourseQuizzes.tsx";
import CourseSession from "../Course/CourseSession.tsx";
import "./style.scss";

export type Course = {
  collegeId: string;
  course: string;
  year: string;
  _id: string;
  materials: {
    url: string;
    topic: string;
  };
  sessions: {
    _id: string;
    link: string;
    date: string;
    startTime: string;
  };
  tests: {
    _id: string;
    link: string;
  };
  teacher: {
    _id: string;
    email: string;
    phone: string;
    details: {
      courseId: string;
    };
  };
};

type CourseElement = {
  name: string;
  element: JSX.Element;
};

const CourseNav: CourseElement[] = [
  {
    name: "Details",
    element: <CourseDetails />,
  },
  {
    name: "Materials",
    element: <CourseMaterials />,
  },
  {
    name: "Assignments",
    element: <CourseAssignments />,
  },
  {
    name: "Quizzes",
    element: <CourseQuizzes />,
  },
  {
    name: "Session",
    element: <CourseSession />,
  },
];

const Course = () => {
  const { getCourse } = course();
  const [currentCourse, setCurrentCourse] = useState<Course>();
  const { user } = userData();
  const [currentTab, setCurrentTab] = useState<CourseElement>(CourseNav[0]);

  useEffect(() => {
    const loadCourse = async () => {
      let id;
      if (user?.entity === "teacher") {
        id = user?.details.courseId;
      } else {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        id = params.get("id");
      }
      setCurrentCourse(await getCourse(id!));
    };
    loadCourse();
  }, []);

  return (
    <div className="w-full">
      <div className="course-nav">
        {CourseNav.map((item, index) => (
          <div
            key={index}
            onClick={() => setCurrentTab(item)}
            className={`course-nav-item ${
              currentTab.name === item.name ? "active-nav-item" : ""
            } `}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className="course-content">
        {React.cloneElement(currentTab.element, { course: currentCourse })}
      </div>
    </div>
  );
};

export default Course;
