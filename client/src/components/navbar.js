import React from 'react';

const styles = {
//   navbar: {

//   },
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
      <p style={styles.clickLinks}>Dashboard</p>
      <p style={styles.clickLinks}>Create Project</p>
      <p style={styles.clickLinks}>Projects</p>
      <p style={styles.clickLinks}>Login / SignUp</p>
    </div>
  );
}


export default Navbar;
