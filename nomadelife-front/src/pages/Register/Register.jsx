import React, { useState, useEffect } from 'react';
import styles from './Register.module.css';
import { useAuthentication } from '../../hooks/useAuthentication';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const { register, error: authError, loading } = useAuthentication();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const user = {
      name,
      email,
      password,
      confirmPassword
    };

    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    const res = await register(user);

    if (res) {
      navigate('/login'); // Redirecionar para a página de criação de post
    }
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className={styles.register}>
      <h2>Compartilhe suas experiências com outros nomades</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type='text'
            name='name'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Entre com seu nome'
          ></input>
        </label>
        <label>
          <span>E-mail:</span>
          <input
            type='email'
            name='email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Entre com seu e-mail'
          ></input>
        </label>
        <label>
          <span>Senha:</span>
          <input
            type='password'
            name='password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Entre com sua senha'
          ></input>
        </label>
        <label>
          <span>Confirmação de Senha:</span>
          <input
            type='password'
            name='confirmPassword'
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder='Confirme sua senha'
          ></input>
        </label>
        {!loading && <button className='btn'>Cadastrar</button>}
        {loading && <button className='btn' disabled>Aguarde...</button>}
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  );
};

export default Register;