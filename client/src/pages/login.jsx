import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../App.css'
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginAction } from "../features/userSlice";


    function Loginuser(){

        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')

        const navigate=useNavigate();
        const dispatch = useDispatch();


    const submitlogin=async ()=>{

        if(email.length===0){
            toast.warning('Enter email properly')
        }
        else if(password.length===0){

            toast.warning('Enter password properly')
             
        }
        else {
             
            const data={
                email,password
            }
            const result=await axios.post('http://localhost:4000/user/login',data);
            
           
            const id=result.data.data[0].id;
            const name=result.data.data[0].name;

            localStorage.setItem('id',id);
            localStorage.setItem('name',name);

            if(result['data']==='No user found'){
                toast.error('No user Found !! ');
                toast.warn('Try again');
            }
            else {
                   
                setEmail(result['data']['email'])
                setPassword(result['data']['password'])
                localStorage.setItem('isactive',true)

                dispatch(loginAction())
                toast.success('Login success!! Redirecting')
                navigate('/home');
            }

        }

    }


return (
<div className='container' style={{marginTop:"50px"}}>

    <h1 className='page-title'>Sunbeam Blogs</h1>
    <br/>
    <div className="row">
        <div className="col"></div>

        <div className="col">
            <div className='form'>
                <div className='mb-3'>

                    <label htmlFor="">Enter Email:</label>
                    <input type="email" onChange={(elem)=>{
                        setEmail(elem.target.value)
                    }} />

                    <label htmlFor="">Enter password:</label>
                    <input type="password" onChange={(elem)=>{setPassword(elem.target.value)}} />

                    <div className="login_button">

                    <button className="btn btn-success mt-3 me-3 ms-4" onClick={submitlogin}>Submit</button>

                    <button className="btn btn-warning mt-3" onClick={()=>{navigate('/register')}}>SignUp</button>

                    </div>
                </div>
            </div>        
        </div>

         <div className="col"></div>

    </div>



</div>
)
}


export default Loginuser;

