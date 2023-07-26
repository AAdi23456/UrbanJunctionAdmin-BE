import React, { useState } from 'react';
import axios from 'axios';

const ChangeUserRole = () => {
  const [email, setEmail] = useState('');
  const [authority, setAuthority] = useState('seller'); 
  const [msg, setMsg] = useState('');

  const token =JSON.parse(localStorage.getItem('token')) 
  const handleRoleChange = async () => {
    try {
      const headers = {
        token: token,
      };
      
      const response = await axios.put('https://gifted-tights-yak.cyclic.app/change/role', { emailtochange:email, authority }, { headers });
      setMsg(response.data.msg);
    } catch (error) {
      //console.log(error);
      setMsg(error.response.data.msg);
    }
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Change User Role</h1>
      <input
        type="email"
        placeholder="User Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={inputStyle}
      />
      <select
        value={authority}
        onChange={(e) => setAuthority(e.target.value)}
        style={selectStyle}
      >
        <option value="seller">Seller</option>
        <option value="user">User</option>
        <option value="Admin">Admin</option>
        <option value="superadmin">Superadmin</option>
      </select>
      <button style={buttonStyle} onClick={handleRoleChange}>
        Change Role
      </button>
      <p style={msgStyle}>{msg}</p>
    </div>
  );
};

const containerStyle = {
  textAlign: 'center',
  padding: '20px',
};

const headingStyle = {
  fontSize: '24px',
  marginBottom: '10px',
};

const inputStyle = {
  padding: '8px',
  marginBottom: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const selectStyle = {
  padding: '8px',
  marginBottom: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  padding: '10px 20px',
  background: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const msgStyle = {
  fontSize: '16px',
  color: '#f00',
};

export default ChangeUserRole;
