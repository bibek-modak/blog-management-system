import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function Showmyblogs() {
    const name=localStorage.getItem('name');
  const [gotData, setGotData] = useState([]);

  const showValue = async () => {
    try {
      const addRows = await axios.post('http://localhost:4000/user/getblogs', {name} );
      const details = addRows.data;
      console.log(details)
      
      
        setGotData(details.data);
      
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error('Error fetching data');
    }
  }

  useEffect(()=>{
showValue();
  },[])

  

  return (
    <div style={{width:"600px"}}>
    <div className="container " >
      <center><h1>My Blogs</h1></center>
      <table className='table table-striped' >
        <thead>
          <tr>
            <th>title</th>
            <th>category</th>
            <th>contents</th>
            <th>author</th>
          </tr>
        </thead>
        <tbody>
          {
            gotData.map((elem)=>
            <tr>

              <td>{elem.title}</td>
              <td>{elem.category}</td>
              <td>{elem.contents}</td>
              <td>{elem.author}</td>
            </tr>
            )
          }
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Showmyblogs;