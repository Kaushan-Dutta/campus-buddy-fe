import { FaBookOpenReader } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import "./style.scss";
import { Link } from 'react-router-dom';
import { userData } from "../../context/AuthContext";

type Element={
  course:String,
  courseId:String,
  _id:String,
  collegeId:String,
  event:string,
  description:string,
  date:string
}

interface ClassElementProps {
  data: Element[];
  component: string;
}
const ClassElement: React.FC<ClassElementProps> = ({data ,component}) => {
  const {user}=userData();

  if (!Array.isArray(data)) {
    return null; 
  }
    return (
      <>
        {
          data?.map((item,_id)=>{
            return(
              <div key={_id} className="each-course">
                <div className="sub-total">
                  <div className="sub-icon"><FaBookOpenReader/></div>
                  <div className="subject">
                    <p className="sub-name">{item.course!}</p>
                    <p className="sub-name">{item.event!}</p>
                    <p className="sub-name">{item.date!}</p>
                    {component=='year' && <p className="sub-name">Year:{ item._id!}</p>}
                    {component=='course' && <p className="sub-code">Subject id: {item._id!}</p>}  
                  </div>
              </div>
                {component=='year' && <Link to={`/${user?.entity}/${user?._id}/year?id=${item?._id}`} className="arrow-icon" ><IoIosArrowForward/></Link>}
                {component=='course' && <Link to={`/${user?.entity}/${user?._id}/course?id=${item?._id}`} className="arrow-icon" ><IoIosArrowForward/></Link>}
                {component=='notification' && <Link to={`/${user?.entity}/${user?._id}/notifications/notification?id=${item?._id}`} className="arrow-icon" ><IoIosArrowForward/></Link>}

              </div>
            )
          })
        }
      </>
    )
}

export default ClassElement