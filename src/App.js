import './App.css';
import './index.css';
import React, { useState } from 'react';

function App() {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

  const calcBmi = (event) => {
    event.preventDefault()

    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let bmi = (weight / (height * height) * 703)
      setBmi(bmi.toFixed(1))

      if (bmi < 18.5) {
        setMessage('You are underweight')
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage('You are healthy weight')
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('You are overweight')
      } else {
        setMessage('You are obesity')
      }
    }
  }

  let reload = () => {
    window.location.reload()
  }


  return (
    <div className='flex flex-row justify-center items-center w-full h-full'>
      <div className='border-8 mt-10 rounded-lg p-28'>
        <h2 className='text-center mt-2 mb-14 font-bold'>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>
              Weight (lbs)
            </label>
            <br />
            <input className='border-2 border-black' type='text' placeholder='Enter height value' value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>
              Height (in)
            </label>
            <br />
            <input className='border-2 border-black' type='text' placeholder='Enter height value' value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>
          <div>
            <button className='block w-full text-xl py-2 px-4 mt-4 bg-blue-700 decoration-black border border-black  text-white rounded-lg cursor-pointer font-bold' type='submit'>Submit</button>

            <button className='block w-full text-xl py-2 px-4 mt-4 bg-slate-300 decoration-black border border-black rounded-lg cursor-pointer font-bold' onClick={reload} type='submit'>Reload</button>
          </div>
        </form>

        <div className='text-center mt-6'>
          <h3>Your BMI is: {bmi}</h3>
          <p className='mt-2'>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
