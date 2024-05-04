import { Link, Route,Routes } from 'react-router-dom';
import Loginuser from './pages/login.jsx'
import { ToastContainer } from 'react-toastify';
import Registeruser from './pages/register.jsx';
import Home from './pages/home.jsx'
import { useSelector } from 'react-redux';
import Navbar from './pages/navbar.jsx';
import Afterlogout from './pages/afterlogout.jsx';
import { Addcategory } from './pages/addcategory.jsx';
import Showcategory from './pages/showcategory.jsx';
import Showblogs from './pages/allblogs.jsx';
import { Addblogs } from './pages/addblogs.jsx';
import Search from './pages/searchblogs.jsx';
import Showmyblogs from './pages/myblogs.jsx';
import { useEffect } from 'react';

function App() {
  const loginStatus=localStorage.getItem('isactive');
  const user = useSelector((state) => state.user)
    console.log(loginStatus)
    function shownavbar(){
      if(loginStatus=='true'){
        return <Navbar/>
      }
    }
    useEffect(()=>{shownavbar()},[])
  return (
    <div className='container-fluid'>
      {
      shownavbar()
      
      }
    <div className="container">

     <Routes>
     {loginStatus=='true'&&<Route path='/' element= {<Home/>} />}
     {loginStatus=='false'&&<Route path='/' element= {<Loginuser/>} />}
     <Route path='/login' element= {<Loginuser />} />
     <Route path='/register' element= {<Registeruser />} />
     {loginStatus=='true'&& <Route path='/home' element={<Home/>} />}
     <Route path='/afterlogout' element={<Afterlogout/>} />
     {loginStatus=='true'&& <Route path='/addcategory' element={<Addcategory/>} />}
     {loginStatus=='true'&& <Route path='/showblogs' element={<Showblogs/>} />}
     {loginStatus=='true'&& <Route path='/addblogs' element={<Addblogs/>} />}
     {loginStatus=='true'&& <Route path='/addcategory' element={<Addcategory/>} />}
     {loginStatus=='true'&& <Route path='/showcategory' element={<Showcategory/>} />}
     {loginStatus=='true'&& <Route path='/searchblogs' element={<Search/>} />}
     {loginStatus=='true'&& <Route path='/myblogs' element={<Showmyblogs/>} />}


      
      {/* <Route path='/Afterlogout/login' element={<Loginuser/>} /> */}



     </Routes>

    <ToastContainer/>


    </div>
    </div>
  );
}

export default App;
