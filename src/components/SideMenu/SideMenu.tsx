import React from 'react'
import "./style.scss";
import { Navroutes } from '../../../routes.config';
import { userData } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const SideMenu:React.FC = () => {
  const {user}=userData();

  return (
    <div className='side-menu w-60 bg-white'>
      {Navroutes.filter(item=>item.onSideBar && item.entity.includes(user?.entity!)).map((ele,_id)=>(
        <Link className='other-options w-[200px]' to={user?.entity+"/"+user?._id+"/"+ele.path} key={_id}>{ele.name}</Link>
      ))}
    </div>
  )
}

export default SideMenu
