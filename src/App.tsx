import { link } from 'fs';
import React from 'react';

import './App.css';


const questions = [
  {
    title: 'В React все является',
    variants:['модулем', 'компонентом', 'пакетом'],
    correct : 1
  },
  // {
  //   title: 'В React все является',
  //   variants:['модулем', 'компонентом', 'пакетом'],
  //   correct : 1
  // },
  // {
  //   title: 'В React все является',
  //   variants:['модулем', 'компонентом', 'пакетом'],
  //   correct : 1
  // },
]

function App() {

  const question = questions[0]
  return (
    <div className="App">
      <div className="box">
        <div className="progress">
          <div style={{width:'20%'}} className='progress-bar'></div>
        </div>

        <h2 className='title'> {question.title} ?</h2>
        <ul>
          {question.variants.map(text => <li>{text}</li>)}
          {/* <li>модулем</li>
          <li>компонентом</li>
          <li>пакетом</li> */}
        </ul>
      </div>
    </div>
  );
}

export default App;
