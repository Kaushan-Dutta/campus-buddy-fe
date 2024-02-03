import React from "react";
import { teacher } from "../../utils/api/Dashboard/teacher";
import { IoClose } from "react-icons/io5";
import "./style.scss";

interface MaterialType {
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddMaterial: React.FC<MaterialType> = ({ setPopup }) => {
  //const { courseForm , courseCreation} = studentCourse();
  const { materialForm, materialCreation } = teacher();

  return (
    <div className="popup-window">
      <div className="modal">
        
        <div className="modal-header">
          <h2 className="modal-subheader">Add Material</h2>
          <button onClick={() => setPopup(false)} className="close-button">
            <IoClose />
          </button>
        </div>
        <hr />
        <form className="modal-forms" onSubmit={materialCreation}>
          {materialForm.map((item, id) => (
            <div className="" key={id}>
              <label className='label'>{item.name}</label><br/>
              <input {...item}  className='input-space'/>
            </div>
          ))}
          <div className="modal-footer">
            <button className="modal-buttons">Cancel</button>
            <button type="submit" className="modal-buttons">
              Add
            </button>
          </div>{" "}
        </form>
      </div>
    </div>
  );
};

export default AddMaterial;
