import React,{useState} from 'react'
import { userData } from '../../../context/AuthContext';
import AddMaterial from '../../popups/AddMaterial';

const CourseMaterials:React.FC = ({course}:any) => {
  const {user}=userData();
  const [popup,setPopup]=useState<boolean>(false);
  return (
    <div>
        {course?.materials.map((material:any) => (
            <div key={material.id}>
                <h1>{material?.topic}</h1>
                <a href={material?.url} target="_blank" rel="noreferrer">{material.url}</a>
            </div>
        ))}
        {user?.entity=='teacher' && <button className="other-options w-[200px]" onClick={()=>setPopup(true)}>Add Material</button>}
        {popup && <AddMaterial setPopup={setPopup}/> }
    </div>
  )
}

export default CourseMaterials