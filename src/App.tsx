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
    title: 'Какой метод отвечает за вывод информации через React JS компонент',
    variants: ['console', 'render', 'react'],
    correct: 1
  },
  {
    title: 'Сколько родительских HTML тегов может быть выведено в React JS компоненте',
    variants: ['один', 'два', 'три'],
    correct: 0
  },
  {
    title: 'Где правильно выведен компонент через рендер',
    variants: ['</BlaBla>', '<BlaBla>', '<BlaBla/>'],
    correct: 2
  },
  {
    title: 'Как много компонентов может быть на сайте',
    variants: ['не более 10', 'не более 100', 'неограниченное количество'],
    correct: 2
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

                <div className='img'>
                  <img width={100} src="/confetti.svg" alt="" />
                </div>

                <a href='./' className='button'>
                  <button className='btn'>Еще раз</button>
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
