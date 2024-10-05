import React, { useEffect } from 'react';
import styles from './NavBar.module.css';
import { useAuthentication } from '../hooks/useAuthentication'; 
import { useNavigate } from 'react-router-dom';

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
          <a href="/">Home</a>
        </li>
        <li>
          {!auth.currentUser && <a href="/login">Login</a>}
        </li>
        <li>
          <a href="/register">Register</a>
        </li>
        <li>
          <a href="#">New Post</a>
        </li>
        <li>
          <a href="#">Dashboard</a>
        </li>
        <li>
          <a href="#">About</a>
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