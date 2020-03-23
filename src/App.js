import React from 'react';
import './App.css';

import Header from './components/header/header.component';
import ItemList from './components/item-list/item-list.component';

function App() {
  return (
    <div className="App">
      <Header />
      <ItemList />
    </div>
  );
}

export default App;
