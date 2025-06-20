import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';

const baseURL = import.meta.env.VITE_API_BASE_URL;

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', dob: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [messageType, setMessageType] = useState(''); // success or error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseURL}/auth/register`, form, { withCredentials: true });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      showMessage('Registration successful!', 'success');
      setTimeout(() => navigate('/dashboard'), 2000);
    } catch (err) {
      showMessage(err.response?.data?.message || 'Registration failed', 'error');
    }
  };

  const showMessage = (msg, type) => {
    setMessage(msg);
    setMessageType(type);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000); // hide after 2 seconds
  };

  return (
    <div className="form-container">
      {showPopup && (
        <div className={`popup-message ${messageType}`}>
          {message}
        </div>
      )}
      <form className="form-card" onSubmit={handleRegister}>
        <h2>REGISTER</h2>
        <input name="name" type="text" placeholder="Full Name" onChange={handleChange} required />
        <input name="dob" type="date" placeholder="Date of Birth" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">REGISTER</button>
        <p>
          Already have an account? <a href="/login">Login here</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
