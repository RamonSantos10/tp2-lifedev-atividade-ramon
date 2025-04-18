import React, { useEffect, useState } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication';
import AuthLayout from '../../layouts/AuthLayout'
import { NavLink, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/config';


const Register = () => {

  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication()


  useEffect(() => {
    if (authError) {
      setError(authError)
    }
  }, [authError])


  const handleSubmit = async (e) => {
    e.preventDefault()

    setError(null)

    if (password !== confirmPassword) {
      setError('As senham não coincidem')
      return
    }


    const user = {
      displayName,
      email,
      password,
    }


    const createdUser = await createUser(user)

    createdUser && navigate('/login')


    // console.log(error == null && authError == null ? 'funfou' : 'não funfou');   
  }




  return (
    <AuthLayout>
      <div className="text-center">
        <NavLink to='/' className="text-4xl font-bold mb-8 block">
          <span className="font-black">Life</span>Dev
        </NavLink>
        <h2 className="text-2xl font-bold mb-2">Cadastrar</h2>
        <p className="text-gray-600 mb-8">Crie uma conta em nossa plataforma de desenvolvedores</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nome
            </label>
            <input
              type='text'
              name='displayName'
              required
              placeholder='Nome do Usuário'
              onChange={(e) => setDisplayName(e.target.value)}
              value={displayName}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
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
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirmar Senha
            </label>
            <input
              type='password'
              name='confirmPassword'
              required
              placeholder='Confirme sua senha'
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {!loading && 
            <button 
              type='submit'
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Cadastrar
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
            Já tem uma conta? <NavLink to="/login" className="text-blue-600 hover:text-blue-500">Faça login</NavLink>
          </p>
        </form>
      </div>
    </AuthLayout>
  )
}

export default Register