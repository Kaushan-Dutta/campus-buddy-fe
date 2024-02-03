import Login from './src/components/Login';
import RegisterForm from './src/components/RegisterForm';

import Notifications from './src/components/pages/Notification/Notifications'
import Notification from './src/components/pages/Notification/Notification'

import Maintainer from './src/components/pages/Maintainer/Dashboard';
import CollegeElement from './src/components/pages/Maintainer/CollegeElement';

import AdminDashboard from './src/components/pages/Dashboard/YearLayout';

/* import Department from './src/components/pages/Admin/Dashboard'
import DepartmentYears from './src/components/pages/Admin/Dashboard'
import DepartmentElement from './src/components/pages/Admin/Dashboard'
 */
import StudentDashboard from './src/components/pages/Dashboard/CourseLayout';
//import UserSchedule from './src/components/pages/User/Schedule';

import TeacherDashboard from './src/components/pages/Dashboard/Course';;
//import TeacherSchedule from './src/components/pages/Teacher/Schedule';

import CourseLayout from './src/components/pages/Dashboard/CourseLayout';
import Course from './src/components/pages/Dashboard/Course';

import Profile from './src/components/pages/Profile/Profile';
export const Navroutes = [
    {
        path:'login',
        name:'Login',
        element:<Login/>,
        checkAuth:true
    },
    {
        path:'register',
        name:'Register',
        element:<RegisterForm/>,
        checkAuth:true
    },


    {
        path:'notifications',
        name:'Notification',
        element:<Notifications/>,
        entity:['student','teacher','admin'],
        onSideBar:true
    },
    {
        path:'notifications/notification',
        name:'Notification',
        element:<Notification/>,
        entity:['student','teacher','admin'],
    },
    




    {
        path:'',
        name:'Dashboard',
        element:<StudentDashboard/>,
        entity:['student'],
        onSideBar:true
    },
    /* {
        path:'',
        name:'Fees',
        element:<Student/>,
        entity:['student'],
        onSideBar:true
    }, */
    /* {
        path:'schedule',
        name:'User Schedule',
        element:<UserSchedule/>,
        entity:['student']
    }, */
    
    

    {
        path:'',
        name:'Dashboard',
        element:<TeacherDashboard/>,
        entity:['teacher'],
        onSideBar:true
    },
    /* {
        path:'schedule',
        name:'Teacher Schedule',
        element:<TeacherSchedule/>,
        entity:['teacher']
    }, */
    
    
    /* {
        path:'course',
        name:'Course Details',
        element:<Course/>,
        entity:['student','teacher','admin']
    }, */
    /* {
        path:'schedule',
        name:'Schedule',
        element:<Student/>,
        entity:['student','teacher'],
        onSideBar:true
    }, */


    
    {
        path:'',
        name:'Dashboard',
        element:<AdminDashboard/>,
        entity:['admin'],
        onSideBar:true
    },
    
    /* {
        path:'department',
        name:'Departments List',
        element:<Department/>,
        entity:['admin']
    },
    {
        path:'department/:id',
        name:'Department Years',
        element:<DepartmentYears/>,
        entity:['admin']
    },
    {
        path:'department/:id/:yearid',
        name:'Department Year Details',
        element:<DepartmentElement/>,
        entity:['admin']
    }, */




    {
        path:'year',
        name:'Courses',
        element:<CourseLayout/>,
        entity:['admin'],
    },
    {
        path:'course',
        name:'Course',
        element:<Course/>,
        entity:['admin','student','teacher'],
    },
    {
        path:'profile',
        name:'Profile',
        element:<Profile/>,
        entity:['admin','student','teacher'],
        onSideBar:true
    },
    {
        path:'schedule',
        name:'Schedule',
        element:<Profile/>,
        entity:['admin','student','teacher'],
        onSideBar:true
    },
    {
        path:'',
        name:'Dashboard',
        element:<Maintainer/>,
        entity:['maintainer']
    },
    {
        path:'college',
        name:'Approvals List',
        element:<CollegeElement/>,
        entity:['maintainer']
    },
    
]