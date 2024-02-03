import React from "react";
import { student } from "../../utils/api/Dashboard/student";
import { IoClose } from "react-icons/io5";
import "./style.scss";

interface StudentType {
  setAddStudent: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddStudent: React.FC<StudentType> = ({ setAddStudent }) => {
  //const { courseForm , courseCreation} = studentCourse();
  const { studentForm, studentCreation } = student();

  return (
    <div className="popup-window">
      <div className="modal">
        
        <div className="modal-header">
          <h2 className="modal-subheader">Add Student</h2>
          <button onClick={() => setAddStudent(false)} className="close-button">
            <IoClose />
          </button>
        </div>
        <hr />
        <form className="modal-forms" onSubmit={studentCreation}>
          {studentForm.map((item, id) => (
            <div className="" key={id}>
              <label className='label'>{item.name}</label><br/>
              <input {...item}  className='input-space'/>
            </div>
          ))}
          <div className="modal-footer">
            <button className="modal-buttons">Cancel</button>
            <button type="submit" className="modal-buttons">
              Add Student
            </button>
          </div>{" "}
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
