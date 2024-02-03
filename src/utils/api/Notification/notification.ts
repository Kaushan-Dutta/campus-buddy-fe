import React,{useCallback, useState} from 'react'
import {gql,useMutation,useQuery} from '@apollo/client'
import { userData } from '../../../context/AuthContext'

const _notifications=gql`
    query GetEvents($collegeId:String!){
        GetEvents(collegeId:$collegeId){
                _id,event,description,image,date
        }
    }

`
const _notification=gql`
  query GetEvent($_id:String!){
    GetEvent(_id:$_id){
            _id,event,description,image,collegeId,date
    }
  }
`
const _createNotification=gql`
    mutation AddEvent($collegeId:String!,$event:String!,$description:String!,
      $image:String!,$date:String!){
      AddEvent(collegeId:$collegeId,event:$event,description:$description,
      image:$image,date:$date){
          event,description,
          comments{
              comment,date
          }
      }
    }
`
export const notification = () => {
  
  const {refetch:Notifications}=useQuery(_notifications);
  const {refetch:Notification}=useQuery(_notification);
  const [notification]=useMutation(_createNotification);

  const [event,setEvent]=useState<string>();
  const [description,setDescription]=useState<string>();
  const [image,setImage]=useState<string>();
  const [date,setDate]=useState<string>();

  const [loading,setLoading] = useState(false);
  const {user}=userData();
  
  const eventForm=[
    {
       type:'text',
       name:'Event Name',
       placeholder:'Enter Event Name',
       onChange:(e:any)=>setEvent(e.target.value),
       value:event
    },
    {
        type:'text',
        name:'Description',
        placeholder:'Give Details',
        onChange:(e:any)=>setDescription(e.target.value),
        value:description
    },
    {
        type:'date',
        name:'Date',
        placeholder:'Enter Date',
        onChange:(e:any)=>setDate(e.target.value),
        value:date
    }
  ]
  const getNotifications=async(id:string)=>{
    console.log("Enter",id)

    try{
        const events=await Notifications({
            
                collegeId:id
            
        });
        console.log(events.data.GetEvents);
        return events.data.GetEvents;      
    }
    catch(err){
        console.log(err);
    }
  }
  const getNotification=async(id:string)=>{
    console.log("Enter",id)

    try{
        const events=await Notification({
            
                _id:id
            
        });
        console.log(events.data.GetEvent);
        return events.data.GetEvent;      
    }
    catch(err){
        console.log(err);
    }
  }
  const createNotification=useCallback(async()=>{
    setLoading(true);
      try{
        console.log(event,description,image,date,user?.collegeId)
        const createEvent=await notification({
          variables:{
            collegeId:user?.collegeId,
            event,
            description,
            image:"",
            date
          }
        })
        console.log(createEvent);
        setLoading(false);
      }
      catch(err){
        console.log(err);
        setLoading(false);
      }
  },[
    event,description,image,date
  ])
  return (
    {getNotifications,getNotification,createNotification,eventForm}
  )
}

