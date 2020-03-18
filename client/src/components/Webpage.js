import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
  const [speakRate, setSpeakRate] = useState(0.5);

  return (
    <>
      <div style={{ textAlign: "center" }}>
      <Container className='mb-2' style={{padding: "200px"}} fluid>
        <p style={{display: "inline"}} id="scroll_target_1">We have concised the page for you</p>
        <button className="read_button" onClick={() => speak("We have concised the page for you", speakRate)}>
          Speak
        </button>
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
              <h1 style={{display: "inline"}} >{data.productTitle}</h1>
              <button className="read_button" onClick={() => speak(data.productTitle, speakRate)}>
                Speak
              </button>
            </Col>
          </Row>
        </Jumbotron>
      </Container>
      </div>
      <p style={{textAlign: "center"}}>The actual webpage</p>
      <td style={{ display: "block", width: "95vw", margin: "auto", padding:"50px", border: "1px solid black", borderRadius: "5px"}} dangerouslySetInnerHTML={{ __html: data.rawHtml }} />
    </>
  );
};

export default Webpage;
