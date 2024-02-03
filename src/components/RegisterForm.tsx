import React from 'react'
import {Register as useRegister} from '../utils/api/Authentication/register';
import Loader from './Loader';

const Register:React.FC = () => {
  const {registerForm,registerSubmit,loading,documentProof, setDocumentProof} = useRegister();
  if(loading){
    return <Loader/>
  }
  return (
    <div className=''>
        <div className=' max-w-96  p-5 rounded-xl shadow-lg bg-white mx-auto '>
          <div className='text-center'>
            <img src="" alt="logo"/>
            <h1 className='font-mons '>register to the website</h1>
          </div>
          <form onSubmit={registerSubmit}>
              {registerForm.map((item:any)=>(
                <div key={item.id} className='flx-col gap-2'>
                  <p className=''>{item.label}:</p>
                  <input {...item} className='px-3 py-2 border  outline-none rounded-md '/>
                </div>
              ))}
              <div className=''>
                <p className=''>Document Proof:</p>
                <div className='w-full border-dotted border-4 h-20 rounded-md my-5'>

                </div>
              </div>
              <button type="submit" className='primary-btn w-full text-light my-5'>Register</button>
          </form>
        </div>
    </div>
  )
}

export default Register