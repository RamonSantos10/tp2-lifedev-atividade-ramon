import { auth } from '../../firebase/config'
import { useAuthentication } from '../../hooks/useAuthentication'
import styles from './styles.module.css'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()
  const { logout } = useAuthentication();

  const handlerLogout = () => {
    logout();
    navigate('/login')
  }

  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.link_list}>
          <NavLink to={!auth.currentUser ? '/' : '/home'} className={({ isActive }) => `${styles.brand} ${isActive ? styles.active : ''}`}>
            <li>
              <span>Life</span>Dev
            </li>
          </NavLink>
          {!auth.currentUser && <NavLink to='/login' className={({ isActive }) => `${styles.brand} ${isActive ? styles.active : ''}`}>
            <li>
              <span>Login</span>
            </li>
          </NavLink>}
          {!auth.currentUser && <NavLink to='/register' className={({ isActive }) => `${styles.brand} ${isActive ? styles.active : ''}`}>
            <li>
              <span>Register</span>
            </li>
          </NavLink>}
          <li>
            <span>{auth.currentUser? 'Autenticado' : 'Não Autenticado'}</span>
          </li>

          <li>
            <button className={styles.exit} onClick={handlerLogout}>Exit</button>
          </li>

        </ul>
      </nav>
    </>
  )
}

export default Navbar