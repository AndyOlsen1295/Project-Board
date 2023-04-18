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
      <Link className="btn btn-lg btn-primary m-2" to="/">
        Home
      </Link>
      <Link style={styles.clickLinks} className="btn btn-lg btn-primary m-2" to="/main.js">
        Main
      </Link>
      <Link style={styles.clickLinks} className="btn btn-lg btn-primary m-2" to="/project.js">
        Project
      </Link>
      <Link style={styles.clickLinks} className="btn btn-lg btn-primary m-2" to="//create.js">
        Create
      </Link>
    </div>
  );
}

export default Navbar;
