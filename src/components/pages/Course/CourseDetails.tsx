import React,{useEffect, useState} from "react";
import AddTeacher from "../../popups/AddTeacher";
import { teacher } from "../../../utils/api/Dashboard/teacher";
import {userData} from "../../../context/AuthContext";

type TeacherType={
  _id:string;
  email:string;
  phone:string;
}
const CourseDetails: React.FC = ({ course }: any) => {
  const {fetchTeacher}=teacher();
  const [Teacher,setTeacher]=useState<TeacherType>();
 const {user}=userData();

  useEffect(()=>{
      const loadContents=async()=>{
          let courseId;

          if(user?.entity=='teacher'){
            courseId=user?.details?.courseId;
          }
          else{
            const search=window.location.search;
            const params = new URLSearchParams(search);
            courseId=params.get('id');
          }
          
          console.log(courseId);
          try{
          const teachers=await fetchTeacher(courseId!);
          setTeacher(teachers);}
          catch(err){
            console.log(err)
          }
      }
      loadContents();
  },[])
  const [addteacher,setAddTeacher]=useState<boolean>(false);
  return <div>
      {course?.course!}
      {Teacher?.email}
      {user?.entity=='admin' && <button className="other-options w-[200px]" onClick={()=>setAddTeacher(true)}>Add Teacher</button>}
      {addteacher && <AddTeacher setAddTeacher={setAddTeacher} />}
    </div>;
};

export default CourseDetails;
