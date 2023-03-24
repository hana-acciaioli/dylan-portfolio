import { createContext, useContext, useState, useEffect } from 'react';
import { getClients } from '../services/clients.js';

const ClientContext = createContext();

const ClientProvider = ({ children }) => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const data = await getClients();
        setClients(data);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetchClients();
  });
  return <ClientContext.Provider value={{ clients }}>{children}</ClientContext.Provider>;
};

const useClientContext = () => {
  const context = useContext(ClientContext);
  if (context === undefined) {
    throw new Error('useClient must be used within a ClientProvider');
  }
  return context;
};

export { ClientProvider, useClientContext };
