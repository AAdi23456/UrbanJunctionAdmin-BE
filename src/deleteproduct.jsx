import React, { useState } from 'react';
import axios from 'axios';

const DeleteProduct = () => {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`https://gifted-tights-yak.cyclic.app/product/deleteone/${id}`, {
        data: { email },
      });
      setMsg(response.data.msg);
    } catch (error) {
      setMsg('Something went wrong, please try again later.');
    }
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Delete Product</h1>
      <input
        type="text"
        placeholder="Product ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={inputStyle}
      />
      <button style={buttonStyle} onClick={handleDelete}>
        Delete Product
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

export default DeleteProduct;
