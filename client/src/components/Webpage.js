import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
/*
Structure of data object
data:{
  siteUrl,
  rawHtml,
  productTitle,
  image: {
    imgSrc,
    imgAlt
  },
  price,
  ratings: {
    ratingValue: float,
    ratingCount
  },
  descriptions: []
}
*/

const Webpage = ({ data }) => {
  return !data ? (
    <Fragment></Fragment>
  ) : (
    <Fragment>
      <div style={{ textAlign: "center" }}>
      <Container className='mb-2' style={{padding: "150px"}} fluid>
        <p>We have concised the page for you</p>
        <Jumbotron style={{ border: "1px solid black", backgroundColor: "white" , borderRadius: "5px"}} className='p-3 mb-2'>
        <Row style={{margin: "50px"}}>
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
      </div>
      <p style={{textAlign: "center"}}>The actual webpage</p>
      <td style={{padding: "50px", border: "1px solid black", borderRadius: "5px"}} className='mt-0' dangerouslySetInnerHTML={{ __html: data.rawHtml }} />

    </Fragment>
  );
};

export default Webpage;
