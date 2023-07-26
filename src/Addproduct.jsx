// src/components/AddProductForm.js
import React, { useState } from 'react';
import axios from 'axios';
const token =JSON.parse(localStorage.getItem("token"))
const AddProductForm = () => {
  const [formData, setFormData] = useState({
    img: '',
    title: '',
    brand: '',
    price: '',
    colour: '',
    category: '',
  
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const headers={
      token:token
    }
    try {
      const response = await axios.post('https://gifted-tights-yak.cyclic.app/Products/add', [formData],{headers});
      console.log(response.data);
      // Reset the form after successful submission
      setFormData({
        img: '',
        title: '',
        brand: '',
        price: '',
        colour: '',
        category: '',
        
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="img"
          placeholder="Image URL"
          value={formData.img}
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={formData.brand}
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="colour"
          placeholder="Colour"
          value={formData.colour}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
        />
       
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;
