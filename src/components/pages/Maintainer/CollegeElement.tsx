import React, { useEffect, useState  } from "react";
import Loader from "../../Loader";
import { CollegeCreation } from "../../../utils/api/Maintainer/college";
import Image from "./colleg-logo.jpeg";
import "./stylece.scss";

type CollegeType = {
  _id: string;
  name: string;
  website: string;
  email: string;
  phone: string;
  status:string
};

const Element = () => {
  const { fetchCollegeData,loading,approveCollege } = CollegeCreation();
  const [college, setCollege] = useState<CollegeType>();
  const [collegeId, setCollegeId] = useState<string>("");

  useEffect(() => {
    const loadCollege = async () => {
      const search = window.location.search;
      const params = new URLSearchParams(search);
      const fetch = await fetchCollegeData(params.get("id"))
        .then((res) => {
          console.log(res);
          setCollege(res);
        })
        .catch((err) => {
          console.log(err);
        });
      
      setCollegeId(params.get("id")!);
    };
    loadCollege();
  }, []);
  if(loading){
    return <Loader/>
  }
  return( 
    <div className="college-element">
      <div className="college-requests">
        <div className="logo-img">
          <img src={Image} alt="college-logo" />
        </div>
        <div className="college-info">
          <table>
            <tr>
              <td className="item-head">College ID:</td>
              <td>{college?._id}</td>
            </tr>
            <tr>
              <td className="item-head">Name:</td>
              <td>{college?.name}</td>
            </tr>
            <tr>
              <td className="item-head">Email:</td>
              <td>{college?.email}</td>
            </tr>
            <tr>
              <td className="item-head">Phone:</td>
              <td>{college?.phone}</td>
            </tr>
            <tr>
              <td className="item-head">Website:</td>
              <td>{college?.website}</td>
            </tr>
            <tr>
              <td className="item-head">Status:</td>
              <td>{college?.status}</td>
            </tr>
          </table>
        </div>
      </div>
      {college?.status=='pending' && 
        <div className="buttons">
          <button className='approve-btn' onClick={()=>{
            approveCollege(collegeId,'accepted').then((res)=>{

              console.log("College Approved",collegeId);

            }).catch((err)=>{
              console.log(err);
            });
          }}>Approve</button> 
          <button className='reject-btn' onClick={()=>{
            approveCollege(collegeId,'rejected').then((res)=>{
              console.log("College Rejected");

            }).catch((err)=>{
              console.log(err);
            });
          }}>Reject</button>
        </div>
      }
    </div>
  )
};

export default Element;
