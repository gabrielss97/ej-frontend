import React, { Component } from "react";

import "./styles.css";

export default class Main extends Component {
  render() {
    return (
      <div id="box">
        <div id="box-login">
          <form>
            <i class="fas fa-pencil-ruler" />
            <h1>Troca Justa</h1>
            <input placeholder="Usuário" type="text" />
            <input placeholder="Senha" type="password" id="password" />
            <button type="submit">Login</button>
            <p>Cadastrar-se</p>
          </form>
        </div>
      </div>
    );
  }
}
