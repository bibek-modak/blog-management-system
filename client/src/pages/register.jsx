import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

function Registeruser(){

    const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')


const navigate=useNavigate();

const submitregister=async ()=>{

    if(email.length===0||password.length===0||phone.length===0||name.length===0){
        toast.warning('Enter all the fields properly')
    }
    else {

        const body={
            name,email,phone,password
        }

        const result=await axios.post('http://localhost:4000/user/register',body);

        console.log(result);
        if(result['status']===200){
        
        toast.success('registration completed')
        
        navigate('/login')

        }
    else  toast.error('oops something went wrong');


    }
}


return (
<div className='container'>
    <h1>Register</h1>
    <h4>New User</h4>

    <br/>

    <section className="register-body">
<label htmlFor="">Full Name : </label>
<input type="text" onChange={(elem)=>{
    setName(elem.target.value)
}} />


<label htmlFor="">Email : </label>
<input type="email" onChange={(elem)=>{
    setEmail(elem.target.value)
}} />



<label htmlFor="">password : </label>
<input type="password" onChange={(elem)=>{setPassword(elem.target.value)}} />


<label htmlFor="">phone : </label>
<input type="tel" onChange={(elem)=>{
    setPhone(elem.target.value)
}} />


</section>

<div className="register-btn">

<button className="btn btn-success mt-3 me-3" onClick={submitregister}>Submit</button>

<button className="btn btn-warning mt-3" onClick={()=>{navigate('/login')}}>SignIn</button>

</div>

</div>
)
}


export default Registeruser;

