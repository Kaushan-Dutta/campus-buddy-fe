import {useState} from 'react'
import {  gql,useQuery } from '@apollo/client';
import toast from 'react-hot-toast';
const _login=gql`
  query LoginQuery($_id: String!, $password: String!) {
  LoginQuery(_id: $_id, password: $password) {
    accessToken
  }
}
`
export const Login = () => {

  const [userId,setUserId]=useState<string>('');
  const [password,setPassword]=useState<string>('');
  const [loading,setLoading]=useState<boolean>(false);

  const {refetch}=useQuery(_login);

  const loginForm=[
    {
      label:'User Id',
      value:userId,
      onChange:(e:any)=>setUserId(e.target.value),
      type:'text',
      placeholder:'Enter your user id'
    },
    {
      label:'Password',
      value:password,
      onChange:(e:any)=>setPassword(e.target.value),
      type:'password',
      placeholder:'Enter your password'
    }
  ]
  const loginSubmit=async(e:any)=>{
    e.preventDefault();
    try{
        setLoading(true);
        const login=await refetch({
          _id:userId,
          password:password
        })
        localStorage.setItem('campus',login.data.LoginQuery.accessToken);
        toast.success("Logged In")
        setLoading(false);
    }
    catch(err){
      console.log(err);
      toast.error("Invalid Credentials")
    }
    finally{
      window.location.href='/';
    }
  }
  return (
    {loginForm,loginSubmit,loading}
  )
}

