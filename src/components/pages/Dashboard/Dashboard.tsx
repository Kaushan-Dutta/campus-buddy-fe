import React, { useState,useEffect } from 'react'
import { userData } from '../../../context/AuthContext';
import "./style.scss";
/* import AddCourse from '../../popups/AddCourse';
import {course as useCourse} from '../../../utils/api/User/course';

import ClassElement from '../../ClassElement/ClassElement';
 */
const Dashboard = () => {
  //const {user}=userData();
  //const [course,setCourse]=useState(true);
  //const {Courses}=useCourse();

  
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
            <h2>Sayandip Kar</h2>
            <p>Enrollment No.: 154654548548</p>
          </div>
        </div>
        <div className="vertical-line"></div>
        <div className="other-details">
          <p>Phone: 879515XXXX</p>
          <p>Email: abc@gmail.com</p>
        </div>
      </div>
      
    </div>
  )
}

export default Dashboard