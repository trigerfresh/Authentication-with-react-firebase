import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import Navigation from './Navbar.js';
import { Button } from 'react-bootstrap';

const Home = () => {
  const [email, setEmail] = useState(null);  
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    console.log(storedEmail);  
    if (storedEmail !== null) {
      setEmail(storedEmail);
    }
    setLoading(false);  
  }, []);

  const nav = useNavigate();
  
  const lo = (e) => {
    e.preventDefault();
    if (email !== null) {
      localStorage.removeItem('email');
      nav('/');
    }
  };

  return (
    <center>
      {/* Show the Navigation bar only if the user is logged in */}
      {email && <Navigation />}
      
      {loading ? (
        <div>Loading...</div>
      ) : email ? (
        <div className='txt'>Hello {email}</div> 
      ) : (
        <div className = "txt">Please Logged in with email & password</div>
      )}

      {email && (
        <form onSubmit={lo}>
          <Button type="submit" variant='danger'>Logout</Button>	
        </form>
      )}
    </center>
  );
};

export default Home;
