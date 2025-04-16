import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.link_list}>
          <NavLink to='/' className={styles.brand}>
            <li>
              <span>Life</span>Dev
            </li>
          </NavLink>
          <NavLink  to='/login' className={styles.brand} activeClassName={styles.active}>
            <li>
              <span>Login</span>
            </li>
          </NavLink>
          <NavLink to='/register' className={styles.brand} activeClassName={styles.active}>
            <li>
              <span>Register</span>
            </li>
          </NavLink>
          <li>
            <button className={styles.exit}>Exit</button>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar