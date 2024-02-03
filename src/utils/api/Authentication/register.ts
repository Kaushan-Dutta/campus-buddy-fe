import { useState } from "react";
import {  gql,useMutation } from '@apollo/client';

const _registerCollege=gql`
  mutation RegisterCollege($email:String!,$phone:String!,$website:String!,$address:String!,$documentProof:String!,$name:String!){
      RegisterCollege(email:$email,phone:$phone,website:$website,address:$address,documentProof:$documentProof,name:$name){
              name,email,phone,website,address,documentProof,_id
      }
  }
`
export const Register = () => {
  
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [website, setWebsite] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [documentProof, setDocumentProof] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);


  const [registerCollege]=useMutation(_registerCollege);

  const registerForm = [
    {
      label: "College Name",
      value: name,
      onChange: (e: any) => setName(e.target.value),
      type: "text",
      placeholder: "Enter your college name",
    },
    {
      label: "Email",
      value: email,
      onChange: (e: any) => setEmail(e.target.value),
      type: "text",
      placeholder: "Enter your email id",
    },
    {
      label: "Phone",
      value: phone,
      onChange: (e: any) => setPhone(e.target.value),
      type: "text",
      placeholder: "Enter your phone number",
    },
    {
      label: "Website",
      value: website,
      onChange: (e: any) => setWebsite(e.target.value),
      type: "text",
      placeholder: "Enter your website",
    },
    {
      label: "Address",
      value: address,
      onChange: (e: any) => setAddress(e.target.value),
      type: "text",
      placeholder: "Enter your address",
    },
    
    
  ];
  const registerSubmit = async(e:any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const {data}=await registerCollege({
        variables:{
          name,
          email,
          phone,
          website,
          address,
          documentProof:"https://drivelink.gdrive"
        }
      })
      console.log("College Form",data); 
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  return { registerForm, registerSubmit, loading,documentProof, setDocumentProof };
};
