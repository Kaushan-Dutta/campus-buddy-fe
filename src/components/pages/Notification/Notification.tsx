import React,{useEffect,useState} from 'react'
import { userData } from '../../../context/AuthContext.tsx'
import { notification } from '../../../utils/api/Notification/notification.ts'

const Notification = () => {
  const {user}=userData()
  const {getNotification}=notification();
  const [currentNotification,setCurrentNotification]=useState<any>();

  useEffect(() =>{
    const loadNotification=async()=>{
      let id;
      const search = window.location.search;
      const params = new URLSearchParams(search);
      id=params.get('id');
            
      console.log(id)
      console.log(await getNotification(id!))
      setCurrentNotification(await getNotification(id!));
    }
    loadNotification();
   },[])
  return (
    <div>Notification{currentNotification?.event}</div>
  )
}

export default Notification