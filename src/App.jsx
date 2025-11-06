import './App.css'
import { useState } from 'react'
import Welcome from './components/Welcome'
import Home from './components/Home'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <Home userName="Gnanesh" onLogout={handleLogout} />
      ) : (
        <Welcome onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  )
}

export default App
