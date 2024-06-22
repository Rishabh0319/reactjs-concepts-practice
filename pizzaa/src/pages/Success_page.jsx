import React,{ useState, useEffect } from 'react';
import {PropagateLoader} from 'react-spinners';

const Success_page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
     setTimeout(()=>{
       setLoading(false);
     },3000)
  },[])

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      {
        loading ? <PropagateLoader color='#36d7b7'/> : <><h2 className='text-3xl font-semibold mb-4 text-green-500'>Order Successful!</h2>
      <p className='text-orange-500'>Your order has been successfully placed</p></>
      }
    </div>
  )
}

export default Success_page;