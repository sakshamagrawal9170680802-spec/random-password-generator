import { useState,useEffect,useCallback,useRef } from 'react'


function App() {
  let [length,setLength]=useState(8)
  let [numbers,setNumbers]=useState(false)
  let [characters,setCharacters]=useState(false)
  let [password,setPassword]=useState("")

  const passwordGenerator=useCallback(function(){
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
  },[length,numbers,characters])

  //note callback is just a way of writng a function with help of hook it is more practiced approach that why it is used but using directly function is also no problem at all any where in place of direct function useCallback() can be used


  // const passwordGenerator=function(length,numbers,characters){
  //   let pass=""
  //   let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  //   if(numbers){
  //     str+="1234567890"
  //   }
  //   if(characters){
  //     str+="!@#$%^&*(){}?/|-<>,."
  //   }
  //   for (let i=1; i<=length; i++) {
  //     let char=Math.floor(Math.random() * str.length + 1)
  //     pass+=str.charAt(char)      
  //   }
  //   return pass
  // }
  useEffect(function(){
    // let randomPassword=passwordGenerator(length,numbers,characters)
    let randomPassword=passwordGenerator()
    setPassword(randomPassword)

  },[length,numbers,characters])


  //useRef is used to store reference of certain element
  const passwordRef=useRef(null) 
  const copyPassword=useCallback(function(){
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <div className='h-screen w-screen bg-black py-18'>
      <div className='bg-gray-700 w-fit mx-auto px-4 py-2 rounded-md'>
          <label htmlFor="random_password" className='flex py-2'>
            <input className='border border-gray-500 rounded-l-md bg-white py-0.5 w-100 px-4 font-sans text-orange-600 focus:outline-none' type="text" name='password'    id="password" placeholder='Password' value={password} readOnly ref={passwordRef}/>
            <button 
            className='bg-blue-600 text-white rounded-r-md px-2 py-0.5 active:bg-blue-900 active:shadow-[0_10px_15px_-5px_rgba(0,0,0,0.35)] hover:bg-blue-800' onClick={copyPassword}>copy</button>
          </label>
          {/* buttons have active and onclick while input tag have onchange */}

          <div className='flex justify-left gap-3 py-2'>

            <label className='flex items-center gap-1' htmlFor="length">
              <input className='w-35' type="range" name="length" id="length" min="8" max="40" value={length} onChange={function(e){
                setLength(e.target.value)
              }}/>
              <span className='text-orange-600 font-sans text-sm'>Length({length})</span>
            </label>

            <label className='flex items-center gap-1' htmlFor="numbers">
              <input type="checkbox" name="numbers" id="numbers" checked={numbers}  onChange={function(e){
                setNumbers(e.target.checked)
              }}/>
              <span className='text-orange-600 font-sans text-sm'>Numbers</span>
            </label>

            <label className='flex items-center gap-1' htmlFor="characters">
              <input type="checkbox" name="characters" id="characters" value="characters" checked={characters} onChange={function(e){
                setCharacters(e.target.checked)
              }}/>
              <span className='text-orange-600 font-sans text-sm'>Characters</span>
            </label>
          </div>
      </div>

    </div>
  )
}

export default App
