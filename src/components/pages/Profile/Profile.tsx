import React, { useState,useEffect } from 'react'
import { userData } from '../../../context/AuthContext';
import "./style.scss";

const Profile = () => {
  const {user}=userData();

  return (
    <div className='w-full'>
      <div className="profile bg-white">
        <div className="img-name">
          <div className="profile-img">
            <img
              src="src\assets\avatar-img.jpeg"
              alt=""
            />
          </div>
          <div className="name">
            <h2>{user?.email}</h2>
            <p>Enrollment No.: {user?._id}</p>
          </div>
        </div>
        <div className="vertical-line"></div>
        <div className="other-details">
          <p>Phone: {user?.phone}</p>
          <p>Email: {user?.email}</p>
        </div>
      </div>
      
    </div>
  )
}

export default Profile