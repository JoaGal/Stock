import Axios from 'axios';
import { useEffect, useState } from 'react'

export const useClients = () => {
    const [clientsList, setClientsList] = useState([]);

      const getClients = () => {
        Axios.get("http://localhost:3001/api/clients").then((res) => {
          setClientsList(res.data);
        });
      };
    
      useEffect(() => {
        getClients();
      }, []);


  return {clientsList, setClientsList, getClients}
}
