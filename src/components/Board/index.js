import React, { Component } from 'react';

import { loadLists } from '../../services/api';

import { Container } from './styles';

import List from '../List';

const lists = loadLists();

export default class Board extends Component {
  render() {
    return (
      <Container>
        {lists.map(list => <List key={list.title} data={list} />)}
      </Container>
    );
  }
}

