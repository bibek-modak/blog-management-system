
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function Afterlogout(){
    // const navigate=useNavigate();http://localhost:3000   

return (
<div className="container">
    
<h1>Sunbeam Blogs  </h1>
<br/>
<h2 color="red">thanks for using our service</h2>

 <Link to={'/login'}>Login Again</Link>   



</div>
)
}



export default Afterlogout;