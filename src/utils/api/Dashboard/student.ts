import React, { useState } from 'react'
import {  gql,useQuery,useMutation } from '@apollo/client';
import { userData } from '../../../context/AuthContext';
import toast from 'react-hot-toast';

const _addStudent=gql`
  mutation RegisterMutaion($email:String!,$phone:String!,$entity:String!,$collegeId:String,$details:MemberInputType){
      RegisterMutaion(email:$email,collegeId:$collegeId,phone:$phone,entity:$entity,details:$details){
              _id,password,entity,phone,collegeId
      }
  }
`

export const student = () => {

  const [studentName,setStudentName]=useState<string>('');
  const [studentEmail,setStudentEmail]=useState<string>('');
  const [studentPhone,setStudentPhone]=useState<string>('');

  const [loading,setLoading]=useState<boolean>(false);

  const [addStudent]=useMutation(_addStudent);
  

  const {user}=userData();

  const studentForm=[
    {
       type:'text',
       name:'Name',
       placeholder:'Enter Student Name',
       onChange:(e:any)=>setStudentName(e.target.value),
       value:studentName
    },
    {
        type:'email',
        name:'Email',
        placeholder:'Enter Email Address',
        onChange:(e:any)=>setStudentEmail(e.target.value),
        value:studentEmail
    },
    {
        type:'string',
        name:'Phone Number',
        placeholder:'Enter phone number',
        onChange:(e:any)=>setStudentPhone(e.target.value),
        value:studentPhone
    }
  ]
  const studentCreation=async(e:any)=>{
    e.preventDefault();
    try{
        setLoading(true);

        const search=window.location.search;
        const params = new URLSearchParams(search);
        const yearId=params.get('id');
        console.log(studentEmail,user?.collegeId,studentPhone,studentName,yearId);

        const createStudent=await addStudent({
            variables:{
                email:studentEmail,
                phone:studentPhone,
                entity:'student',
                collegeId:user?.collegeId,
                details:{
                  yearId:yearId
                }
            }
        })
        console.log(createStudent);
        toast.success('Student Created');
        setLoading(false);
        
    }
    catch(err){
        console.log(err);
        toast.error(' Error Creating');
    }
    finally{
      window.location.reload();
    }
  }

 
  return (
    {studentCreation,studentForm,loading}
  )
}

