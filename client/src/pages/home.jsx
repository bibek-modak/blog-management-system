import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function Home(){
    const navigate=useNavigate();
    const email=localStorage.getItem('email');
    const password=localStorage.getItem('password');
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
  const [phone, setphone] = useState('')

const data={
    email,
    password,
}

const reset=()=>{
localStorage.removeItem('email');
localStorage.removeItem('password');
toast.error("Log Out", {
    // Set to 15sec
    autoClose: 3000,
});
navigate('/login');

}

const getdata=async()=>{

    const fetch= await axios.post('http://localhost:4000/user/login',data);
const details=fetch['data'].data[0];
console.log(details)
setfirstname(details.name);
setphone(details.phoneno);


}

getdata()

// console.log(firstname);
// console.log(lastname);

return (
<div className="container">
    
<h1>Welcome, {firstname} {lastname} </h1>
<br/>
<h2 color="red">Sunbeam Blog management system</h2>




</div>
)
}



export default Home;