import axios from "axios";
import { useState } from "react";

const Contact = () => {

  const init = { name: '', email: '', message: '' }
  const [form, setForm] = useState(init)

  const updateForm = (key, e) => {
    const updatedForm = { ...form }
    updatedForm[key] = e.target.value;
    setForm(updatedForm);
  }

  const submitForm = async (e) => {
    e.preventDefault();

    const { name, email, message } = form;
    const formData = {
      name: name,
      email: email,
      message: message
    }
    setForm(init);

    const res = await axios.post('/api/send/', formData);
    
    // Temporary alerts for contact form user feedback
    res.status === 200 ? alert('Your message has been sent (dev)!') : alert('Message failed to send')
    return res;
  }

  const styles = {
    contactComponent: 'relative container mx-auto p-6 py-72 h-screen max-w-full bg-primary',
    contactContainer: 'flex flex-col p-8 justify-center mx-auto h-full max-w-5xl',
    header: 'text-primaryTxt mb-4 text-4xl text-center',
    formContainer: 'flex justify-center items-center',
    formStyles: 'flex flex-col w-full md:w-1/2',
    formField: 'p-2 bg-transparent border-2 rounded-md text-secondaryTxt',
    button: 'mt-2 p-3 px-6 pt-2 opacity-80 text-white bg-primaryTxt border-2 border-primaryTxt hover:opacity-100 duration-300 rounded-lg',
  }
  const {contactComponent, contactContainer, header, formContainer, formStyles, formField, button} = styles;

  return (
    <div name='contact' className={contactComponent}>
      <div className={contactContainer}>
        <h1 className={header}>Contact</h1>
        <div className={formContainer}>
          <form onSubmit={submitForm} action="" className={formStyles}>
            <input
              onChange={(e) => updateForm("name", e)} 
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              className={formField}
            />
            <input
              onChange={(e) => updateForm("email", e)}
              type="text"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              className={`${formField} my-2 focus:outline-none`}
            />
            <textarea
              onChange={(e) => updateForm("message", e)}
              type="text"
              name="message"
              placeholder="Enter your message"
              value={form.message}
              rows="10"
              className={`${formField} focus:outline-none`}>
            </textarea>
            <button
              className={button}
              >Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact