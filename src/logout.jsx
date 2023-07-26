import React from 'react';

const Logout = () => {
  const handleLogout = () => {
   
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5', margin: 0, padding: 0 }}>
      <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff' }}>
        <h1 style={{ textAlign: 'center' }}>Logout</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button onClick={handleLogout} style={{ padding: '10px', backgroundColor: 'navy', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
