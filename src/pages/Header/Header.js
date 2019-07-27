import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <Link to="/" href="/" className={styles.link}>
      <FaHome className={styles.icon} />
    </Link>
  </header>
);

export default Header;
