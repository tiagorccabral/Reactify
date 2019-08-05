import React, { Component } from 'react';

import { Container, Label } from './styles';

export default class Card extends Component {
  render() {
    const { data } = this.props;
    return (
      <Container>
        <header>
          {data.labels.map(label => <Label key={label} color={label} />)}
          <Label color="#7159c1" />
        </header>
        <p>{data.content}</p>
        {data.user && <img src={data.user} alt="" />}
      </Container>
    );
  }
}
