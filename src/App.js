import React, { useState } from 'react';
import styled from 'styled-components';
import { AccountBox } from './components/accountBox';
import Dashboard from './components/Dashboard/dashboard';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    // Simulate login logic
    setAuthenticated(true);
  };

  const handleLogout = () => {
    // Perform logout logic
    // If logout is successful, setAuthenticated(false);
    setAuthenticated(false);
  };

  return (
    <AppContainer>
      {authenticated ? (
        <Dashboard onLogout={handleLogout} />
      ) : (
        <AccountBox onLogin={handleLogin} />
      )}
    </AppContainer>
  );
}

export default App;
