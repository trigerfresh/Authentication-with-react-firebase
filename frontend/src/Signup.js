import {useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import {auth} from './firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import './Signup.css';

const Signup = ()=>{
	const  [email, setEmail] = useState('');
	const  [pword, setPword] = useState('');
	const  [cpword, setCpword] = useState('');
	const  [msg, setMsg] = useState('');

	const hEmail = (e)=>{setEmail(e.target.value)}
	const hPword = (e)=>{setPword(e.target.value)}
	const hCpword = (e)=>{setCpword(e.target.value)}

	const hSubmit = (e)=>{
		e.preventDefault();
		try{
			createUserWithEmailAndPassword(auth, email, pword);
			console.log('Account created.');
			setMsg('Account created.');
		}catch(err){
			console.log(err);
		}
	}
return(
<div className = 'signup-container'>
	<form className = 'signup-form' onSubmit = {hSubmit}>	
		<h2>Sign Up</h2>
		<label htmlFor = "email">Email</label><input type = 'email' onChange = {hEmail}/>
		<label htmlFor = "password">Password</label><input type = 'password' onChange = {hPword}/>
		<label htmlFor = "password">Confirm Password</label><input type = 'password' onChange = {hCpword}/>
		<button type = 'submit'>Sign Up</button>
		<p>{msg}</p>
		<p>Already registered <Link to = "/" style={{ textDecoration: 'none' }}>Login</Link></p>
	</form>	
</div>
)
}

export default Signup;