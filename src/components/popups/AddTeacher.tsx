import React from "react";
import { teacher } from "../../utils/api/Dashboard/teacher";
import { IoClose } from "react-icons/io5";
import "./style.scss";

interface TeacherType {
  setAddTeacher: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddTeacher: React.FC<TeacherType> = ({ setAddTeacher }) => {
  //const { courseForm , courseCreation} = studentCourse();
  const { teacherCreation,teacherForm } = teacher();

  return (
    <div className="popup-window">
      <div className="modal">
        
        <div className="modal-header">
          <h2 className="modal-subheader">Add Teacher</h2>
          <button onClick={() => setAddTeacher(false)} className="close-button">
            <IoClose />
          </button>
        </div>
        <hr />
        <form className="modal-forms" onSubmit={teacherCreation}>
          {teacherForm.map((item, id) => (
            <div className="" key={id}>
              <label className='label'>{item.name}</label><br/>
              <input {...item}  className='input-space'/>
            </div>
          ))}
          <div className="modal-footer">
            <button className="modal-buttons">Cancel</button>
            <button type="submit" className="modal-buttons">
              Add Teacher
            </button>
          </div>{" "}
        </form>
      </div>
    </div>
  );
};

export default AddTeacher;
