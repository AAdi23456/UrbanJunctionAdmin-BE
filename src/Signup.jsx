import React, { useState } from 'react';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const role = 'seller'; // Role is fixed as 'seller'

  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://gifted-tights-yak.cyclic.app/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMsg(data.msg);
        setErrorMsg('');
        setName('');
        setEmail('');
        setPassword('');
      } else {
        setErrorMsg(data.msg);
        setSuccessMsg('');
      }
    } catch (error) {
      setErrorMsg("Failed to register. Please try again later.");
      setSuccessMsg('');
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5', margin: 0, padding: 0 }}>
      <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff' }}>
        <h1 style={{ textAlign: 'center' }}>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label style={{ display: 'block', marginBottom: '5px' }} htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '16px' }} required />

          <label style={{ display: 'block', marginBottom: '5px' }} htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '16px' }} required />

          <label style={{ display: 'block', marginBottom: '5px' }} htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '16px' }} required />

          <input type="hidden" id="role" name="role" value={role} />

          <button type="submit" style={{ width: '100%', padding: '10px', border: 'none', borderRadius: '3px', color: '#fff', backgroundColor: '#007bff', fontSize: '16px', cursor: 'pointer' }}>Register</button>
        </form>
        {errorMsg && <p style={{ color: 'red', marginTop: '-15px', marginBottom: '15px' }}>{errorMsg}</p>}
        {successMsg && <p style={{ color: 'green', marginTop: '-15px', marginBottom: '15px' }}>{successMsg}</p>}
      </div>
    </div>
  );
};

export default SignupForm;
