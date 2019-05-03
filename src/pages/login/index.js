import React, { Component } from "react";

import "./styles.css";

export default class Login extends Component {
  render() {
    return (
      <div id="box">
        <div id="box-login">
          <form>
            <i className="fas fa-pencil-ruler" />
            <h1>Troca Justa</h1>
            <input placeholder="Usuário" type="text" />
            <input placeholder="Senha" type="password" id="password" />
            <button type="submit">Login</button>
            <p>Cadastrar-se</p>
            <p>Esqueci minha senha</p>
          </form>
        </div>
      </div>
    );
  }
}
