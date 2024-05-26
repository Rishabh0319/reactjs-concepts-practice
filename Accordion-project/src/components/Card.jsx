import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
// setIsCardOpen
const Card = ({id, title, info, openCardId, setIdOfOpenCard }) => {

    const [cardOpen, setCardOpen] = useState(false);
    console.log(openCardId);
    const clickOnCard = ()=> {
        setCardOpen((prev) => !prev)
        setIdOfOpenCard(id);
    }

    useEffect(()=>{
        if(openCardId){
           setCardOpen(openCardId === id);
        }
    },[id,openCardId]);

    return (
        <main className='border border-gray-400 w-[100%] flex flex-col justify-between items-center rounded-md overflow-hidden mb-5'>
            <section className='w-[100%] flex justify-between items-center py-4 px-2'>
                <h4 className='text-2xl font-bold'>{title}</h4>
                <span onClick={clickOnCard} className='h-9 w-9 flex justify-center items-center cursor-pointer'>
                    <ion-icon size="large" name="add-circle-outline"></ion-icon>
                </span>
            </section>
            {
                cardOpen && <section className='flex items-center justify-start px-2'>
                    <p className='text-xl mb-3'>{info}</p>
                </section>
            }
        </main>
    )
}

export default Card