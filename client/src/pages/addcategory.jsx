import axios from "axios"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";




export function Addcategory(){

const [title,setcategory]=useState('')
const [description,setdescription]=useState('')

const navigate=useNavigate();

async function sendcategory(){
        const data={title,description};

    const result=await axios.post('http://localhost:4000/user/category',data);

    if(result.status==200){
        toast.success("Category added");
            navigate('/showcategory');

    }
    else {
        toast.warning('Problem occured');
    }
}


return (

<div className='container'>
    <h1 className="mb-5">Add Categories</h1>
   
<label >Category </label>
<input type="text" placeholder="Music" onChange={(elem)=>{setcategory(elem.target.value)}} className="mb-4 mt-2"/>

<label >Description : </label>
<textarea placeholder="Music helps to boost confidence" onChange={(elem)=>{setdescription(elem.target.value)}} className="mb-5"/>

<button className="btn btn-success" onClick={sendcategory} style={{width:"200px"}}>Add Category</button>

 

</div>

)
} 