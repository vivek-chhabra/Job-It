import { useState, useEffect } from 'react';
import axios from 'axios';

export default useFetch = (endPoint, query) => {
  const RAPID_API_KEY = process.env.RAPID_API_KEY;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  console.log(process.env.RAPID_API_KEY, 'api key');
  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endPoint}`,
    headers: {
      'X-RapidAPI-Key': '5e9e990595msh3ce31b74a23c9e7p1c453ajsn20355463833e',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: { ...query }
  };

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    setData([]);

    try {
      const res = await axios.request(options);

      setData(res.data.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err.message, 'Something Went Wrong!!!');
      setError(err.message);
      alert(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { isLoading, error, data, fetchData };
};
