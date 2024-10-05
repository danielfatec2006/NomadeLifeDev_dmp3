import React, { useEffect } from 'react';
import styles from './NavBar.module.css';
import { useAuthentication } from '../hooks/useAuthentication'; 
import { useNavigate, Link } from 'react-router-dom';

const NavBar = () => {
  const { auth, logout } = useAuthentication();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); 
    navigate('/login');
  };

  useEffect(() => {
    
  }, [auth])

  return (
    <>
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        Nomade <span>DEV</span>
      </div>
      <ul className={styles.links_list}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
            {!auth.currentUser && <Link to="/login">Login</Link>}
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/new-post">New Post</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {auth.currentUser && (
            <li>
              <a className={styles.buttonExit} href="#" onClick={handleLogout}>Exit</a>
            </li>
          )}
      </ul>
    </nav>
    </>
  )
}

export default NavBar