import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const token = JSON.parse(localStorage.getItem("token"))
const JsonFileUpload = () => {
  const navigate = useNavigate();
  const [jsonData, setJsonData] = useState(null);
  const [category, setCategory] = useState('');

  const handleFileChange = (event) => {

    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = handleFileRead;
      reader.readAsText(file);
    }
  };

  const handleFileRead = (event) => {
    const content = event.target.result;
    try {
      const parsedData = JSON.parse(content);
      console.log(parsedData);
      setJsonData(parsedData);
    } catch (error) {
      console.error('Error parsing JSON file:', error);
    }
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      if (!jsonData) {
        return;
      }


      const Data = jsonData;
      const headers = {
        token: token
      }
      console.log(headers)
      const data = {
        category,
        Data
      };
      const response = await axios.post('https://gifted-tights-yak.cyclic.app/Products/add', data, {
        headers: headers,
      });

      console.log(response.data);
      navigate("/products")
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Upload JSON File</h1>
      <input type="file" accept=".json" onChange={handleFileChange} style={fileInputStyle} />
      <select value={category} onChange={handleCategoryChange} style={selectStyle}>
        <option value="">Select Category</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="kids">Kids</option>
      </select>
      {jsonData ? (
        <div>
          <pre style={jsonPreviewStyle}>{JSON.stringify(jsonData, null, 2)}</pre>
          <button style={submitButtonStyle} onClick={handleSubmit}>
            Submit Data
          </button>
        </div>
      ) : (
        <p style={noDataStyle}>No JSON data uploaded yet.</p>
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
  marginBottom: '20px',
};

const fileInputStyle = {
  marginBottom: '10px',
};

const selectStyle = {
  padding: '8px',
  marginBottom: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const jsonPreviewStyle = {
  whiteSpace: 'pre-wrap',
  fontFamily: 'monospace',
  textAlign: 'left',
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '10px',
};

const submitButtonStyle = {
  padding: '8px 12px',
  background: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const noDataStyle = {
  color: '#999',
};

export default JsonFileUpload;
