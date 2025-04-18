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
        if (authError) {
            setError(authError)
        }
    }, [authError])

    return (
        <AuthLayout>
            <div className="text-center">
                <NavLink to='/' className="text-4xl font-bold mb-8 block">
                    <span className="font-black">Life</span>Dev
                </NavLink>

                <h2 className="text-2xl font-bold mb-2">Entrar</h2>
                <p className="text-gray-600 mb-8">Faça login em nossa plataforma de desenvolvedores</p>
                <form onSubmit={handlerSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            E-mail
                        </label>
                        <input
                            type='email'
                            name='email'
                            required
                            placeholder='E-mail do usuário'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Senha
                        </label>
                        <input
                            type='password'
                            name='password'
                            required
                            placeholder='Insira sua senha'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    {!loading && 
                        <button 
                            type='submit'
                            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Entrar
                        </button>
                    }
                    {loading && 
                        <button 
                            disabled 
                            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-400 cursor-not-allowed"
                        >
                            Aguarde...
                        </button>
                    }
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                    <p className="text-sm text-gray-600 mt-4">
                        Ainda não tem uma conta? <NavLink to="/register" className="text-blue-600 hover:text-blue-500">Cadastre-se</NavLink>
                    </p>
                </form>
            </div>
        </AuthLayout>

    )
}
export default Login