import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import NavbarMenu from './NavbarMenu/NavbarMenu';

import styles from './Navbar.module.scss';

const menuVisibilityStyles = visible => {
  return cx({
    [styles.navbarVisibleMenu]: visible === true,
    [styles.navbarHiddenMenu]: visible === false,
  });
};

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      visible: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    return (
      <div className={styles.navbar}>
        <div className={styles.navbarMenu}>
          <div className={styles.navbarLinksWrapper}>
            <div
              className={styles.navbarMenuLink}
              onClick={this.toggleMenu}
              onKeyDown={this.toggleMenu}
              role='button'
              tabIndex={0}
            >
              Menu
            </div>
            <div className={styles.navbarIcon}>
              <Link to='/'>Here's Hannah's Info</Link>
            </div>
          </div>
          <div
            className={menuVisibilityStyles(this.state.visible)}
            onClick={this.toggleMenu}
            onKeyDown={this.toggleMenu}
            role='button'
            tabIndex={0}
          >
            <NavbarMenu />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;