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

  handleSubmit = async e => {
    e.preventDefault();
    console.log(this.state.newUser);
    const response = await api.post("users", {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    });

    console.log(response.data);
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
            <i className="fas fa-pencil-ruler" />
            <h1>Troca Justa</h1>

            <input 
            placeholder="Usuário" 
            type="text"
            defaultValue={this.state.newUser.username}
            onChange={this.handleInputChange} />

            <input 
            placeholder="E-mail" 
            type="email"
            defaultValue={this.state.newUser.email}
            onChange={this.handleInputChange} />

            <input placeholder="Senha" 
            type="password" 
            id="password"
            defaultValue={this.state.newUser.password}
            onChange={this.handleInputChange} />

            <input placeholder="Repita senha"
             type="password"
             id="password2"
             defaultValue={this.state.newUser.password2}
             onChange={this.handleInputChange} />

            <button type="submit">Cadastrar</button>
            <p>Faça Login</p>
          </form>
        </div>
      </div>
    );
  }
}
