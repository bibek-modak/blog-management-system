import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function Showcategory() {
    const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    const fetchData = async () => {
      
            const response = await axios.get('http://localhost:4000/user/category');
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
            <center><h1>Categories</h1></center>
            <div className="table">
            <table className='table table-striped table-bordered mb-5' >
                <thead>
                    <tr>
                        <th>title</th>
                        <th>description</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((elem) => {
                        return (
                            <tr id={elem.id}>
                                <td>{elem.title}</td>
                                <td>{elem.description}</td>
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

export default Showcategory;