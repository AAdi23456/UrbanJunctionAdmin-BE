import React, { useState, useEffect } from 'react';
import axios from 'axios';

const token =JSON.parse(localStorage.getItem("token"))
const MenProducts = () => {
  const [products, setProducts] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const headers = {
        token: token,
      };
      try {
        const response = await axios.get('https://gifted-tights-yak.cyclic.app/products/seller', { headers });
        setProducts(response.data);
        console.log(response);
if(response.data.msg){
  setErrorMsg(response.data.msg);
}
      } catch (error) {
        console.log(error);
        setErrorMsg('Something went wrong, please try again later.');
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    const headers = {
      token: token,
    };
    try {
    
      const response = await axios.delete(`https://gifted-tights-yak.cyclic.app/product/deleteone/${id}`, { headers });
      console.log(response.data);
      setProducts(products.filter(product => product._id !== id));
    } catch (error) {
      console.log('Delete error:', error);
    }
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Men's Products</h1>
      {errorMsg && <p style={errorStyle}>{errorMsg}</p>}
      {products.length > 0 ? (
        <ul style={listStyle}>
          {products.map((product) => (
            <li key={product._id} style={itemStyle}>
              <img src={product.img} alt={product.title} style={imageStyle} />
              <div style={detailsStyle}>
                <h2>{product.title}</h2>
                <p>Brand: {product.brand}</p>
                <p>Price: {product.price}</p>
                <p>Colour: {product.colour}</p>
                <p>Category: {product.category}</p>
                <p>Email: {product.email}</p>
                <div style={buttonContainerStyle}>
                  <button style={buttonStyle} onClick={() => handleDelete(product._id)}>Delete</button>
                 
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p style={emptyStyle}>No  products found.</p>
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

const errorStyle = {
  fontSize: '16px',
  color: '#f00',
};

const listStyle = {
  listStyleType: 'none',
  padding: '0',
};

const itemStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '20px',
};

const imageStyle = {
  width: '150px',
  height: '150px',
  marginRight: '20px',
};

const detailsStyle = {
  textAlign: 'left',
};

const emptyStyle = {
  fontSize: '18px',
  color: '#999',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '10px',
};

const buttonStyle = {
  padding: '8px 12px',
  background: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default MenProducts;
