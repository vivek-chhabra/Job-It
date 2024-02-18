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
                    '654b27fe8bmsh406242ece38b66dp17decdjsn3e3a3b37369c',
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
        //     setIsLoading(false);
        // }
    };

    return { isLoading, error, data, fetchData };
};
