import React from 'react';
import { useNavigate } from 'react-router-dom';
import Style from './form.module.css';
const Form = () => {
  const [usuario, setUsuario] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const navigate = useNavigate();
  async function login() {
    const response = await fetch(
      `https://dogsapi.origamid.dev/json/jwt-auth/v1/token`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: usuario, password: senha }),
      },
    );
    const dados = await response.json();
    if (response.ok) {
      navigate('/post');
    }
  }

  return (
    <>
      <form className={Style.form}>
        <div>
          <label htmlFor="usuario">Usuário</label>
          <input
            type="text"
            required
            name="usuario"
            id="usuario"
            onChange={({ target }) => setUsuario(target.value)}
          />
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            required
            name="senha"
            id="senha"
            onChange={({ target }) => setSenha(target.value)}
          />
        </div>
      </form>
      <div className={Style.divBtn}>
        <button onClick={login}>Enviar</button>
      </div>
    </>
  );
};

export default Form;
