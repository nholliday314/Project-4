import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';



export default function ProfilePage({ user, setUser }) {
    function handleLogOut() {
        userService.logOut();
        setUser(null);
      }
    return (
    <div> 
        <h1>Profile</h1>
        
        <div>
        <p>Email: {user.email}</p>
        <p>Username: {user.name}</p>
      
      </div>
        <Link to="" onClick={handleLogOut}>Log Out</Link>
    </div>
    );
  }