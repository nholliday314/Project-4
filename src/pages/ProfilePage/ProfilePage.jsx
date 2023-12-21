import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './ProfilePage.css'


export default function ProfilePage({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  return (
    <div className="ProfileContainer">
      <h1>Profile</h1>
      <div>
        <p>Email: {user.email}</p>
        <p>Username: {user.name}</p>
      </div>
      <Link to="" onClick={handleLogOut} className="LogoutLink">
        Log Out
      </Link>
    </div>
  );
}