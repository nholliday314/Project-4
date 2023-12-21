import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'

export default function NavBar({ user, setUser }) {

  return (
    <nav className='nav-bar' >
      <label for="check" class="checkbtn">
        
        <i class="fas fa-bars"></i>
        
      </label>
      {/* <label class="logo">Day in My Life</label> */}
      <ul>
        <li><a class="active" href="/home">Home</a></li>
        <li><a href="/pulse">Pulse</a></li>
        <li><a href="/journal">Journal</a></li>
        <li><a href="/profile">Profile</a></li>
      </ul>
      
    </nav>
  );
}