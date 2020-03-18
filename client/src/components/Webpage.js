import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import speak from "../api/speech"

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
  // speak rate of 0(slowest) - 2(fastest)
  const [speakRate, setSpeakRate] = useState(1);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <Container className='mb-2' style={{ padding: '200px' }} fluid>
          <p
            style={{fontSize: '1.2rem' }}
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
   
        <Form style={{display:"inline"}}>
          <Form.Group controlId="formBasicRangeCustom" style={{display:"inline"}} >
            <Form.Label style={{textAlign: "center", display:"inline", marginLeft: "15px", marginRight: "10px"}} onClick={() => speak('Speak Rate', speakRate)} >Speak Rate:</Form.Label>
            <Form.Control style={{textAlign: "center", display:"inline", width: "15vw", margin: "auto"}} type="range" value={speakRate * 50} onChange={(e) => setSpeakRate(e.target.value * 0.02)}/>
          </Form.Group>
        </Form>
    
          <Jumbotron
            style={{
              border: '1px solid black',
              backgroundColor: 'white',
              borderRadius: '5px'
            }}
            className='p-3 mb-2'
          >
            <Row style={{ margin: '2rem' }}>
              <Col className='col-3'>
                <Image
                  src={data.image.imgSrc}
                  alt={data.image.imgAlt}
                  maxWidth='400px'
                  maxHeight='400px'
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
                  onClick={() => speak(data.productTitle, speakRate)}
                >
                  {data.productTitle}
                </p>
                <div
                  style={{
                    backgroundColor: '#FDFD96',
                    borderRadius: '5px',
                    padding: '1rem',
                    margin: '0.5rem'
                  }}
                  onClick={() => speak(`Price: ${data.price}`, speakRate)}
                >
                  <p
                    style={{
                      fontSize: '1.8rem',
                      textAlign: 'left',
                      fontWeight: '600'
                    }}
                  >
                    Price: {data.price}
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor: '#AEC6CF',
                    borderRadius: '5px',
                    padding: '1rem',
                    margin: '0.5rem'
                  }}
                >
                  <p
                    style={{
                      display: 'inline',
                      fontSize: '1.2rem',
                      textAlign: 'left',
                      fontWeight: 'bold'
                    }}
                    onClick={() =>
                      speak(
                        `Rating: ${data.ratings.ratingValue} out of 5`,
                        speakRate
                      )
                    }
                  >
                    Rating: {data.ratings.ratingValue} out of 5{' '}
                  </p>
                  <p
                    style={{
                      display: 'inline',
                      fontSize: '1.2rem',
                      textAlign: 'left',
                      fontWeight: '500'
                    }}
                    onClick={() =>
                      speak(`${data.ratings.ratingCount}`, speakRate)
                    }
                  >
                    {data.ratings.ratingCount}
                  </p>
                </div>
                <p
                  className='mt-4'
                  style={{
                    fontSize: '1.5rem',
                    textAlign: 'left',
                    fontWeight: '600'
                  }}
                  onClick={() => speak('Product Description', speakRate)}
                >
                  Product Description:
                </p>
                <div
                  style={{
                    display: 'block',
                    margin: 'auto',
                    padding: '1rem 1rem 1rem 1rem',
                    border: '1px solid black',
                    borderRadius: '5px'
                  }}
                >
                  {data.descriptions ? (
                    data.descriptions.map(desc => (
                      <p
                        className='mb-4'
                        style={{
                          fontSize: '1.3rem',
                          textAlign: 'left',
                          lineHeight: '1.8rem',
                          fontWeight: '500'
                        }}
                        onClick={() => speak(desc, speakRate)}
                      >
                        {desc}
                      </p>
                    ))
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
                </div>
              </Col>
            </Row>
          </Jumbotron>
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
