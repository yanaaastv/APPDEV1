import { useState } from 'react';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return showLogin ? (
    <Login onSwitch={() => setShowLogin(false)} />
  ) : (
    <Signup onSwitch={() => setShowLogin(true)} />
  );
}

export default App;
