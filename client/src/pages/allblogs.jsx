import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function Showblogs() {
    const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
const Author=localStorage.getItem('name')
    const fetchData = async () => {
      
            const response = await axios.get('http://localhost:4000/user/blogs');
            console.log("API Response:", response.data.data); // Log API response
            if(response.data.message=='success'){
            setData(response.data.data);
            }
          
       
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div style={{width:"600px"}}>
            <center><h1>All Blogs</h1></center>
            <div className="table">
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>title</th>
                        <th>category</th>
                        <th>Contents</th>
                        <th>Author</th>

                    </tr>
                </thead>
                <tbody>
                {data.map((elem) => {
                        return (
                            <tr id={elem.id}>
                                <td>{elem.title}</td>
                                <td>{elem.category}</td>
                                <td>{elem.contents}</td>
                        {/* <td>{String(elem.created_time)}</td> */}
                        <td>{elem.userid}</td>

                                <td></td>

                                {/* <td><button id={elem.id} onClick={()=>{
                                    const data=axios.delete('http://localhost:4000/user/category',elem.id)
                                }}>X</button></td> */}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default Showblogs;