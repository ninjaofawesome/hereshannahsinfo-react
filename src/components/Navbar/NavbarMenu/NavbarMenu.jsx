import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../Title/Title';
import List from '../../List/List';
import data from './NavbarData';
import styles from './NavbarMenu.module.scss';

const NavbarMenu = () => (
  <div className={styles.navbarMenu}>
    <div className={styles.navbarMenuSectionTitle}>
      <Title
        size='subtitle'
        color='living coral'
        copy='Sections'
      />
    </div>
    <div className={styles.navbarMenuSection}>
      <div className={styles.navbarMenuItem}>
        <Link to='/work'>
          Work
        </Link>
      </div>
    </div>
    <div className={styles.navbarMenuSectionTitle}>
      <Title
        size='subtitle'
        color='living coral'
        copy='Links'
      />
    </div>
    <div className={styles.navbarMenuSection}>
      <div className={styles.navbarMenuItem}>
        <List {...data} />
      </div>
    </div>
  </div>
);

export default NavbarMenu;