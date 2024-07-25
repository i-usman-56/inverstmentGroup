import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAdmin = () => {
    const navigate = useNavigate()
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const data = sessionStorage.getItem('userData');
    const token = sessionStorage.getItem('token');
      if (!token) {
      navigate('/login');
      return;
    }
    const parsedData = JSON.parse(data)
        if (!parsedData?.role) {
            navigate('/login')
        }
        if (parsedData?.role==='admin') {
            setIsAdmin(true);
    }
  }, []);

  return isAdmin;
};

export default useAdmin;
