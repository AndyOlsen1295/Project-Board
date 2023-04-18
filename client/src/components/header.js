import React from 'react';
import Navbar from '../components/navbar';
import Logo from './assets/LOGO.png'

const styles = {
  top: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    padding: '10px 10px',
    backgroundColor: '#F5EBE0',

  },
  heading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 10px',
    marginLeft: '20px',
    backgroundColor: '#EDEDE9',
  },
  Img: {
    borderRadius: '150px',
  }
}

function Header() {
  return (
    <header style={styles.top}>
      <img style={styles.Img} src={Logo} />
      <h1 style={styles.heading}>Project Management Board</h1>
      <Navbar />
    </header>
  );
}

export default Header;