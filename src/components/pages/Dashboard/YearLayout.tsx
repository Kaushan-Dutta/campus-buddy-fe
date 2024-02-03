import React,{useEffect,useState} from 'react'
import { userData } from '../../../context/AuthContext'
import ClassElement from '../../ClassElement/ClassElement';
import { year } from '../../../utils/api/Dashboard/year';
import Loader from '../../Loader';
import './style.scss'
import AddYear from '../../popups/AddYear';

type Year={
  course:String,
  courseId:String,
  _id:String,
  collegeId:String,
  event:string,
  description:string,
  date:string
}
const YearLayout = () => {
  const {user}=userData();
  const {getYears}=year();
  const [addYear,setAddYear]=useState<boolean>(false);
  const [years,setYears] = useState<[Year]>();

  useEffect(()=>{
    const loadYears=async()=>{
        console.log(user?.collegeId!,await getYears(user?.collegeId!))

        setYears(await getYears(user?.collegeId!))
    }
    loadYears();
  },[])
  if(!years){
    return <Loader/>
  }
  return (
    <div className="courses bg-white w-full text-center">
        <div className="course-subjects w-full">
          <ClassElement data={years} component='year'/>
        </div>
        <button className='other-options  w-[200px]' onClick={()=>setAddYear(true)}>Add  Year</button>
        {addYear && <AddYear setAddYear={setAddYear}/>}

     </div>
  )
}

export default YearLayout