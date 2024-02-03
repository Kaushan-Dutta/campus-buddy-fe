import React from 'react';
import { course } from '../../utils/api/Dashboard/course';
import { IoClose } from "react-icons/io5";
import "./style.scss"

interface CourseType {
  setAddCourse: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddCourse: React.FC<CourseType> = ({ setAddCourse }) => {
  const { courseForm , courseCreation} = course();

  return (
    <div className='popup-window'>
      <div className='modal'>
        
        <div className="modal-header">
            <h2 className='modal-subheader'>Add Course</h2>
            <button onClick={() => setAddCourse(false)} className='close-button'><IoClose/></button>
        </div>
        <hr />
        <form className="modal-forms" onSubmit={courseCreation} >
          {courseForm.map((item, id) => (
            <div className='' key={id}>
                <label htmlFor="cname" className='label'>{item.name}</label><br/>
                <input {...item} className='input-space'/>
            </div>
          ))}
          <div className="modal-footer">
            <button  className='modal-buttons'>Cancel</button>
            <button type='submit' className='modal-buttons'>Add Course</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
