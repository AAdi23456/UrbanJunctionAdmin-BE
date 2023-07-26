import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate(); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://gifted-tights-yak.cyclic.app/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        if(data.role==="user"){
            return alert("Not Authorised")
        }
        localStorage.setItem("token", JSON.stringify(data.token));
        localStorage.setItem("role", JSON.stringify(data.role));
        setErrorMsg('');
        navigate('/dashboard');
      } else {
        setErrorMsg(data.msg);
      }
    } catch (error) {
      setErrorMsg("Failed to login. Please try again later.");
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5', margin: 0, padding: 0 }}>
      <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff' }}>
        <h1 style={{ textAlign: 'center' }}>Login</h1>
        <form onSubmit={handleSubmit}>
          <label style={{ display: 'block', marginBottom: '5px' }} htmlFor="email">Email:</label>
          <input  id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '16px' }} required />

          <label style={{ display: 'block', marginBottom: '5px' }} htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '16px' }} required />

          <button type="submit" style={{ width: '100%', padding: '10px', border: 'none', borderRadius: '3px', color: '#fff', backgroundColor: '#007bff', fontSize: '16px', cursor: 'pointer' }}>Login</button>
        </form>
        {errorMsg && <p style={{ color: 'red', marginTop: '-15px', marginBottom: '15px' }}>{errorMsg}</p>}
      </div>
    </div>
  );
};

export default LoginForm;
