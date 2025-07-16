import React, { useState } from 'react'

const Form = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)

    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)

    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log({
            username: username,
            password: password
        })
    }


  return (
    <div className='min-h-screen w-full flex items-center justify-center bg-black text-white'>
        <form className='min-w-xl h-auto p-4 shadow-md rounded-lg flex flex-col gap-5'>
            <h2 className='text-xl text-center uppercase'>Collect User Info</h2>
            <input value={username} onChange={handleUsernameChange} type="text" placeholder='Enter Username' className='p-2 ring-1 ring-slate-300 rounded-md' />
            <input value={password} onChange={handlePasswordChange} type="password" placeholder='Enter Password' className='p-2 ring-1 ring-slate-300 rounded-md' />

            <button onClick={handleSubmit} className='bg-blue-500 hover:bg-blue-400 py-2 px-4 rounded-md text-white text-sm'>Submit</button>

        </form>
    </div>

    

    
  )
}

export default Form



// ANOTHER WAY OF THE SHORTCUT INSTEAD OF WRITING TOO MUCH FUNCTION

// import React, { useState } from 'react'

// const Form = () => {
//     const [username, setUsername] = useState("")
//     const [password, setPassword] = useState("")

    
//     const handleSubmit = (e) =>{
//         e.preventDefault()
//         console.log({
//             username: username,
//             password: password
//         })
//     }


//   return (
//     <div className='min-h-screen w-full flex items-center justify-center'>
//         <form className='min-w-xl h-auto p-4 shadow-md rounded-lg flex flex-col gap-5'>
//             <h2 className='text-xl text-center uppercase'>Collect User Info</h2>
//             <input value={username} onChange={(e)=>{setUsername(e.target.value)}} type="text" placeholder='Enter Username' className='p-2 ring-1 ring-slate-300 rounded-md' />
//             <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Enter Password' className='p-2 ring-1 ring-slate-300 rounded-md' />

//             <button onClick={handleSubmit} className='bg-blue-500 hover:bg-blue-400 py-2 px-4 rounded-md text-white text-sm'>Submit</button>

//         </form>
//     </div>

    

    
//   )
// }

// export default Form