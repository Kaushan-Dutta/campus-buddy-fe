import './style.css';
import Blog1 from './blog1.png';
import Blog2 from './blog2.png';
import Blog3 from './blog3.png';
import Pic2 from './pic2.jpg';
import Pic6 from './pic6.jpg';
import Pic7 from './pic7.jpg';
import team1 from "./team1.png";
import team2 from "./team2.png";
import about from "./about_us.png";
function Home() {

  return (
    <>
      <section className="w3l-main-slider position-relative" id="home">
        <div className="companies20-content">
            <div className="">

                <div className="background">
                    <div className="vlogbook_contents ">
                        <div className="title">
                            <h4>For Schools / For Colleges / For Universtites </h4>
                        </div>
                        <div className="head mt-4">
                            <p>Navigating Campus Life, Building Futures.</p>
                        </div>
                        <div className="learn_more mt-4">
                            <button><a href="C:\Users\Rupayan\OneDrive\Desktop\Project-PetCare\Account Page\account.html"><b>Register/Login</b></a></button>
                        </div>
        
                    </div>
                </div>


            </div>
        </div>
    </section>

    <section className="w3l-blog-block py-5">
        <div className="container py-lg-5 py-md-4"/>

            <div className="contents text-center mx-auto">
                <h5><strong>Our Services</strong></h5>
                <h1 className="mt-3">Navigating Campus Life, Building Futures </h1>
            </div>
            <div className="services mt-5" style={{marginBottom:"50px"}}>

                <div className="card">
                    
                    <div className="card_img">
                        
                        <img src={Blog1} alt="user-image"/>
                    </div>
                    <div className="card_info mt-3">
                        
                        <h2>SAVE TIME</h2>
                        <p className="mt-2">
This feature streamlines and automates tasks, reducing manual effort and increasing efficiency, enabling users to accomplish more in less time.
                        </p>
                    </div>
                </div>

                <div className="card">
                    
                    <div className="card_img">
                        
                    <img src={Blog2} alt="user-image"/>
                    </div>
                    <div className="card_info mt-3">
                       
                        <h2>BUDGET FRIENDLY</h2>
                        <p className="mt-2">This feature refers to cost-effective pricing structures, minimizing financial burden on educational institutions while providing essential functionalities for effective administration and learning management. It ensures affordability without compromising on quality and usability.
                        </p>
                    </div>
                </div>



                <div className="card">
                    
                    <div className="card_img">
                        
                    <img src={Blog3} alt="user-image"/>
                    </div>
                    <div className="card_info mt-3">
                        
                        <h2>Stay Connected with Campus</h2>
                        <p className="mt-2">This feature facilitates seamless communication and information sharing, fostering a connected environment between students, faculty, and the entire campus community.
                        </p>
                    </div>
                </div>

            </div>
    </section>

    <img src={about} alt="about-image" className="about-image" width="1250"/>

    <section>
    <img src={team1} alt="user-image" className="small-image" width="1250"/>
    <img src={team2} alt="user-image" className="mid-image" width="1250"/>
    </section>
    </>
    
  )
}

export default Home
