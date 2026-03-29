import React, { useState } from 'react'

const App = () => {
  
  const [Title, setTitle] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(Title);

    setTitle('')
    
  }
  
  return (
  
  <div className='h-screen lg:flex bg-black text-white'> 
  <form onSubmit = {(e) => {
    submitHandler(e)
   }}
   className='flex gap-4 lg:w-1/2 p-10 flex-col items-start'>

    <h1 className='text-4xl mb-2 font-bold'>Add Notes</h1> 
    <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 w-full font-medium py-2 border-2 outline-none rounded '
          value = {Title}
          onChange={(e) => {
            setTitle(e.target.value);
            
          }}
        />

        <textarea
          type="text"
          className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none  rounded '
          placeholder='Write Details here'
        />

        <button
          className='bg-white active:scale-95 font-medium w-full outline-none  text-black px-5 py-2 rounded'
        >
          Add Note
        </button>

  </form>

   <div className='lg:w-1/2 lg:border-l-2  p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
        </div>
       </div>
      </div> 
   
          
            
        
  )
}

export default App