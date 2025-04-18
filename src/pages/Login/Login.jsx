import styles from './Login.module.css'
import { useEffect, useState } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'
import AuthLayout from '../../layouts/AuthLayout'
import { useNavigate, NavLink } from 'react-router-dom'



const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate();

    const { login, error: authError, loading } = useAuthentication()

    const handlerSubmit = async (e) => {
        e.preventDefault()

        setError(null)
        const user = {
            email,
            password,
        }
        const loggedUser = await login(user)

        loggedUser && navigate('/home')
    }

    useEffect(() => {
        // console.log(`AuthError: ${authError}`)
        if (authError) {
            setError(authError)
        }
    }, [authError])

    return (
        <AuthLayout>
            <div className={styles.login}>
                <NavLink to='/'>
                    <h1>Life Dev</h1>
                </NavLink>

                <h2>Entrar</h2>
                <p>Faça login em nossa plataforma de desenvolvedores</p>
                <form onSubmit={handlerSubmit}>
                    <label>
                        <span>E-mail: </span>
                        <input
                            type='email'
                            name='email'
                            required
                            placeholder='E-mail do usuário'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </label>
                    <label>
                        <span>Senha: </span>
                        <input
                            type='password'
                            name='password'
                            required
                            placeholder='Insira sua senha'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </label>
                    {!loading && <button className='btn' type='submit'>Entrar</button>}
                    {loading && <button className='btn' disabled>Aguarde... </button>}
                    {error && <p>{error}</p>}
                    <p>
                        Ainda não tem uma conta? <NavLink to={"/register"}>Cadastre-se</NavLink>
                    </p>
                </form>
            </div>
        </AuthLayout>

    )
}
export default Login