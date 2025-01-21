import React, { useEffect, useState } from 'react'
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";

const App = () => {

   const [noOfTurns, setNoOfTurns] = useState(9);
   const [winner, setWinner] = useState("");
   const [turn, setTurn] = useState('X');

   const [grid, setGrid] = useState(["", "", "", "", "", "", "", "", ""]);

   const winningWay = [
      // horizontally
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      // vertically
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      // diagonally
      [0, 4, 8],
      [2, 4, 6],
   ];

   const swapTurn = () => {
      if (turn === 'X')
         setTurn('O');
      else
         setTurn('X');
   }

   const resetGame = () => {
      setTurn('X');
      setWinner("");
      setNoOfTurns(9)
      let newGrid = ["", "", "", "", "", "", "", "", ""];
      setGrid(newGrid);
   }

   const makeTurn = (index) => {
      if (noOfTurns === 0 || grid[index] === 'X' || grid[index] === 'O')
         return;

      else {
         let newGrid = [...grid];
         newGrid[index] = turn;
         setGrid(newGrid);
         setNoOfTurns((prevTurn) => prevTurn - 1);
         swapTurn();
      }
   }

   useEffect(() => {
      let winnerFound = false;
      // check Game Over condition
      winningWay.forEach((way) => {
         if ((grid[way[0]] !== "") && (grid[way[0]] === grid[way[1]] && grid[way[1]] === grid[way[2]])) {   
            setWinner(grid[way[0]]);
            winnerFound = true;
            setNoOfTurns(0);
         }
      })

      if (noOfTurns === 0 && winner === "" && !winnerFound)
         setWinner("TIE");

   }, [grid])

   return (
      <div className='w-screen h-screen flex flex-col justify-between'>

         {/* Header */}
         <div className='w-full h-[10%] bg-pink-400 grid place-items-center text-4xl font-mono text-green-800'>
            Tic Tac Toe
         </div>


         {/* Actual body */}
         <div className='h-full bg-slate-400 relative flex flex-col justify-start items-center'>

            <div className='flex flex-col'>
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


            <div className='grid grid-cols-3 text-center text-fuchsia-900 font-serif border-2 shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] 
            cursor-pointer mt-20 text-7xl'>
               {
                  grid.map((value, index) => (
                     <div
                        key={index}
                        className='border p-5 h-[130px] w-[130px]'
                        onClick={() => makeTurn(index)}
                     >
                        {value}
                     </div>
                  ))
               }
            </div>


            {
               winner &&
               <div className='absolute top-[50%] text-9xl right-[6%] animate-bounce text-blue-600'>

                  {
                     winner === "TIE" ?
                        <div className='text-8xl'>Game TiE</div>
                        : <div> {winner} wins!</div>
                  }
               </div>
            }

            {/* Reset Button */}
            {
               noOfTurns === 0 &&
               <div className='absolute top-[88%]'>
                  <button
                     className='bg-red-700 p-4 hover:text-yellow-500 rounded-full text-xl'
                     onClick={resetGame}
                  >
                     Reset Game
                  </button>
               </div>
            }

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