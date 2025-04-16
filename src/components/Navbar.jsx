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
          <NavLink  to='/login' className={styles.brand}>
            <li>
              <span>Login</span>
            </li>
          </NavLink>
          <NavLink to='/register' className={styles.brand}>
            <li>
              <span>Register</span>
            </li>
          </NavLink>
          {/* <NavLink to='/NewPost' className={styles.brand} activeClasName={styles.active}>
            <li>
              <span>NewPost</span>
            </li>
          </NavLink>
          <NavLink to='/dashboard' className={styles.brand} activeClasName={styles.active}>
            <li>
              <span>Dashboard</span>
            </li>
          </NavLink>
          <NavLink to='/AboutUs' className={styles.brand} activeClasName={styles.active}>
            <li>
              <span>About Us</span>
            </li>
          </NavLink> */}
          <li>
            <button className={styles.exit}>Exit</button>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar