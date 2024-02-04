import React, { useEffect, useState } from "react";
import { userData } from "../../../context/AuthContext";
import ClassElement from "../../ClassElement/ClassElement";
import Loader from "../../Loader";
import "./style.scss";
import { course } from "../../../utils/api/Dashboard/course";
import AddCourse from "../../popups/AddCourse";
import AddStudent from "../../popups/AddStudent";

type Course = {
  course:String,
  courseId:String,
  _id:String,
  collegeId:String,
  event:string,
  description:string,
  date:string
};
const CourseLayout = () => {
  const { user } = userData();
  const { getCourses } = course();

  const [courses, setCourses] = useState<[Course]>();
  const [addCourse, setAddCourse] = useState<boolean>(false);
  const [addStudent, setAddStudent] = useState<boolean>(false);

  useEffect(() => {
    const loadCourses = async () => {
      let id;
      if (user?.entity == "admin") {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        id = params.get("id");
      } else if (user?.entity == "student") {
        id = user?.details.yearId;
      }

      console.log(id);
      setCourses(await await getCourses(user?.collegeId!, id!));
    };
    loadCourses();
  }, []);
  if (!courses) {
    return <Loader />;
  }
  return (
    <div className="courses bg-white w-full">
      <div className="course-subjects w-full">
        <ClassElement data={courses} component="course" />
      </div>
      {user?.entity == "admin" && (
        <div className="text-center space-x-5">
          <button className="other-options w-[200px]" onClick={()=>setAddCourse(true)}>Add Course</button>
          <button className="other-options w-[200px]" onClick={()=>setAddStudent(true)}>Add Student</button>
        </div>
      )}

      {addStudent && <AddStudent setAddStudent={setAddStudent} />}
      {addCourse && <AddCourse setAddCourse={setAddCourse} />}
    </div>
  );
};

export default CourseLayout;
