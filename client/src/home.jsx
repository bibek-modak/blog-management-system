import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Homepage() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
      
            const response = await axios.get('http://localhost:4000/user/show');
            console.log("API Response:", response.data.data); // Log API response
            if(response.data.message=='success'){
            setData(response.data.data);
            }
          
       
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className='container'>
            <center><h1>Users</h1></center>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>name</th>
                        <th>email</th>
                        <th>password</th>
                        <th>address</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((elem) => {
                        return (
                            <tr key={elem.id}>
                                <td>{elem.id}</td>
                                <td>{elem.name}</td>
                                <td>{elem.email}</td>
                                <td>{elem.password}</td>
                                <td>{elem.address}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <button onClick={() => navigate('./add')} className='btn btn-success'>Add Column</button>
            <button onClick={() => navigate('./search')} className='btn btn-warning'>Search</button>
        </div>
    );
}

export default Homepage;
