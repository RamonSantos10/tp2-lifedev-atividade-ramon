import styles from './Register.module.css'
import React, { useEffect, useState } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication';
import AuthLayout from "../../components/AuthLayout";
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

    createdUser && navigate('/')


    // console.log(error == null && authError == null ? 'funfou' : 'não funfou');   
  }




  return (
    <AuthLayout>
      <div className={styles.register}>
        <h1>Life Dev</h1>
        <h2>Cadastrar</h2>
        <p>Crie uma conta em nossa plataforma de desenvolvedores</p>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome: </span>
            <input
              type='text'
              name='displayName'
              required
              placeholder='Nome do Usuário'
              onChange={(e) => setDisplayName(e.target.value)}
              value={displayName}
            />
          </label>
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
          <label>
            <span>Confirmar Senha: </span>
            <input
              type='password'
              name='confirmPassword'
              required
              placeholder='Insira sua senha'
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </label>
          {!loading && <button className='btn'>Cadastrar</button>}
          {loading && <button className='btn' disabled>Aguarde... </button>}
          {error && <p className={styles.error}>{error}</p>}

          <p>
            Já tem uma conta? <NavLink to={"/login"}>Faça login</NavLink>
          </p>
        </form>
      </div>
    </AuthLayout>
  )
}

export default Register