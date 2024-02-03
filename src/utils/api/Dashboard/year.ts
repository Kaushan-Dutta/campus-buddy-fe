import React,{useState} from 'react'
import {gql,useQuery,useMutation} from '@apollo/client'
import {userData} from '../../../context/AuthContext'

const _years=gql`
 query GetYears($collegeId:String!){
        GetYears(collegeId:$collegeId){
                _id
        }
}
`
const _addYear=gql`
  mutation AddYear($_id:String!,$collegeId:String!){
      AddYear(_id:$_id,collegeId:$collegeId){
          _id,collegeId
      }
  }
`

export const year = () => {
  
  const {refetch:Years}=useQuery(_years);
  const [addYear]=useMutation(_addYear);
  const [loading,setLoading] = useState(false);
  const [year,setYear]=useState<string>('');

  const {user}=userData();

  const yearForm=[
    {
       type:'text',
       name:'Year Id',
       placeholder:'Enter YearId',
       onChange:(e:any)=>setYear(e.target.value),
       value:year
    },
  ]
    const getYears=async(id:string)=>{
    console.log("Enter",id)

    try{
        const courses=await Years({
            
                collegeId:id
            
        });
        console.log(courses.data.GetYears);
        return courses.data.GetYears;      
    }
    catch(err){
        console.log(err);
    }
  }
  const yearCreation=async(e:any)=>{
    e.preventDefault();
    try{
        setLoading(true);
        console.log(year,user?.collegeId);

        const createYear=await addYear({
            variables:{
                _id:year,
                collegeId:user?.collegeId
            }
        })
        console.log(createYear);
        setLoading(false);
    }
    catch(err){
        console.log(err);
    }
  }
  return (
    {getYears,yearCreation,yearForm,loading}
  )
}

