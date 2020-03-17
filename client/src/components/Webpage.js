import React from 'react';
import Container from 'react-bootstrap/Container';

const Webpage = ({ data: { productTitle } }) => {
  return (
    <Container fluid>
      <h1>{productTitle}</h1>
      <h2>Testing to make sure rendering works</h2>
    </Container>
  );
};

export default Webpage;
