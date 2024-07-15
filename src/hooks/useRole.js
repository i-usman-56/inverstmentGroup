import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAdmin = () => {
    const navigate = useNavigate()
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem('userData');
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
