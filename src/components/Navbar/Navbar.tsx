import React from 'react'
import { userData } from '../../context/AuthContext'
import "./style.scss";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo-no-background.png';
import { PiStudentBold } from "react-icons/pi";

const Navbar:React.FC = () => {
  const {user}=userData();
  const navigate = useNavigate();

  const handleLogout = (e:any) => {
    e.preventDefault();
    localStorage.removeItem('campus');
    window.location.href='/';
  }
    const handleLogin = (e:any) => {
        e.preventDefault();    
        window.location.href='/auth/login';
    }

  return (

        <div className="navbar bg-white ">
          <Link to="/" className='mx-[0.9rem] my-[2rem] flex flex-row items-center justify-between font-poor text-3xl'>
            <PiStudentBold/>&nbsp;&nbsp;Campus Buddy
          </Link>
          <div className="right-side">
            {user &&<span className="username cursor-pointer" onClick={()=>{
                navigate(`/${user?.entity}/${user?._id}`)
            }}>{user.email}</span>}
            {user && <button onClick={handleLogout} className='logout'>Logout</button>}
            {!user && <button onClick={handleLogin} className='logout'>Login</button>}          </div>
        </div>
  )
}

export default Navbar