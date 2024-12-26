import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Navigation from './Navbar.js'

const Doubt = () => {
  const form = useRef()

  const [from, setFrom] = useState()
  const [email, setEmail] = useState()
  const [text, setText] = useState()
  const [msg, setMsg] = useState()

  const hFrom = (e) => {
    setFrom(e.target.value);
  };

  const hEmail = (e) => {
    setEmail(e.target.value);
  };

  const hText = (e) => {
    setText(e.target.value);
  };


  const sendEmail = (e) => {
    e.preventDefault()

    if (from === '') {
      setMsg('Enter your name.')
      return
    }

    if (email === '') {
      setMsg('Enter your email.')
      return
    }

    if (text === '') {
      setMsg('Enter your text.')
      return
    }

    emailjs
      .sendForm(
        'service_9uegp38',
        'template_q7a6z1g',
        form.current,
        'jIpxRO-HQ2mvyqTr3'
      )
      .then(
        () => {
          console.log('SUCCESS!')
          setMsg('Email sent')
          setFrom('')
          setEmail('')
          setText('')
        },
        (error) => {
          console.log('FAILED...', error.text)
          setMsg('Error sending email', error)
        }
      )
  }

  return (
    <>
      <Navigation />
      <form ref={form} onSubmit={sendEmail} className="e-form">
        <h1>Email Form</h1>
        <input
          type="text"
          name="from_name"
          placeholder="Enter name"
          value={from} onChange={hFrom}
        />

        <br />
        <br />

        <input
          type="email"
          name="from_email"
          placeholder="Enter email"
          value={email} onChange={hEmail}
        />

        <br />
        <br />
        <textarea name="message" placeholder="Enter message" value={text} onChange={hText}/>

        <br />
        <br />
        <button type="submit">Send</button>
		{msg && <h2>{msg}</h2>}

      </form>
    </>
  )
}

export default Doubt
