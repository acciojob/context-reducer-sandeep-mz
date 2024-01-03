import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext';

const ShoppingApp = () => {
  const { currentUser, isAuthenticated, login, signout } = useContext(UserContext);
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const handleRemoveItem = (itemName) => {
    const updatedItems = items.filter((item) => item !== itemName);
    setItems(updatedItems);
  };

  const handleClearList = () => {
    setItems([]);
  };

  return (
    <div>
      <button id="login-btn" onClick={() => login('rohan')}>
        Login
      </button>
      <button id="signout" onClick={signout}>
        Signout
      </button>
      <div id="current-user">
        Current user: {isAuthenticated ? currentUser : ''}, isAuthenticated: {isAuthenticated ? 'Yes' : 'No'}
      </div>
      <input
        type="text"
        id="shopping-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button id="add-button" onClick={handleAddItem}>
        Add
      </button>
      <ul>
        {items.map((item, index) => (
          <li key={`item-${item}-${index}`}>
            {item}
            <button id={`remove-${item}`} onClick={() => handleRemoveItem(item)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button id="clear-list" onClick={handleClearList}>
        Clear
      </button>
    </div>
  );
};

export default ShoppingApp;
