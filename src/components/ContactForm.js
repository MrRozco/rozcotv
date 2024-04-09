import React from 'react'

function ContactForm() {
  return (
    <div>
        <form className='flex flex-col p-20 gap-2' >
            <label htmlFor='name'>Name:</label>
            <input className=' border-2 rounded-md' type='text' id='name' name='name' />
            <label htmlFor='email'>Email:</label>
            <input className=' border-2 rounded-md' type='email' id='email' name='email' />
            <label htmlFor='message'>Message:</label>
            <textarea className=' border-2 rounded-md' id='message' name='message'></textarea>
            <button className=' bg-slate-200 rounded-md hover:bg-slate-300 py-2' type='submit'>Send</button>
        </form>
    </div>
  )
}

export default ContactForm