import Axios from 'axios';
import { useEffect, useState } from 'react'

export const useClients = () => {
    const [clientsList, setClientsList] = useState([]);

      const getClients = () => {
        Axios.get("https://control-stock-server.vercel.app/api/clients").then((res) => {
          setClientsList(res.data);
        }).catch((err) => {
          console.log(err);
        });
      };
    
      useEffect(() => {
        getClients();
      }, []);


  return {clientsList, setClientsList, getClients}
}
