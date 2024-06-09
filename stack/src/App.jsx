import React from 'react';
import { useState } from 'react';

const App = () => {
  const buttons = ["Push", "Pop", "Peek", "IsEmpty", "IsFull"];
  const [input, setInput] = useState("");
  const [stack, setStack] = useState([]);
  const [showMessage, setShowMessage] = useState("");
  const stackLimit = 10;

  const onButtonPress = (e) => {
    switch (e) {
      case "Push": push();
        break;
      case "Pop": pop();
        break;
      case "Peek": peek();
        break;
      case "IsEmpty": isEmpty();
        break;
      case "IsFull": isFull();
        break;
      default: return;
    }
  }

  const push = () => {
    if (input === "") {
      setShowMessage("Enter a Value");
      return;
    }
    if (stack.length === stackLimit) {
      setShowMessage("Stack is Full");
      return;
    }
    setStack([...stack, input]);
    setShowMessage(`${input} is pushed into Stack`);
    setInput("");
  }

  const pop = () => {
    if (!stack.length) {
      setShowMessage("Stack is empty");
      return;
    }
    setStack(stack.slice(0, -1));
    setShowMessage(`${stack[stack.length - 1]} is popped from the Stack `);
  }

  const peek = () => {
    if (!stack.length) {
      setShowMessage("Stack is empty");
      return;
    } else {
      const lastElement = stack[stack.length - 1];
      setShowMessage(`Last element is ${lastElement}`);
    }
  }

  const isEmpty = () => {
    if (!stack.length) {
      setShowMessage("Stack is empty");
      return;
    } else {
      setShowMessage('Stack is not empty');
    }
  }

  const isFull = () => {
    if (stack.length === stackLimit) {
      setShowMessage("Stack is full");
      return;
    } else {
      setShowMessage('Stack is not full');
    }
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl m-4 font-bold'>Stack</h1>
      <div className='border border-gray-400 rounded-md w-1/3 p-4'>
        <section className='flex flex-col items-center justify-between'>
          <div className='w-full flex justify-center items-center'>
            <input type="text" onChange={(e) => setInput(e.target.value)} value={input} placeholder='Enter a value' className='py-2 px-1 border border-gray-400 w-full rounded-md' />
          </div>
          <div className='border border-b-gray-300 mt-2 py-4 w-full flex items-center justify-evenly'>
            {
              buttons.map((button, index) => <button onClick={() => onButtonPress(button)} className='px-4 py-1 rounded-sm bg-[#007BFF] text-white hover:bg-[#0056B3]' key={index}>{button}</button>)
            }
          </div>
        </section>
        <section>
          {showMessage &&
            <div className='flex justify-center items-center py-2'>
              <p className='text-2xl font-bold'>{showMessage}</p>
            </div>
          }
          {
            stack.length != 0 && <div className='flex flex-col items-center justify-start mt-3'>
              {
                stack.slice().reverse().map((item, index) => <div key={index} className='flex items-center justify-center w-full p-1 mb-3 bg-blue-200 rounded-sm text-xl'>{item}</div>)
              }
            </div>
          }
        </section>
      </div>
    </div>
  )
}

export default App;