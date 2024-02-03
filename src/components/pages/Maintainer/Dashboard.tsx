import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CollegeCreation } from '../../../utils/api/Maintainer/college'
import Image from './colleg-logo.jpeg';
import "./styledb.scss";

const Dashboard:React.FC = () => {
  const {collegesData}=CollegeCreation();
 

  return (
    <div className='colleges-container'>
      {collegesData?.GetColleges.map((item:any)=>(
        <div className='college' key={item.id}>
          <div className='logo-email'>
            <img src={Image} alt="College Logo" />
            <p>{item?.email}</p>
          </div>
          <div className='approved'>
            {item?.status=='accepted' &&
              <p>Approved</p>
            }
            <Link to={`college?id=${item._id}`} className='view-btn'>View</Link>
          </div>
        </div>
      ))}
     
    </div>
  )
}

export default Dashboard