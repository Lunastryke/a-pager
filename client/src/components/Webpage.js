import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Webpage = ({ data: { rawHtml, productTitle, imageSrc, imageAlt } }) => {
  return !productTitle ? (
    <Fragment></Fragment>
  ) : (
    <Container className='m-4' fluid>
      <Jumbotron>
        <Row>
          <Col xs={6} md={4}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              className='float-left'
              width='300px'
              height='300px'
              rounded
            />
          </Col>
          <Col xs={6} md={4}>
            <h3>{productTitle}</h3>
          </Col>
        </Row>
      </Jumbotron>
      <td dangerouslySetInnerHTML={{ __html: rawHtml }} />
    </Container>
  );
};

export default Webpage;
