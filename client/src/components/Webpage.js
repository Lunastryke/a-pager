import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import speak from '../api/speech';

/*
Structure of data object
data:{
  url,
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
  // speak rate of 0(slowest) - 2(fastest)
  const [speakRate, setSpeakRate] = useState(1);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <Container className='mb-2' style={{ padding: '10px' }} fluid>
          <p
            style={{ fontSize: '1.2rem' }}
            id='scroll_target_1'
            onClick={() =>
              speak('We have concised the page for you', speakRate)
            }
          >
            We have concised the page for you
          </p>
          <p
            className='mt-1'
            style={{ display: 'inline', fontSize: '1.4rem' }}
            onClick={() =>
              speak('Click on any text to have it read out to you!', speakRate)
            }
          >
            Click on any text to have it read out to you!
          </p>

          {/* Rate control slider */}

          <Form style={{ display: 'inline' }}>
            <Form.Group
              controlId='formBasicRangeCustom'
              style={{ display: 'inline' }}
            >
              <Form.Label
                style={{
                  fontSize: '1.2rem',
                  textAlign: 'center',
                  display: 'inline',
                  marginLeft: '15px',
                  marginRight: '10px'
                }}
                onClick={() => speak('Speak Rate', speakRate)}
              >
                Speak Rate:
              </Form.Label>
              <Form.Control
                style={{
                  textAlign: 'center',
                  display: 'inline',
                  width: '15vw',
                  margin: 'auto'
                }}
                type='range'
                value={speakRate * 50}
                onChange={e => setSpeakRate(e.target.value * 0.02)}
              />
            </Form.Group>
          </Form>

          <div className='shadow p-3 mb-5 bg-white rounded'>
            <Row style={{ margin: '2rem' }}>
              <Col className='col-3'>
                <Image
                  style={{width:'auto', height='auto', objectFit: 'contain' }}
                  src={data.image.imgSrc}
                  alt={data.image.imgAlt}
                  rounded
                />
              </Col>
              <Col className='col-9'>
                <p
                  style={{
                    display: 'inline',
                    fontSize: '2rem',
                    textAlign: 'left',
                    lineHeight: '2.5rem',
                    fontWeight: 'bold'
                  }}
                  className='mb-2'
                  onClick={() => speak(data.productTitle, speakRate)}
                >
                  {data.productTitle}
                </p>
                <CardDeck className='my-3'>
                  {data.price ? (
                    <Card
                      style={{
                        fontSize: '1.8rem'
                      }}
                      className='py-2 shadow-sm'
                      onClick={() => speak(`Price: ${data.price}`, speakRate)}
                    >
                      <Card.Title
                        style={{ textAlign: 'left', verticalAlign: 'middle' }}
                        className='px-3 m-0'
                      >
                        Price
                      </Card.Title>
                      <Card.Body
                        style={{
                          fontSize: '1.8rem',
                          textAlign: 'right',
                          verticalAlign: 'middle'
                        }}
                        className='py-0 px-3 m-0'
                      >
                        {data.price}
                      </Card.Body>
                    </Card>
                  ) : (
                    <Card
                      style={{
                        fontSize: '1.8rem'
                      }}
                      className='py-2 shadow-sm'
                      onClick={() => speak(`No price found`, speakRate)}
                    >
                      <Card.Title
                        style={{ textAlign: 'left', verticalAlign: 'middle' }}
                        className='px-3 m-0'
                      >
                        Price
                      </Card.Title>
                      <Card.Body
                        style={{
                          fontSize: '1.8rem',
                          textAlign: 'right',
                          verticalAlign: 'middle'
                        }}
                        className='py-0 px-3 m-0'
                      >
                        No price found
                      </Card.Body>
                    </Card>
                  )}
                  {data.ratings.ratingValue ? (
                    <Card
                      style={{
                        fontSize: '1.8rem'
                      }}
                      className='py-2 shadow-sm'
                      onClick={() =>
                        speak(
                          `Rating: ${data.ratings.ratingValue} out of 5, ${data.ratings.ratingCount}`,
                          speakRate
                        )
                      }
                    >
                      <Card.Title
                        style={{ textAlign: 'left', verticalAlign: 'middle' }}
                        className='px-3 m-0'
                      >
                        Rating - {data.ratings.ratingCount}
                      </Card.Title>
                      <Card.Body
                        style={{
                          textAlign: 'right',
                          verticalAlign: 'middle'
                        }}
                        className='py-0 px-3 m-0'
                      >
                        {data.ratings.ratingValue} / 5
                      </Card.Body>
                    </Card>
                  ) : (
                    <Card
                      style={{
                        fontSize: '1.8rem'
                      }}
                      className='py-2 shadow-sm'
                      onClick={() => speak(`No ratings available`, speakRate)}
                    >
                      <Card.Title
                        style={{ textAlign: 'left', verticalAlign: 'middle' }}
                        className='px-3 m-0'
                      >
                        Rating
                      </Card.Title>
                      <Card.Body
                        style={{
                          fontSize: '1.6rem',
                          textAlign: 'right',
                          verticalAlign: 'middle'
                        }}
                        className='py-0 px-3 m-0'
                      >
                        No ratings available
                      </Card.Body>
                    </Card>
                  )}
                </CardDeck>
                {data.descriptions ? (
                  <Table className='shadow-sm' striped bordered hover>
                    <thead>
                      <tr>
                        <th
                          style={{
                            fontSize: '1.4rem',
                            textAlign: 'left',
                            verticalAlign: 'middle',
                            padding: '0.6rem'
                          }}
                          onClick={() =>
                            speak('Product Description', speakRate)
                          }
                        >
                          Product Description:
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.descriptions.map(desc => (
                        <tr onClick={() => speak(desc, speakRate)}>
                          <td
                            style={{
                              fontSize: '1.2rem',
                              textAlign: 'left',
                              verticalAlign: 'middle',
                              lineHeight: '1.6rem',
                              padding: '0.6rem',
                              fontWeight: '500'
                            }}
                          >
                            {desc}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                ) : (
                  <p
                    style={{
                      fontSize: '1.3rem',
                      textAlign: 'center',
                      lineHeight: '1.8rem',
                      fontWeight: '600'
                    }}
                    onClick={() =>
                      speak('No descriptions for item found', speakRate)
                    }
                  >
                    No descriptions for item found
                  </p>
                )}
              </Col>
            </Row>
            <Button
              style={{
                fontSize: '1.4rem'
              }}
              variant='primary'
              className='shadow'
              onClick={() => window.open(data.url, '_blank')}
              block
            >
              Buy Now!
            </Button>
          </div>
        </Container>
      </div>
      <p style={{ textAlign: 'center' }}>The actual webpage</p>
      <td
        style={{
          display: 'block',
          width: '95vw',
          margin: 'auto',
          padding: '50px',
          border: '1px solid black',
          borderRadius: '5px'
        }}
        dangerouslySetInnerHTML={{ __html: data.rawHtml }}
      />
    </>
  );
};

export default Webpage;
