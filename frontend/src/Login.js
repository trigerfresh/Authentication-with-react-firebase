import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import './Signup.css'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [pword, setPword] = useState('')
  const [msg, setMsg] = useState('')

  const hEmail = (e) => {
    setEmail(e.target.value)
  }
  const hPword = (e) => {
    setPword(e.target.value)
  }

  const hSubmit = (e) => {
    e.preventDefault()

    if (email === '') {
      setMsg('Enter email')
      return
    }

    if (pword === '') {
      setMsg('Enter password')
      return
    }

    signInWithEmailAndPassword(auth, email, pword)
      .then((res) => {
        localStorage.setItem('email', email)
        navigate('/home')
      })
      .catch((err) => {
        if (err.code === 'auth/user-not-found') {
          setMsg('User not found')
        } else if (err.code === 'auth/wrong-password') {
          setMsg('Incorrect password')
        } else {
          setMsg('Incorrect password. Please try again.')
        }
      })
  }

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={hSubmit}>
        <h2>Login Page</h2>
        <label htmlFor="email">Email</label>
        <input type="email" value={email} onChange={hEmail} />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" value={pword} onChange={hPword} />
        <br />
        <br />
        <button type="submit">Log In</button>
        <p>{msg}</p>
        <p>
          Forgot Password{' '}
          <Link to="/forgotpassword" style={{ textDecoration: 'none' }}>
            Forgot Password
          </Link>
        </p>
        <p>
          Don't have a registered account?{' '}
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login
