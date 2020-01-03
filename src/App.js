import React from 'react';
import './App.css';
import Nav from './Components /Nav/Nav';
import routes from './routes';
import Auth from './Components /Auth/Auth'

function App() {
  return (
    <div className="App">
      <Nav>
      </Nav>  
      <Auth/>
    </div>
  );
}

export default App;
