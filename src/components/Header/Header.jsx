import { useUser } from '../../context/UserContext';
import { signOut } from '../../services/auth';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const { user, setUser } = useUser();

  const handleSignOut = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <header>
      <div className="left">
        <h2>DYLAN LASTNAME DESIGN</h2>
        <h3>Set Design and Creative</h3>
      </div>
      <div className="right">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/clients">Clients</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        {/* <NavLink to="/client">Clients</NavLink>
        <NavLink o="/contact">Contact</NavLink> */}
        {user && (
          <>
            <div className="welcome">Welcome {user.email}</div>{' '}
            <button onClick={handleSignOut}>Sign Out</button>
          </>
        )}
      </div>
    </header>
  );
}
