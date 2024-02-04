import React, { useState,useCallback } from 'react'
import {  gql,useQuery,useMutation } from '@apollo/client';
import { userData } from '../../../context/AuthContext';
import toast from 'react-hot-toast';

const _addTeacher=gql`
  mutation RegisterMutaion($email:String!,$phone:String!,$entity:String!,$collegeId:String,$details:MemberInputType){
      RegisterMutaion(email:$email,collegeId:$collegeId,phone:$phone,entity:$entity,details:$details){
              _id,password,entity,phone,collegeId
      }
  }
`
const _getTeacher=gql`
    query GetTeacher($courseId:String!){
        GetTeacher(courseId:$courseId){
            _id,entity,email,phone
        }
    }
`
const _uploadMaterial=gql`
  mutation UploadCourse($_id:String!,$url:String!,$topic:String!){
    UploadCourse(_id:$_id,url:$url,topic:$topic){
        _id,course,materials{
            url,topic
        }
    }
}
`  
export const teacher = () => {

  const [TeacherName,setTeacherName]=useState<string>('');
  const [TeacherEmail,setTeacherEmail]=useState<string>('');
  const [TeacherPhone,setTeacherPhone]=useState<string>('');

  const [loading,setLoading]=useState<boolean>(false);
  
  const [addTeacher]=useMutation(_addTeacher);
  const [uploadMaterial]=useMutation(_uploadMaterial);

  const {refetch:getTeacher}=useQuery(_getTeacher);

  const {user}=userData();

  const [url,setUrl]=useState<string>('');
  const [topic,setTopic]=useState<string>('');

  const teacherForm=[
    {
       type:'text',
       name:'Name',
       placeholder:'Enter Teacher Name',
       onChange:(e:any)=>setTeacherName(e.target.value),
       value:TeacherName
    },
    {
        type:'email',
        name:'Email',
        placeholder:'Enter Email Address',
        onChange:(e:any)=>setTeacherEmail(e.target.value),
        value:TeacherEmail
    },
    {
        type:'string',
        name:'Phone Number',
        placeholder:'Enter phone number',
        onChange:(e:any)=>setTeacherPhone(e.target.value),
        value:TeacherPhone
    }
  ]
  const materialForm=[
    {
       type:'text',
       name:'URL',
       placeholder:'Enter the url',
       onChange:(e:any)=>setUrl(e.target.value),
       value:url
    },
    {
        type:'topic',
        name:'Topic',
        placeholder:'Enter the topic',
        onChange:(e:any)=>setTopic(e.target.value),
        value:topic
    }
  ]
  const teacherCreation=async(e:any)=>{
    e.preventDefault();
    try{
        setLoading(true);

        const search=window.location.search;
        const params = new URLSearchParams(search);
        const courseId=params.get('id');
        console.log(TeacherEmail,user?.collegeId,TeacherPhone,TeacherName,courseId);

        const createTeacher=await addTeacher({
            variables:{
                email:TeacherEmail,
                phone:TeacherPhone,
                entity:'teacher',
                collegeId:user?.collegeId,
                details:{
                  courseId:courseId
                }
            }
        })
        console.log(createTeacher);
        toast.success("Teacher Created");
        setLoading(false);
        
    }
    catch(err){
        console.log(err);
        toast.error(" Error Creating");
    }
    finally{
        window.location.reload();
    }
  }
  const fetchTeacher=async(courseId:string)=>{
    try{
        setLoading(true);
        
        const getTeacherData=await getTeacher({
            
                courseId:courseId
            
        })
        return getTeacherData.data.GetTeacher;
        setLoading(false);
    }
    catch(err){
        console.log(err)
    }
  }
 const materialCreation=useCallback(async()=>{
    try{
        setLoading(true);
        
        const courseId=user?.details.courseId;
        console.log(courseId);
        const uploadMaterialData=await uploadMaterial({
            variables:{
                _id:courseId,
                url,
                topic
            }
        })
        console.log(uploadMaterialData);
        toast.success("Material Uploaded");
        setLoading(false);
    }
    catch(err){
        console.log(err);
        toast.error("Error Uploading");
    }
    finally{
        window.location.reload();
    }
 },[url,topic])
  return (
    {teacherCreation,teacherForm,loading,fetchTeacher,materialCreation,materialForm}
  )
}

