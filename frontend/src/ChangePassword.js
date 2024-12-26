import { useRef, useState } from 'react'
import {
  getAuth,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Navigation from './Navbar.js'

const ChangePassword = () => {
  const nav = useNavigate()

  const rPassword1 = useRef()
  const rPassword2 = useRef()
  const rCurrentPassword = useRef() // Reference for current password

  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [msg, setMsg] = useState('')
  const [currentPassword, setCurrentPassword] = useState('') // State to store the current password

  const hPassword1 = (event) => {
    setPassword1(event.target.value)
  }
  const hPassword2 = (event) => {
    setPassword2(event.target.value)
  }
  const hCurrentPassword = (event) => {
    setCurrentPassword(event.target.value)
  } // Handle current password

  const save = (event) => {
    event.preventDefault()

    if (password1 === '') {
      setMsg('Enter current password')
      return
    }

    if (password2 === '') {
      setMsg('Enter new password')
      return
    }

    if (rCurrentPassword === '') {
      setMsg('Enter confirm password')
      return
    }

    if (password1 === password2) {
      const auth = getAuth()
      const user = auth.currentUser

      // Re-authenticate user before updating password
      const credential = EmailAuthProvider.credential(
        user.email,
        currentPassword
      ) // Use current password
      reauthenticateWithCredential(user, credential)
        .then(() => {
          // Now that the user is reauthenticated, update the password
          updatePassword(user, password1)
            .then(() => {
              localStorage.removeItem('email')
              nav('/')
            })
            .catch((err) => setMsg('Error updating password: ' + err.message))
        })
        .catch((err) => {
          setMsg('Re-authentication failed: ' + err.message)
        })
    } else {
      setMsg('Passwords did not match')
      setPassword1('')
      setPassword2('')
    }
  }

  return (
    <>
      <Navigation />
      <center>
        <form onSubmit={save} className="c-Password">
          <h1 style={{ fontSize: '30px', marginBottom: '20px' }}>
            Change Password
          </h1>
          {/* Current password input */}
          <input
            type="password"
            placeholder="Enter current password"
            ref={rCurrentPassword}
            onChange={hCurrentPassword}
            value={currentPassword}
          />
          <br />
          <br />

          <input
            type="password"
            placeholder="Enter new password"
            ref={rPassword1}
            onChange={hPassword1}
            value={password1}
          />
          <br />
          <br />

          <input
            type="password"
            placeholder="Confirm new password"
            ref={rPassword2}
            onChange={hPassword2}
            value={password2}
          />
          <br />
          <br />

          <div className="cpassword">
            <input type="submit" value="Change Password" />
          </div>
          <h4 style={{ marginTop: '30px' }}>{msg}</h4>
        </form>
      </center>
    </>
  )
}

export default ChangePassword
