import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Logout = () => {
  const navigate = useNavigate(); 
 
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5', margin: 0, padding: 0 }}>
      <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff' }}>
        <h1 style={{ textAlign: 'center' }}>Logout</h1>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
          <button onClick={handleLogout} style={{ padding: '10px', backgroundColor: 'navy', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer', marginRight: '10px' }}>Logout</button>
          <Link to="/login">
            <button style={{ padding: '10px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer', marginRight: '10px' }}>Login</button>
          </Link>
          <Link to="/signup">
            <button style={{ padding: '10px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer', marginRight: '10px' }}>Signup as seller</button>
          </Link>
          <Link to="/">
            <button style={{ padding: '10px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Dashboard</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Logout;
