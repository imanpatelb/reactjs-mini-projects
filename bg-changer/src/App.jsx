import React, { useState } from 'react';

function App() {

  const [color, setColor] = useState("black");

  return (
    <>
       
      <div className="bg-slate-600 w-full h-screen duration-500"style={{background: color}}>
      <div className="bg-gray-300 w-full flex gap-2 justify-between p-5 rounded-4xl font-sans font-medium ">
        <button className="rounded-xl bg-green-600 p-2 text-stone-200" onClick={() => setColor('green')}>Green</button>
        <button className="rounded-xl bg-blue-600 p-2 text-stone-200" onClick={() => setColor('blue')}>Blue</button>
        <button className="rounded-xl bg-red-600 p-2 text-stone-200" onClick={() => setColor('red')}>Red</button>
        <button className="rounded-xl bg-gray-600 p-2 text-stone-200" onClick={() => setColor('gray')}>Gray</button>
        <button className="rounded-xl bg-pink-600 p-2 text-stone-200" onClick={() => setColor('pink')}>Pink</button>
        <button className="rounded-xl bg-yellow-600 p-2 text-stone-200" onClick={() => setColor('yellow')}>Yellow</button>
        <button className="rounded-xl bg-violet-600 p-2 text-stone-200" onClick={() => setColor('violet')}>Biolet</button>
      </div> 
      </div>
    </>
    
  )
}

export default App;