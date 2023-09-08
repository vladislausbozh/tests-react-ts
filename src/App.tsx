import { link } from 'fs';
import React, { useState } from 'react';

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

  const [step,setStep] = useState(0)

  const question = questions[0]

  const onClickVariant = (index:number) => {
    console.log(step,index)
  }

  return (
    <div className="App">
      <div className="box">
        <div className="progress">
          <div style={{width:'20%'}} className='progress-bar'></div>
        </div>

        <h2 className='title'> {question.title} ?</h2>
        <ul>
          {question.variants.map((text,index) => 
            <li onClick={ () => onClickVariant(index)} key={text}>{text}</li>)
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
