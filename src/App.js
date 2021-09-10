import React, { Component } from "react";
import styled from "styled-components";

const Div = styled.div`
  font-family: sans-serif;
  margin: 10%;
  padding: 10%;
  border: 2px solid #666;
  background: #dddddd;
  border-radius: 10px;
  text-align: center;
`;

const H2 = styled.h2`
  color: red;
`;

const Button = styled.button`
  background: black;
  font-family: sans-serif;
  font-size: 15px;
  color: greenyellow;
  border: 0;
  margin: 10px;
  padding: 10px 15px;
  border-radius: 10px;
`;

class Contador extends Component {
  state = {
    count: 0
  };

  adiciona = () => {
    if (this.state.count < 10) {
      this.setState({
        count: this.state.count + 1
      });
    }
  };

  remove = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      });
    }
  };

  render() {
    return (
      <Div>
        <h1>Contador with styled components</h1>
        <H2>{this.state.count}</H2>
        <div>
          <Button onClick={this.adiciona}>Adicionar</Button>
          <Button onClick={this.remove}>Deduzir</Button>
        </div>
      </Div>
    );
  }
}

export default Contador;
