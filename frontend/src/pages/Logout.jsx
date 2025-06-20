import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ Clear Local Storage
    localStorage.clear();

    // ✅ Clear Session Storage
    sessionStorage.clear();

    // ✅ Clear Cookies (only JS-accessible ones)
    document.cookie.split(";").forEach(cookie => {
      document.cookie = cookie
        .replace(/^ +/, "") // Remove leading spaces
        .replace(/=.*/, "=;expires=" + new Date(0).toUTCString() + ";path=/");
    });

    // ✅ Redirect to login page
    navigate("/login");
    window.location.reload();
  }, [navigate]);

  return null; // or a loading spinner
};

export default Logout;
