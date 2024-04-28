import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function Search() {
  const [id, setid] = useState('');
  const [gotData, setGotData] = useState([]);
  const navigate = useNavigate();

  const showValue = async () => {
    try {
      const addRows = await axios.post('http://localhost:4000/user/getblogs', {id} );
      const details = addRows.data;
      console.log(details)
      
      if (details.data.length==0) {
        toast.warning('No user found..');
      } else {
        toast.success('User found');
        setGotData(details.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error('Error fetching data');
    }
  };

  

  return (
    <div style={{width:"600px"}}>
    <div className="container " >
      <center><h1>Search Blogs</h1></center>
      <table className='table table-striped' >
        <thead>
          <tr>
            <th>title</th>
            <th>category</th>
            <th>contents</th>
            <th>userid</th>
          </tr>
        </thead>
        <tbody>
          {
            gotData.map((elem)=>
            <tr>

              <td>{elem.title}</td>
              <td>{elem.category}</td>
              <td>{elem.contents}</td>
              <td>{elem.userid}</td>
            </tr>
            )
          }
        </tbody>
      </table>
      <label htmlFor="email">Enter id to Search:</label>
      <input type="text" onChange={(e) => setid(e.target.value)} />
      <button onClick={showValue} className='btn btn-success'>Search</button>
    </div>
    </div>
  );
}

export default Search;