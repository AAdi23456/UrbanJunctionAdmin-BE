import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const role = JSON.parse(localStorage.getItem('role'));
  const token = JSON.parse(localStorage.getItem('token'));

  useEffect(() => {
    if (!role || !token) {
      navigate('/login');
    }
  }, [role, token, navigate]);
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5', margin: 0, padding: 0 }}>
      <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff' }}>
        <h1 style={{ textAlign: 'center' }}>Dashboard</h1>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Link to="/add">
            <button style={{ padding: '10px', marginBottom: '10px' }}>Add Product</button>
          </Link>
          <Link to="/products">
            <button style={{ padding: '10px', marginBottom: '10px' }}>Products</button>
          </Link>
         
          {role === 'superadmin' && (
            <Link to="/change/role">
              <button style={{ padding: '10px', marginBottom: '10px' }}>Change User Role</button>
            </Link>,
             <Link to="/users">
             <button style={{ padding: '10px', marginBottom: '10px' }}>User List</button>
           </Link>
          )}
         
          {role === "Admin" && (
            <Link to="/users">
              <button style={{ padding: '10px', marginBottom: '10px' }}>User List</button>
            </Link>
          )}
          <Link to="/upload">
            <button style={{ padding: '10px', marginBottom: '10px' }}>Multiple data Upload</button>
          </Link>
          <Link to="/logout">
            <button style={{ padding: '10px', marginBottom: '10px' }}>Logout</button>
          </Link>
          
        
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
