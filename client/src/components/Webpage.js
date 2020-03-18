import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Webpage = ({ data }) => {
  return !data ? (
    <Fragment></Fragment>
  ) : (
    <Fragment>
      <Container fluid>
        <Jumbotron className='p-3'>
          <Row>
            <Col className='col-3'>
              <Image
                src={data.image.imgSrc}
                alt={data.image.imgAlt}
                width='400px'
                height='400px'
                rounded
              />
            </Col>
            <Col className='col-9'>
              <h1>{data.productTitle}</h1>
            </Col>
          </Row>
        </Jumbotron>
      </Container>
      <td dangerouslySetInnerHTML={{ __html: data.rawHtml }} />
    </Fragment>
  );
};

export default Webpage;
