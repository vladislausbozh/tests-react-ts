import { link } from 'fs';
import React, { useState } from 'react';

import './App.css';


const questions = [
  {
    title: 'В React все является',
    variants: ['модулем', 'компонентом', 'пакетом'],
    correct: 1
  },
  {
    title: 'В React все является2',
    variants: ['модулем', 'компонентом', 'пакетом'],
    correct: 1
  },
  {
    title: 'В React все является3',
    variants: ['модулем', 'компонентом', 'пакетом'],
    correct: 1
  },
]

function App() {

  const [step, setStep] = useState(0)
  const [result, setResult] = useState(0)

  const question = questions[step]
  

  const onClickVariant = (index: number) => {
    
    setStep(step + 1)
    if(index === question.correct) {
      setResult(result + 1)
    }
  }

  console.log(result)

  const percentage = Math.round((step / questions.length) * 100)


  return (
    <div className="App">
      <div className="box">
        <div>
          {step !== questions.length ? (
            <>
              <div className="progress">
                <div style={{ width: `${percentage}%` }} className='progress-bar'></div>
              </div>

              <h2 className='title'> {question.title} ?</h2>
              <ul>
                {question.variants.map((text, index) =>
                  <li onClick={() => onClickVariant(index)} key={text}>{text}</li>)
                }
              </ul>
            </>
          ) : (
            <>
              <div className='result'>
                <h2 className='title'>Вы правильно ответели на {result} из {questions.length} </h2>

                <div>
                  <img width={100} src="/confetti.svg" alt="" />
                </div>

                <a href='./' className='button'>
                  <button className='btn'>Еше раз</button>
                </a>
              </div>
            </>
          )}

        </div>



      </div>
      <div>

      </div>
    </div>
  );
}

export default App;
