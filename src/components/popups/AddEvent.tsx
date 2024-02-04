import React from 'react';
import { notification } from '../../utils/api/Notification/notification';
import { IoClose } from "react-icons/io5";
import "./style.scss"

interface NotificationType {
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddNotification: React.FC<NotificationType> = ({ setPopup }) => {
  const { eventForm , createNotification} = notification();

  return (
    <div className='popup-window'>
      <div className='modal'>
        
        <div className="modal-header">
            <h2 className='modal-subheader'>Create Notification</h2>
            <button onClick={() => setPopup(false)} className='close-button'><IoClose/></button>
        </div>
        <hr />
        <form className="modal-forms" onSubmit={ createNotification} >
          {eventForm.map((item, id) => (
            <div className='' key={id}>
                <label  className='label'>{item.name}</label><br/>
                <input {...item} className='input-space'/>
            </div>
          ))}
          <div className="modal-footer">
            <button  className='modal-buttons'>Cancel</button>
            <button type='submit' className='modal-buttons'>Create </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNotification;
