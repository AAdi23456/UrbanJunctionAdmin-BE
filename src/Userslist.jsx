import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG4uZG9lQGV4YW1wbGVjb21obW1tIiwicm9sZSI6InN1cGVyYWRtaW4iLCJpYXQiOjE2OTAzMDQ4NDh9.PIKe6EEBFDxAtUmzt_viDZewRgq1uHPqnoto8I0ZxYI"; // Replace with the actual authentication token

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const headers = {
        token: token,
      };
      const response = await axios.get('https://gifted-tights-yak.cyclic.app/users/get', { params: { email, name }, headers });
      setUsers(response.data);
    } catch (error) {
      setErrorMsg('Something went wrong, please try again later.');
    }
  };

  const handleSearch = () => {
    fetchUsers();
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>User List</h1>
      <div style={searchContainerStyle}>
        <input
          type="text"
          placeholder="Search by Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Search by Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />
        <button style={buttonStyle} onClick={handleSearch}>
          Search
        </button>
      </div>
      {errorMsg && <p style={errorStyle}>{errorMsg}</p>}
      {users.length > 0 ? (
        <ul style={listStyle}>
          {users.map((user) => (
            <li key={user._id} style={itemStyle}>
              <p>Email: {user.email}</p>
              <p>Name: {user.name}</p>
              {/* Add other user details as needed */}
            </li>
          ))}
        </ul>
      ) : (
        <p style={emptyStyle}>No users found.</p>
      )}
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

const searchContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px',
};

const inputStyle = {
  padding: '8px',
  marginRight: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  padding: '8px 12px',
  background: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const errorStyle = {
  fontSize: '16px',
  color: '#f00',
};

const listStyle = {
  listStyleType: 'none',
  padding: '0',
};

const itemStyle = {
  marginBottom: '20px',
};

const emptyStyle = {
  fontSize: '18px',
  color: '#999',
};

export default UserList;
