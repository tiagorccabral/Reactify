import React, { Component } from 'react';

import { Container } from './styles';

import List from '../List';

export default class Board extends Component {
  render() {
    return (
      <Container>
        <List />
        <List />
        <List />
        <List />
      </Container>
    );
  }
}

