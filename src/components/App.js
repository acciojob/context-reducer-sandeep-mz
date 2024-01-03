import React from 'react';
import { UserProvider } from './UserContext';
import ShoppingApp from './ShoppingApp';

function App() {
  return (
    <UserProvider>

      <div className="App">
          <ShoppingApp />
      </div>

    </UserProvider>
  );
}

export default App;
 