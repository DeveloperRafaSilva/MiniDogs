import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
const Logout = () => {
  const navigate = useNavigate();
  function logout() {
    navigate('/');
  }
  return (
    <div>
      <span onClick={logout}></span>
    </div>
  );
};

export default Logout;
