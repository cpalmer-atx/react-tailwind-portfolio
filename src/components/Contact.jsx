import Axios from "axios"
import { useState } from "react";

const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const updateName = (e) => {
    setName(e.target.value)
  }

  const updateEmail = (e) => {
    setEmail(e.target.value)
  }

  const updateMessage = (e) => {
    setMessage(e.target.value)
  }

  const submitForm = (e) => {
    e.preventDefault();
    // Sanity check
    console.log({
      name: name,
      email: email,
      msg: message
    });
  }

  return (
    <div name='contact' className="relative container mx-auto p-6 py-72 h-screen max-w-full bg-primary">
      <div className="flex flex-col p-8 justify-center mx-auto h-full max-w-5xl">
        <h1 className="text-primaryTxt mb-4 text-4xl text-center">Contact</h1>
        <div className="flex justify-center items-center">
          <form onSubmit={submitForm} action="" className="flex flex-col w-full md:w-1/2">
            <input
              onChange={updateName} 
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-secondaryTxt"
            />
            <input
              onChange={updateEmail} 
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-2 p-2 bg-transparent border-2 rounded-md text-secondaryTxt focus:outline-none"
            />
            <textarea
              onChange={updateMessage}
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-secondaryTxt focus:outline-none">
            </textarea>
            <button
              className="mt-2 p-3 px-6 pt-2 opacity-80 text-white bg-primaryTxt border-2 border-primaryTxt hover:opacity-100 duration-300 rounded-lg"
              >Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact