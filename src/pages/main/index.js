import React, { Component } from "react";
import api from '../../services/api';
import "./styles.css";

export default class Main extends Component {
  state = {
    newUser: {
      username: '',
      password: '',
      password2: '',
      email: '',
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.newUser);
  };

  handleInputChange = (e) => {
    this.setState({username: e.target.value});
    this.setState({email: e.target.value});
    this.setState({password: e.target.value});
    this.setState({password2: e.target.value});

  };

  render() {
    return (
      <div id="box">
        <div id="box-login">
          <form onSubmit={this.handleSubmit}>
            <i class="fas fa-pencil-ruler" />
            <h1>Troca Justa</h1>

            <input 
            placeholder="Usuário" 
            type="text"
            value={this.state.newUser.username}
            onChange={this.handleInputChange} />

            <input 
            placeholder="E-mail" 
            type="email"
            value={this.state.newUser.email}
            onChange={this.handleInputChange} />

            <input placeholder="Senha" 
            type="password" 
            id="password"
            value={this.state.newUser.password}
            onChange={this.handleInputChange} />

            <input placeholder="Repita senha"
             type="password"
             id="password2"
             value={this.state.newUser.password2}
             onChange={this.handleInputChange} />

            <button type="submit">Cadastrar</button>
            <p>Faça Login</p>
          </form>
        </div>
      </div>
    );
  }
}
