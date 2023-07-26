import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Signup from './signup';
// import Login from './Login';
 import SellerProducts from './products';
 import AddProductForm from './Addproduct';
 import ChangeUserRole from './Changerole'; 
 import UserList from './Userslist';
import JsonFileUpload from './jsonfileupload';
 function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Signup />} /> */}
        <Route path="/add" element={<AddProductForm />} />
        <Route path="/products" element={<SellerProducts />} />
        <Route path="/change/role" element={<ChangeUserRole />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/upload" element={<JsonFileUpload />} />
        {/* <Route path="/messages" element={<Messages />} />
        <Route path="/chat" element={<Chats />} /> */}
      </Routes>
    </Router>
    );
  }
  export default App;