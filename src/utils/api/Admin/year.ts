import React, { useState } from 'react'
import {  gql,useQuery,useMutation } from '@apollo/client';
import { userData } from '../../../context/AuthContext';

const _addCourse=gql`
    mutation AddCourse($course:String!,$collegeId:String!,$year:String!,$courseId:String!){
    AddCourse(course:$course,collegeId:$collegeId,year:$year,courseId:$courseId){
        _id,course,collegeId,year,courseId
    }

}
`

export const studentCourse = () => {

  const [courseId,setCourseId]=useState<string>('');
  const [courseName,setCourseName]=useState<string>('');
  const [year,setYear]=useState<string>('');
  const [loading,setLoading]=useState<boolean>(false);

  const [addCourse]=useMutation(_addCourse);
  const {user}=userData();

  const courseForm=[
    {
       type:'text',
       name:'Course Id',
       placeholder:'Enter CourseId',
       onChange:(e:any)=>setCourseId(e.target.value),
       value:courseId
    },
    {
        type:'text',
        name:'Course Name',
        placeholder:'Enter Course Name',
        onChange:(e:any)=>setCourseName(e.target.value),
        value:courseName
    },
    {
        type:'number',
        name:'Year',
        placeholder:'Enter Year',
        onChange:(e:any)=>setYear(e.target.value),
        value:year
    }
  ]
  const courseCreation=async(e:any)=>{
    e.preventDefault();
    try{
        setLoading(true);
        console.log(courseId,courseName,year,user?.collegeId);

        const createCourse=await addCourse({
            variables:{
                courseId:courseId,
                course:courseName,
                year:year,
                collegeId:user?.collegeId
            }
        })
        console.log(createCourse);
        setLoading(false);
    }
    catch(err){
        console.log(err);
    }
  }
  
  return (
    {courseForm,loading,courseCreation}
  )
}

