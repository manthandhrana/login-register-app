import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';


const baseURL = import.meta.env.VITE_API_BASE_URL;

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${baseURL}/auth/login`,
        { email, password },
        { withCredentials: true }
      );
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      showMessage('Login successful!', 'success');

      window.location.href = "/dashboard";
    } catch (err) {
      showMessage(err.response?.data?.message || 'Login failed', 'error');
    }
  };

  const showMessage = (msg, type) => {
    setMessage(msg);
    setMessageType(type);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <div className="form-container">
      {showPopup && (
        <div className={`popup-message ${messageType}`}>
          {message}
        </div>
      )}
      <form className="form-card" onSubmit={handleLogin}>
        <h2>SIGN IN</h2>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">LOGIN</button>
        <p>
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
