import logo from './logo.svg';
import Signup from './Signup.js';
import Home from './Home.js';
import Login from './Login.js';
import Doubt from './Doubt.js';
import ChangePassword from './ChangePassword.js';
import About from './About.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ForgotPassword from './ForgotPassword.js'
import './App.css';

function App() {
  return (
    <div className="App">
	<BrowserRouter>
		<Routes>	
			<Route path = "/" element = {<Login/>} />
			<Route path = "/home" element = {<Home/>} />
			<Route path = "/signup" element = {<Signup/>} />
			<Route path = "/doubt" element = {<Doubt/>} />
			<Route path = "/changepassword" element = {<ChangePassword/>} />
			<Route path = "/about" element = {<About/>} />
			<Route path = "/forgotpassword" element = {<ForgotPassword/>} />
		</Routes>
	</BrowserRouter>
    </div>
  );
}

export default App;
