import React, { Component } from "react";
import api from '../../services/api';
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
            <input placeholder="E-mail" type="email" />
            <input placeholder="Senha" type="password" id="password" />
            <input placeholder="Repita senha" type="password" id="password2" />
            <button type="submit">Cadastrar</button>
            <p>Faça Login</p>
          </form>
        </div>
      </div>
    );
  }
}
