import { useState, useEffect } from 'react';
import axios from 'axios';

const FetchData = (url, [dependencies]) => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        setdata(res.data);
      })
      // eslint-disable-next-line no-console
      .catch(error => console.log(error));
  }, [dependencies, url]);
  return data;
};

export default FetchData;
