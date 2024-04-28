import { Route,Routes } from 'react-router-dom';
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

function App() {

  const user = useSelector((state) => state.user)
  
  return (
    <div className='container-fluid'>

      {user.loginStatus && <Navbar/>}
      

    <div className="container">

     <Routes>
     <Route path='/' element= {<Loginuser />} />
     <Route path='/login' element= {<Loginuser />} />
     <Route path='/register' element= {<Registeruser />} />
      <Route path='/home' element={<Home/>} />
      <Route path='/afterlogout' element={<Afterlogout/>} />
      <Route path='/addcategory' element={<Addcategory/>} />
      <Route path='/showblogs' element={<Showblogs/>} />
      <Route path='/addblogs' element={<Addblogs/>} />
      <Route path='/addcategory' element={<Addcategory/>} />
      <Route path='/showcategory' element={<Showcategory/>} />
      <Route path='/searchblogs' element={<Search/>} />


      
      {/* <Route path='/Afterlogout/login' element={<Loginuser/>} /> */}



     </Routes>

    <ToastContainer/>


    </div>
    </div>
  );
}

export default App;
