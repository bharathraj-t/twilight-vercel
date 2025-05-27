import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [page, setPage] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://your-api-url.com/login', {
        username,
        password
      });
      const { role } = response.data;
      if (role === 'user') {
        setPage('harryPotter');
      } else if (role === 'admin') {
        setPage('admin');
      }
    } catch (error) {
      alert('Login failed. Check your username and password.');
    }
  };

  if (page === 'harryPotter') {
    return <h1>📚 Welcome to the Harry Potter Book Page!</h1>;
  }

  if (page === 'admin') {
    return <h1>🛠️ Welcome Admin! You can now manage the web app structure.</h1>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Login to Twilight IT Solutions</h2>
      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br /><br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;
