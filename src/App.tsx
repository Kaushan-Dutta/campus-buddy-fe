import { Route, Routes } from "react-router-dom";
import { Navroutes } from "../routes.config";
import Navbar from "./components/Navbar/Navbar";

import Home from "./components/pages/Home/Home";

import AuthWrapper from './wrapper/AuthWrapper';
import UserWrapper from './wrapper/UserWrapper';

import { userData } from "./context/AuthContext";

type NavPath={
  path:string,
  name:string,
  element:JSX.Element,
  checkAuth?:boolean,
  entity?:string[]
}

const App = () => {
  const {user}=userData();

  return (
    <div className=" min-h-screen min-w-full primary-container">
      <Navbar/>
      <Routes>
        <Route element={<AuthWrapper/>}>
            <Route path="/" element={<Home/>} />

            <Route path="/auth/" >
              {Navroutes.filter((ele:NavPath) => ele.checkAuth).map((route) => (
                <Route path={route.path} element={!user && route.element} />
              ))}
            </Route>

            <Route element={<UserWrapper/>}>

              <Route path="/student/:id/" >
                {Navroutes.filter((ele: NavPath) =>ele.entity && ele.entity.includes("student")).map(
                  (route) => (
                    <Route path={route.path} element={user?.entity=='student' && route.element} />
                  )
                )}
              </Route>

              <Route path="/teacher/:id/" >
                {Navroutes.filter((ele: NavPath) => ele.entity && ele.entity.includes("teacher")).map(
                  (route) => (
                    <Route path={route.path} element={user?.entity=='teacher' && route.element} />
                  )
                )}
              </Route>

              <Route path="/admin/:id/" >
                {Navroutes.filter((ele: NavPath) =>ele.entity && ele.entity.includes("admin")).map(
                  (route) => (
                    <Route path={route.path} element={user?.entity=='admin' && route.element} />
                  )
                )}
              </Route>
        </Route>
              <Route path="/maintainer/:id/" >
                {Navroutes.filter((ele: NavPath) => ele.entity && ele.entity.includes("maintainer")).map(
                  (route) => (
                    <Route path={route.path} element={user?.entity=='maintainer' && route.element} />
                  )
                )}
              </Route>
          </Route>
        
      </Routes>
    </div>
  );
};

export default App;
