import React, { useState } from 'react'

const App = () => {
  
  const [Title, setTitle] = useState('')
  const [Detail, setDetail] = useState('')
  const [Task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    
    if (Title.trim() === '') {
    alert("Title cannot be empty")
    return
  }


    const copyTask = [...Task]
    copyTask.push({Title, Detail})
    setTask(copyTask)
    
    setTitle('')
    setDetail('')
    
  }

  const deleteTask = (idx) => {
    
    const copyTask = [...Task]
    copyTask.splice(idx,1)
    setTask(copyTask)
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
          value = {Detail}
          onChange={(e) => {
            setDetail(e.target.value)
          }}
        />

        <button
          className='bg-white active:scale-95 cursor-pointer font-medium w-full outline-none  text-black px-5 py-2 rounded'
        >
          Add Note
        </button>

  </form>

   <div className='lg:w-1/2 lg:border-l-2  p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>
          {Task.map(function(elem, idx){
            return <div key = {idx} className= "flex justify-between flex-col items-start relative h-52 w-40 rounded-xl text-black py-8 px-4 bg-cover bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRScg-F0-n7uC3MnEu_TQl_-7bxIAmE54TlBQ&s')]">
              <div><h1 className='leading-tight text-xl font-bold'>{elem.Title}</h1>
              <p className='mt-2 leading-tight font-medium text-gray-500'>{elem.Detail}</p>
            </div>
            <button onClick={() => deleteTask(idx)} className='w-full cursor-pointer bg-red-500 py-1 text-xs rounded-xl font-bold text-white'>Delete</button>      
        </div>
          })}
        </div>
       </div>
      </div> 
   
          
            
        
  )
}

export default App