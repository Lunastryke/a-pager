import React, { Fragment } from 'react';

import Container from 'react-bootstrap/Container';
const Webpage = ({ data }) => {
  return (
    <Container fluid>
      {/* {data} */}
      <td dangerouslySetInnerHTML={{ __html: data }} />
    </Container>
  );
};

export default Webpage;
