import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Showcategory from "./showcategory";



export function Addblogs(){

const [title,setcategory]=useState('')

const [description,setdescription]=useState('')

const [option,setoption]=useState('')


const [data,setdata]=useState([])


const navigate=useNavigate();


const fetchData = async () => {
      
    const response = await axios.get('http://localhost:4000/user/category');
    console.log("API Response:", response.data.data); // Log API response
    if(response.data.message=='success'){
        setdata(response.data.data);
    }
    return response.data.data;

};
useEffect(() => {
    fetchData();
}, []);




async function sendblog(){
    
        const username=localStorage.getItem('name');
        const userid=localStorage.getItem('id');
        console.log(username,userid)
        const data={title,option,description,username,userid};

        console.log('data',data);
        
    const result=await axios.post('http://localhost:4000/user/blogs',data);
console.log('result for data send',result)
    

    if(result.status==200){
        toast.success("Blog Successfully added");
            navigate('/Showblogs');

    }
    else {
        toast.warning('Problem occured');
    }
}






return (

<div className='container' style={{display:"flex",flexDirection:"column",justifyContent:"center",fontSize:"16px"}}>
    <h1 className="mb-2">Add Blogs</h1>
   
<label >Title </label>
<input type="text" placeholder="lambda expression" onChange={(elem)=>{setcategory(elem.target.value)}} className="mb-3 mt-2"/>

<label htmlFor="" clas>Category</label>
<select name="" id="" className="mb-3" style={{borderRadius:"3px",}}  onChange={(e)=>{setoption(e.target.value)}}>
    <option value="select">categories</option>
    {
        data.map((elem)=>{
            return (
             <option value={elem.value}>{elem.title}</option>

            )
        })

    }
    
 
</select>

<label >Description : </label>
<textarea placeholder="Music helps to boost confidence" onChange={(elem)=>{setdescription(elem.target.value)}} cols={35} rows={10} className="mb-3"/>

<button  className="btn btn-success" onClick={sendblog} style={{width:"120px",height:"50px"}} >Add Blog</button>

 

</div>

)
} 