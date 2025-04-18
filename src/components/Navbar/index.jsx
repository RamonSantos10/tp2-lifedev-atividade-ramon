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
    <nav className="bg-white shadow-md w-full">
      <ul className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-y-2 md:gap-y-0">
        <NavLink to={!auth.currentUser ? '/' : '/home'} 
          className={({ isActive }) => `text-xl font-bold ${isActive ? 'text-black bg-transparent' : ''}`}>
          <li>
            <span className="font-black uppercase">Life</span>Dev
          </li>
        </NavLink>
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          {!auth.currentUser && (
            <>
              <NavLink to='/login' 
                className={({ isActive }) => `hover:text-black px-2 py-1 ${isActive ? 'text-black bg-transparent' : ''}`}>
                <li>Login</li>
              </NavLink>
              <NavLink to='/register' 
                className={({ isActive }) => `hover:text-black px-2 py-1 ${isActive ? 'text-black bg-transparent' : ''}`}>
                <li>Register</li>
              </NavLink>
            </>
          )}
          <li className="flex items-center gap-2 min-w-[120px] justify-center">
            <span className={`w-3 h-3 rounded-full ${auth.currentUser ? 'bg-green-500' : 'bg-red-500'}`}></span>
            <span className={`text-sm ${auth.currentUser ? 'text-green-700' : 'text-red-700'}`}>{auth.currentUser ? 'Autenticado' : 'Não Autenticado'}</span>
          </li>
          <li className="w-30 h-10 sm:w-auto flex justify-center sm:justify-start">
            <button 
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded w-30 h-10 sm:w-auto" 
              onClick={handlerLogout}>
              Exit
            </button>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar