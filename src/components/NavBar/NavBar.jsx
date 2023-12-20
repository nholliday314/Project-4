import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  return (
    <nav>
      <Link to="/home">Home</Link>
      &nbsp; | &nbsp;
      <Link to="/pulse">Pulse</Link>
      &nbsp; | &nbsp;
      <Link to="/journal">Journal</Link>
      &nbsp; | &nbsp;
      <Link to="/profile">Profile</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;
    </nav>
  );
}