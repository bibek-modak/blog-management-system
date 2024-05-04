import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './navbar.css'
import { logoutAction } from "../features/userSlice";
import { useDispatch } from "react-redux";
function Navbar(){
    const dispatch = useDispatch();

    const navigate=useNavigate();

    

    const reset=()=>{
        localStorage.removeItem('name');
        localStorage.removeItem('id');
        toast.error("Log Out", {
            // Set to 15sec
            autoClose: 3000,
        });
        localStorage.setItem('isactive',false);
        dispatch(logoutAction())
        navigate('/Afterlogout');
        
        }

return (
    <>
{/* <!--Main Navigation--> */}
<header>
  {/* <!-- Sidebar --> */}
  <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
    <div class="position-sticky">
      <div class="list-group list-group-flush mx-3 mt-4" style={{cursor:"pointer"}}>

        <a class="list-group-item list-group-item-action py-2 ripple "onClick={()=>{navigate('/myblogs') }} aria-current="true"> <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>My Blogs</span></a>

        <a class="list-group-item list-group-item-action py-2 ripple " onClick={()=>{navigate('/showblogs') }}>
          <i class="fas fa-chart-area fa-fw me-3"></i><span>All Blogs</span></a>
        
         <a class="list-group-item list-group-item-action py-2 ripple "onClick={()=>{navigate('/addcategory') }}
          ><i class="fas fa-lock fa-fw me-3"></i><span>Add category</span></a>

         <a class="list-group-item list-group-item-action py-2 ripple"onClick={()=>{navigate('/showcategory') }}
          ><i class="fas fa-chart-line fa-fw me-3"></i><span>Show Categories</span></a>

         <a class="list-group-item list-group-item-action py-2 ripple" onClick={()=>{navigate('/addblogs') }}>
          <i class="fas fa-chart-pie fa-fw me-3"></i><span>Add Blog</span></a>

         <a class="list-group-item list-group-item-action py-2 ripple"onClick={()=>{navigate('/searchblogs') }}>
            <i class="fas fa-chart-bar fa-fw me-3"></i><span>Search Blogs</span></a>

          <a class="list-group-item list-group-item-action py-2 ripple"onClick={reset}
          ><i class="fas fa-chart-bar fa-fw me-3"></i><span >log Out</span></a>


       
      </div>
    </div>
  </nav>
  {/* <!-- Sidebar --> */}

  {/* <!-- Navbar --> */}
  <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-info fixed-top">
    {/* <!-- Container wrapper --> */}
    <div class="container-fluid">
      {/* <!-- Toggle button --> */}
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-collapse-init
        data-mdb-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>

      {/* <!-- Brand --> */}
      <a class="navbar-brand" href="#">
        <img
          src="https://sunbeaminfo.in/img/new/new_logo.png"
          height="25"
          alt="MDB Logo"
          loading="lazy" onClick={()=>{navigate('/home')}}
        />
      </a>
      
      {/* <!-- Right links --> */}
      <ul class="navbar-nav ms-auto d-flex flex-row">
        {/* <!-- Notification dropdown --> */}
        <li class="nav-item dropdown">
          <a
            data-mdb-dropdown-init class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fas fa-bell"></i>
            <span class="badge rounded-pill badge-notification bg-danger"></span>
          </a>
          <ul
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <li>
              <a class="dropdown-item" href="#">Some news</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Another news</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Something else here</a>
            </li>
          </ul>
        </li>

        {/* <!-- Icon --> */}
        <li class="nav-item">
          <a class="nav-link me-3 me-lg-0">
            <i class="fas fa-fill-drip"></i>
          </a>
        </li>
        {/* <!-- Icon --> */}
        <li class="nav-item me-3 me-lg-0">
          <a class="nav-link" href="#">
            <i class="fab fa-github"></i>
          </a>
        </li>


        {/* <!-- Avatar --> */}
        <li class="nav-item dropdown">
          <a
            data-mdb-dropdown-init class="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://media.licdn.com/dms/image/D4D16AQHM5YVi0XxI-g/profile-displaybackgroundimage-shrink_200_800/0/1684514513153?e=2147483647&v=beta&t=fcV8-ir9wCUfleZDZd7Nv7r2B1ZtzyatJQc-Ys2TMBY"
              class="rounded-circle"
              height="22"
              alt="Avatar"
              loading="lazy"
            />
          </a>
          {/* <ul
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <li>
              <a class="dropdown-item" href="#">My profile</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Settings</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Logout</a>
            </li>
          </ul> */}
        </li>
      </ul>
    </div>
    {/* <!-- Container wrapper --> */}
  </nav>
  {/* <!-- Navbar --> */}
</header>
{/* <!--Main Navigation--> */}

{/* <!--Main layout--> */}
<main style={{marginBottom:" 58px"}}>
  <div class="container pt-4"></div>
</main>


</>

)
}


export default Navbar;