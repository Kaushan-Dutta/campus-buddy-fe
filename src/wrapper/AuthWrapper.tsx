import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import {  gql,useQuery } from '@apollo/client';
import { userData } from "../context/AuthContext";

const _checkToken=gql`
  query TokenQuery($token: String!) {
    TokenQuery(token:$token) {
      _id
      email
      entity
      phone
      collegeId,
      details{
        yearId,
        courseId
      }
      
    }
  }

`
const AuthWrapper:React.FC = () => {

  const {refetch}=useQuery(_checkToken);
  const {setuser}=userData();

  useEffect(() =>{
    const checkAuth=async()=>{
      const token:string | null=localStorage.getItem('campus');
      console.log(token);
      try{
        const getUser=await refetch({
          token
        })
        setuser!(getUser.data.TokenQuery)
        
    }
    catch(err){
      console.log(err);
    }}
    checkAuth();
  },[])
  return (
    <div className="">
      <Outlet />
    </div>
  );
};

export default AuthWrapper;
