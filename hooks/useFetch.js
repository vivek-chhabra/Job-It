import { useState, useEffect } from 'react';
import axios from 'axios';

export default useFetch = endPoint => {
    const RAPID_API_KEY = process.env.RAPID_API_KEY;
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchData = async query => {
        const options = {
            method: 'GET',
            url: `https://jsearch.p.rapidapi.com/${endPoint}`,
            headers: {
                'X-RapidAPI-Key':
                    'acf41141e4mshce7ddcbd06766b5p1a62c2jsne3a444838f12',
                'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
            },
            params: { ...query }
        };

        setIsLoading(true);
        setError(null);
        setData([]);

        // try {
        //     const res = await axios.request(options);

        //     setData(res.data.data);
        //     setIsLoading(false);
        //     return res.data.data;
        // } catch (err) {
        //     console.log(err.message);
        //     setError(err.message);
        //     alert(err.message);
        //     setIsLoading(false);
        // }
    };

    return { isLoading, error, data, fetchData };
};
