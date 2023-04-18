import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  heading: {
    display: 'inline',
    listStyle: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 10px',
    marginLeft: '20px',
  }, 
  clickLinks: {
    color: 'blue', 
    borderRadius: '15px',
    borderWidth: '2px',
  }
};

function Navbar() {
  return (
    <div style={styles.heading}>
      <Link style={styles.clickLinks} to="/">
        Home
      </Link>
      <Link style={styles.clickLinks} to="/main">
        Main
      </Link>
      <Link style={styles.clickLinks} to="/project">
        Project
      </Link>
      <Link style={styles.clickLinks} to="/create">
        Create
      </Link>
    </div>
  );
}

export default Navbar;
