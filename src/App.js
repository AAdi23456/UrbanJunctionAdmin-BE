import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import SellerProducts from './products';
 import AddProductForm from './Addproduct';
 import ChangeUserRole from './Changerole'; 
 import UserList from './Userslist';
import JsonFileUpload from './jsonfileupload';
import SignupForm from './Signup';
import LoginForm from './login';
import Dashboard from './Dashboard';
import Logout from './logout';
 function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/add" element={<AddProductForm />} />
        <Route path="/products" element={<SellerProducts />} />
        <Route path="/change/role" element={<ChangeUserRole />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/upload" element={<JsonFileUpload />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/logout" element={<Logout />} />
       
      </Routes>
    </Router>
    );
  }
  export default App;