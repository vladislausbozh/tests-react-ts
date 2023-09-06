import React from 'react';

import './App.css';

const questions = [
  {

  }
]

function App() {
  return (
    <div className="App">
      <div className="box">
        <div className="progress">
          <div style={{width:'20%'}} className='progress-bar'></div>
        </div>

        <h2 className='title'> В React все является ?</h2>
        <ul>
          <li>модулем</li>
          <li>компонентом</li>
          <li>пакетом</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
