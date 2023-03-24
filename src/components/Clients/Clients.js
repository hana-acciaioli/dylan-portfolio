import React from 'react';
import { useClientContext } from '../../context/ClientContext.js';
import './Clients.css';

export default function Clients() {
  const { clients } = useClientContext();
  return (
    <div>
      {clients && (
        <div className="client-list">
          {clients.map((client) => (
            <a key={client.id} href={`/clients/${client.id}`}>
              {client.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
