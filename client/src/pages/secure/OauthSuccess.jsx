// src/pages/OauthSuccess.jsx

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OauthSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (token) {
      localStorage.setItem('token', token);
      navigate('/main');
    } else {
      navigate('/login');
    }
  }, [navigate]);

  return null;
};

export default OauthSuccess;
