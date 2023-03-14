import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Link to="/campaign">Campaign & Editorial</Link>
      <Link to="/sculpture">Sculpture</Link>
    </div>
  );
}
