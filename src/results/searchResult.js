import {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default () => {
  const [result, setResult] = useState([]);
  const [error, setError] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          term: searchTerm,
          location: 'san jose',
          limit: 50,
        },
      });

      setResult(response.data.businesses);
    } catch (err) {
      setError('Something went wrong, Please try again!');
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [result, error, searchApi];
};
