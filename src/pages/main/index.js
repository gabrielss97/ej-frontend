import React, { Component } from "../../../node_modules/react";
import api from "../../services/api";
import "./styles.css";

export default class Main extends Component {
  state = {
    newUser: {
      username: "",
      password: "",
      password2: "",
      email: ""
    },

    responseMessage: ""
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await api.post("users", {
      username: this.state.newUser.username,
      email: this.state.newUser.email,
      password: this.state.newUser.password,
      password2: this.state.newUser.password2
    });

    console.log("response", response.data);
    if (!response.data.success) {
      this.setState({ responseMessage: response.data.message });
    } else {
      this.setState({ responseMessage: "" });
    }
  };

  handleInputChange = e => {
    const newUser = this.state.newUser;
    newUser[e.target.id] = e.target.value;
    this.setState({ newUser });
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
              id="username"
              defaultValue={this.state.newUser.username}
              onChange={this.handleInputChange}
            />

            <input
              placeholder="E-mail"
              type="email"
              id="email"
              defaultValue={this.state.newUser.email}
              onChange={this.handleInputChange}
            />

            <input
              placeholder="Senha"
              type="password"
              id="password"
              defaultValue={this.state.newUser.password}
              onChange={this.handleInputChange}
            />

            <input
              placeholder="Repita senha"
              type="password"
              id="password2"
              defaultValue={this.state.newUser.password2}
              onChange={this.handleInputChange}
            />

            <p className="response-message">{this.state.responseMessage}</p>

            <button type="submit">Cadastrar</button>
            <p>Faça Login</p>
          </form>
        </div>
      </div>
    );
  }
}
