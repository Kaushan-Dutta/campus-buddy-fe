import {useState} from 'react'
import {  gql,useQuery,useMutation } from '@apollo/client';

const _getColleges=gql`
    query GetColleges{
        GetColleges{
                email,_id,status
        }
    }
`
const _getCollege=gql`
    query GetCollege($_id:String!){
        GetCollege(_id:$_id){
                email,phone,website,address,documentProof,_id,status
        }
    }
`
const _approveCollege=gql`
    mutation ApproveCollege($collegeId:String!,$status:String!){
        ApproveCollege(collegeId:$collegeId,status:$status){
            message,_id,email,phone
        }
    }
`

const _createUser=gql`
    mutation RegisterMutaion($email:String!,$phone:String!,$entity:String!,$collegeId:String){
    RegisterMutaion(email:$email,collegeId:$collegeId,phone:$phone,entity:$entity){
            _id,password,entity,phone,collegeId
    }
}
`


export const CollegeCreation = () => {

  const [loading,setLoading]=useState<boolean>(false);

  const {data:collegesData}=useQuery(_getColleges);
  const {refetch:collegeData}=useQuery(_getCollege);

  const [college]=useMutation(_approveCollege);
  const [user]=useMutation(_createUser);

  const fetchCollegeData=async(collegeId:string | null)=>{
    try{
      setLoading(true);
      const res=await collegeData({
        _id:collegeId
      })
      setLoading(false);
      return res.data.GetCollege;
    }
    catch(err){
      console.log(err);
    }
  }
  const approveCollege=async(collegeId:string,status:string)=>{
    try{
      setLoading(true);
      const approve=await college({
        variables:{
            collegeId:collegeId,
            status:status
       }
    })
    const data=approve.data.ApproveCollege;
    console.log("////////////////////",data);
    const createUser=await user({
        variables:{
            email:data.email,
            collegeId:data._id,
            phone:data.phone,
            entity:'admin',

    }})
    console.log(createUser);
    setLoading(false);
    }
    catch(err){
      console.log(err);
    }
  }
  
  
  return (
    {collegesData,fetchCollegeData,loading,approveCollege}
  )
}

