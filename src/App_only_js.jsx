import { useState } from 'react'


function App() {
  let length=35
  let numbers=false
  let characters=false
  const passwordGenerator=function(length,numbers,characters){
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numbers){
      str+="1234567890"
    }
    if(characters){
      str+="!@#$%^&*(){}?/|-<>,."
    }
    for (let i=1; i<=length; i++) {
      let char=Math.floor(Math.random() * str.length + 1)
      pass+=str.charAt(char)      
    }
    return pass
  }
  return (
    <div className='h-screen w-screen bg-black py-18'>
      <div className='bg-gray-700 w-fit mx-auto px-4 py-2 rounded-md'>
          <label htmlFor="random_password" className='flex py-2'>
            <input className='border border-gray-500 rounded-l-md bg-white py-0.5 w-100 px-4' type="text" name='password'    id="password" placeholder='Password' readOnly/>
            <button className='bg-blue-600 text-white rounded-r-md px-2 py-0.5'>copy</button>
          </label>


          <div className='flex justify-left gap-3 py-2'>

            <label className='flex items-center gap-1' htmlFor="length">
              <input className='w-35' type="range" name="length" id="length" min="8" max="40" onChange={function(e){
                length=e.target.value
                document.querySelector("#password").value=passwordGenerator(length,numbers,characters)
              }}/>
              <span className='text-orange-600 font-sans text-sm'>Length({length})</span>
            </label>

            <label className='flex items-center gap-1' htmlFor="numbers">
              <input type="checkbox" name="numbers" id="numbers" value="numbers"  onChange={function(e){
                document.querySelector("#numbers").checked=e.target.checked
                numbers=e.target.checked
                document.querySelector("#password").value=passwordGenerator(length,numbers,characters)
              }}/>
              <span className='text-orange-600 font-sans text-sm'>Numbers</span>
            </label>

            <label className='flex items-center gap-1' htmlFor="characters">
              <input type="checkbox" name="characters" id="characters" value="characters" onChange={function(e){
                document.querySelector("#characters").checked=e.target.checked
                characters=e.target.checked
                document.querySelector("#password").value=passwordGenerator(length,numbers,characters)
              }}/>
              <span className='text-orange-600 font-sans text-sm'>Characters</span>
            </label>
          </div>
      </div>

    </div>
  )
}

export default App
