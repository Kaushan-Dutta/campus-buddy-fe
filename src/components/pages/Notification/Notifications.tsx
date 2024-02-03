import React,{useEffect,useState} from 'react'
import ClassElement from '../../ClassElement/ClassElement'
import { notification } from '../../../utils/api/Notification/notification';
import { userData } from '../../../context/AuthContext';
import AddNotification from '../../popups/AddEvent';

type Notification={
  _id:string,
  event:string,
  description:string,
  date:string
}
const Notifications = () => {
  const {getNotifications}=notification();
  const [notifications,setNotifications]=useState<Notification>();
  const {user}=userData();
  const [popup,setPopup]=useState<boolean>(false);

  useEffect(() => {
    const loadNotifications=async()=>{
      setNotifications(await getNotifications(user?.collegeId!));
    }
    loadNotifications();
  },[])
  return (
    <div className="courses bg-white w-full text-center">
        
        <div className="course-subjects">
          <ClassElement data={notifications} component='notification'/>
        </div>
        {user?.entity=='admin' && <button className="other-options w-[200px]" onClick={()=>setPopup(true)}>Add Event</button>}
        {popup && <AddNotification setPopup={setPopup}/> }
      </div>
  )
}

export default Notifications