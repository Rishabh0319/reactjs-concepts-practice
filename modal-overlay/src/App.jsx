import React, { useState } from 'react';
// import "./App.css"
import Modal from './components/Modal';
import Offer from './components/Offer';

const App = () => {

  const [showButton,setShowButton] = useState(true);
  const [showModal,setShowModal] = useState(false);
  const [showOffer, setShowOffer] = useState(false);

  // console.log("showButton: ",showButton);
  // console.log("showModal: ",showModal);
  // console.log("showOffer: ",showOffer);

  const closeModal = (e)=>{
    if((e.target.className) === "z-0 flex flex-col justify-center items-center h-[100vh] w-full bg-gray-50"){
      setShowButton(true);setShowModal(false);
    }
    if(showOffer){
      setShowButton(false)
    }
  }

  return (
    <div onClick={closeModal} className='z-0 flex flex-col justify-center items-center h-[100vh] w-full bg-gray-50'>
      {showButton && <button onClick={()=>{setShowModal((prev)=>!prev); setShowButton((prev)=>!prev)}} className={`z-[10] bg-gray-200 py-1 px-4 rounded-md border border-gray-400 `}>show Offer</button>}
      {showModal && <Modal setShowButton={setShowButton} setShowModal={setShowModal} setShowOffer={setShowOffer}/>}
      {showOffer && <Offer/>}
    </div>
  )
}

export default App;