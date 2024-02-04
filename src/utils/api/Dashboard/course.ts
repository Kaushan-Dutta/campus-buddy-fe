import React, { useState } from 'react'
import {  gql,useQuery,useMutation } from '@apollo/client';
import { userData } from '../../../context/AuthContext';
import toast from 'react-hot-toast';

const _addCourse=gql`
    mutation AddCourse($course:String!,$collegeId:String!,$yearId:String!,$_id:String!){
    AddCourse(course:$course,collegeId:$collegeId,yearId:$yearId,_id:$_id){
        _id,course,collegeId,yearId
    }

}
`
const _courses=gql`
  query GetCourses($collegeId:String!,$yearId:String!){
          GetCourses(collegeId:$collegeId,yearId:$yearId){
                  _id,course
          }
  }

`
const _course=gql`
    query GetCourse($_id:String!){
        GetCourse(_id:$_id){
            course,
            _id,
            collegeId,
            yearId,
            materials{
                url,topic
            },
            sessions{
                _id,
                link,
                date,
                startTime
            },
            tests{
                _id,
                link
            },
            teacher{
                _id,
                email,
                phone,
                details{
                    courseId
                }
            }

        }

}

`
export const course = () => {

  const [courseId,setCourseId]=useState<string>('');
  const [courseName,setCourseName]=useState<string>('');
  //const [year,setYear]=useState<string>('');
  const [loading,setLoading]=useState<boolean>(false);

  const [addCourse]=useMutation(_addCourse);
  const {refetch:Courses}=useQuery(_courses);
  const {refetch:Course}=useQuery(_course);

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
    
  ]
  const courseCreation=async(e:any)=>{
    e.preventDefault();

    const search=window.location.search;
    const params = new URLSearchParams(search);
    const year=params.get('id');

    try{
        setLoading(true);
        console.log(courseId,courseName,year,user?.collegeId);

        const createCourse=await addCourse({
            variables:{
                _id:courseId,
                course:courseName,
                yearId:year,
                collegeId:user?.collegeId
            }
        })
        console.log(createCourse);
        toast.success("Course Created")
        setLoading(false);
    }
    catch(err){
        console.log(err);
        toast.error("Error creating");
    }
    finally{
        window.location.reload();
    }
  }

  const getCourses=async(collegeId:string,yearId:string)=>{
    console.log("Enter",collegeId,yearId)

    try{
        const courses=await Courses({
            
                collegeId:collegeId,
                yearId:yearId
                
            
        });
        console.log(courses.data.GetCourses);
        return courses.data.GetCourses;      
    }
    catch(err){
        console.log(err);
    }
  }
  const getCourse=async(id:string)=>{
    
    try{
        const courses=await Course({
            
                _id:id
            
        });
        console.log("///////////////",courses.data.GetCourse);
        return courses.data.GetCourse;      
    }
    catch(err){
        console.log(err);
    }
  }
  return (
    {courseForm,loading,courseCreation,getCourses,getCourse}
  )
}

