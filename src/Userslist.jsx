import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const UserList = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [users, setUsers] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const token =JSON.parse(localStorage.getItem("token"))
  const fetchUsers = useCallback(async () => {
    try {
      const headers = {
        token: token,
      };
      const response = await axios.get('https://gifted-tights-yak.cyclic.app/users/get', { params: { email, name, role }, headers });
      setUsers(response.data);
    } catch (error) {
      setErrorMsg(error.response.data.msg);
    }
  }, [email, name, role, token]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

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

  const selectStyle = {
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

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  };

  const cardStyle = {
    padding: '15px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    border: '1px solid #ccc',
    textAlign: 'left',
  };

  const cardTitleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const emptyStyle = {
    fontSize: '18px',
    color: '#999',
  };

  const handleBlockUser = async (userEmail, isBlock) => {
    try {
      const headers = {
        token: token,
      };
      await axios.put(
        'https://gifted-tights-yak.cyclic.app/block/user',
        { useremail: userEmail, isblock: isBlock },
        { headers }
      );
      
      fetchUsers();
    } catch (error) {
      setErrorMsg(error.response.data.msg);
    }
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
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={selectStyle}
        >
          <option value="">All Roles</option>
          <option value="seller">Seller</option>
          <option value="user">User</option>
          <option value="Admin">Admin</option>
          <option value="superadmin">Superadmin</option>
        </select>
        <button style={buttonStyle} onClick={fetchUsers}>
          Search
        </button>
      </div>
      {errorMsg && <p style={errorStyle}>{errorMsg}</p>}
      <div style={gridContainerStyle}>
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user._id} style={cardStyle}>
              <p style={cardTitleStyle}>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Role: {user.role}</p>
              {user.Blocked ? (
                <button
                  style={buttonStyle}
                  onClick={() => handleBlockUser(user.email, false)}
                >
                  Unblock
                </button>
              ) : (
                <button
                  style={buttonStyle}
                  onClick={() => handleBlockUser(user.email, true)}
                >
                  Block
                </button>
              )}
            </div>
          ))
        ) : (
          <p style={emptyStyle}>No users found.</p>
        )}
      </div>
    </div>
  );
};

export default UserList;
