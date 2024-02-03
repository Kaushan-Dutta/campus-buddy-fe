import React from 'react'
import {Login as useLogin} from '../utils/api/Authentication/login';
import Loader from './Loader'
import { Link } from 'react-router-dom';

const Login:React.FC = () => {
  const {loginForm,loginSubmit,loading} = useLogin();

  if(loading){
    return <Loader/>
  }
  return (
    <div className=''>
        <div className='max-w-96 h-96 p-5 rounded-xl shadow-lg bg-white mx-auto '>
          <div className='text-center'>
            <img src="" alt="logo"/>
            <h1 className='font-mons '>login to the website</h1>
          </div>
          <form onSubmit={loginSubmit} className=''>
              {loginForm.map((item:any)=>(
                <div key={item.id} className='flx-col gap-2'>
                  <p className=''>{item.label}:</p>
                  <input {...item} className='px-3 py-2 border  outline-none rounded-md '/>
                </div>
              ))}
              <p className='my-5'>To Register your College <Link to="/auth/register" className='text-theme'>Click Here</Link></p>
              <button type="submit" className='primary-btn w-full text-light'>Login</button>
          </form>
        </div>
    </div>
  )
}

export default Login