import React, { useState } from 'react'
import './App.css'
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";

const App = () => {

   const [turn, setTurn] = useState('X');
   const [noOfTurns, setNoOfTurns] = useState(9);

   const makeTurn = (e) => {
      const blockValue = e.target.value;
      if (blockValue !== 'X' && blockValue !== 'O') {
         e.target.value = turn;
         setNoOfTurns(noOfTurns - 1);
      }
   }

   return (
      <div className='w-screen h-screen flex flex-col justify-between'>

         {/* Header */}
         <div className='w-full h-[10%] bg-pink-400 grid place-items-center text-4xl font-mono text-green-800'>
            Tic Tac Toe
         </div>


         {/* Actual body */}
         <div className='h-full bg-slate-400 flex flex-col justify-start items-center'>

            <div className=' flex flex-col'>
               <div className='text-center mt-4 text-3xl font-serif'>
                  Turn for
               </div>

               <div className='flex mx-auto border-2 text-4xl mt-1'>
                  <div className={`${turn === 'X' ? 'bg-blue-500' : ''} border-r px-3 py-1`}>
                     X
                  </div>
                  <div className={`${turn === 'O' ? 'bg-blue-500' : ''} border-r px-3 py-1`}>
                     O
                  </div>
               </div>
            </div>

            <div className='flex border-2 cursor-pointer justify-center mt-20 text-7xl font-extralight'>
               <div>
                  <div
                     className='border p-5'
                     onClick={makeTurn}
                  ></div>
                  <div
                     className='border p-5'
                     onClick={makeTurn}
                  ></div>
                  <div
                     className='border p-5'
                     onClick={makeTurn}
                  ></div>
               </div>

               <div>
                  <div
                     className='border p-5'
                     onClick={makeTurn}
                  ></div>
                  <div
                     className='border p-5'
                     onClick={makeTurn}
                  ></div>
                  <div
                     className='border p-5'
                     onClick={makeTurn}>

                  </div>
               </div>

               <div>
                  <div
                     className='border p-5'
                     onClick={makeTurn}
                  ></div>
                  <div
                     className='border p-5'
                     onClick={makeTurn}
                  ></div>
                  <div
                     className='border p-5'
                     onClick={makeTurn}
                  ></div>
               </div>
            </div>

         </div>

         {/* Footer */}
         <div className='w-full h-[10%] bg-blue-400 text-center pt-3'>
            <div className='text-center text-lg font-semibold'>Follow Us on </div>
            <div className='text-center flex gap-x-2 justify-center items-center text-xl'>
               <FaInstagram className='cursor-pointer' />
               <SiFacebook className='cursor-pointer' />
               <FaLinkedin className='cursor-pointer' />
            </div>
         </div>

      </div>
   )
}

export default App