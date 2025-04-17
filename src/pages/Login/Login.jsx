import styles from './Login.module.css'
import { useEffect, useState } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'
import AuthLayout from '../../components/AuthLayout'
import { NavLink } from 'react-router-dom'



const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const { login, error: authError, loading } = useAuthentication()

    const handlerSubmit = async (e) => {
        e.preventDefault()

        setError("")
        const user = {
            email,
            password,
        }


        const res = await login(user).catch((e) => console.log(e.message))


        console.log(`Login ${res} - Bem Sucedido`)
    }

    useEffect(() => {
        console.log(`AuthError: ${authError}`)
        if (authError) {
            setError(authError)
        }
    }, [authError])

    return (
        <AuthLayout>
            <div className={styles.login}>
                <h1>Life Dev</h1>
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
                    {!loading && <button className='btn'>Entrar</button>}
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