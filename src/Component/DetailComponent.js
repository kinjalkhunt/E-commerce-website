
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';

const DetailComponent = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const navigate = useNavigate();
    // const [error, setError] = useState(null);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://663cb35717145c4d8c374f0d.mockapi.io/weetech/names/${id}}`);
                setData(response.data);
            } catch (error) {
                // setError('Failed to fetch data. Please try again later.');

                console.log('error:', error);
            }
        };

        fetchData();
    }, [id]);

    // if (error) {
    //     return <h1>{error}</h1>; // Display error message if fetching data fails.
    // }
    if (!data) {
        return <h1>Loading...</h1>;//If data is null (i.e., the data hasn't been fetched yet), a loading message is displayed.

    }

    return (
        <div style={{ border: '2px solid gray', margin: '10px' }}>
            <img src={data.avatar } alt={data.name} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
            <p>id: {data.id}</p>
            <p>name: {data.name}</p>
            <p>Date: {new Date(data.createdAt).toLocaleDateString()}</p>
            <p>Time: {new Date(data.createdAt).toLocaleTimeString()}</p>
        </div>
    );
};

export default DetailComponent;
//|| 'https://via.placeholder.com/100'