import React, { useState } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication';

const Register = () => {

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const {createUser, error: authError, loading} = useAuthentication()

    const handleSubmit = async (e) => {
      e.preventDefault()
    
      setError("")

      const user = {
        displayName,
        email,
        password,
      }

      password !== confirmPassword && setError('As senham não coincidem')

      const res = await createUser(user)

      console.log(res);

      
    }

  return (
    <div className={""}>
      <h1>Entrar</h1>
      <p>Faça login em nossa plataforma de desenvolvedores</p>
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
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}

export default Register