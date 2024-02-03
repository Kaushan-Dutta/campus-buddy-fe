import React from 'react';
import { year } from '../../utils/api/Dashboard/year';
import { IoClose } from "react-icons/io5";
import "./style.scss"

interface YearType {
  setAddYear: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddYear: React.FC<YearType> = ({ setAddYear }) => {
  const { getYears,yearCreation,yearForm,loading} = year();

  return (
    <div className='popup-window'>
      <div className='modal'>
        
        <div className="modal-header">
            <h2 className='modal-subheader'>Add Year</h2>
            <button onClick={() => setAddYear(false)} className='close-button'><IoClose/></button>
        </div>
        <hr />
        <form className="modal-forms" onSubmit={yearCreation} >
          {yearForm.map((item, id) => (
            <div className='' key={id}>
                <label htmlFor="cname" className='label'>{item.name}</label><br/>
                <input {...item} className='input-space'/>
            </div>
          ))}
          <div className="modal-footer">
            <button  className='modal-buttons'>Cancel</button>
            <button type='submit' className='modal-buttons'>Add Year</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddYear;
