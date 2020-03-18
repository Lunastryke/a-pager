import React, { useState } from 'react';

import { loadPage } from '../api/loadPage';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const UrlForm = ({ setData }) => {
  const [input, setInput] = useState('');

  const handleSubmit = async e => {
    if (input) {
      e.preventDefault();
      let result = await loadPage(input);
      setData(result);
    }
  };

  return (
    <Container style={{ /*backgroundColor: "black",*/ padding: "130px 130px 340px 130px"}}>
      <h1 style={{ marginBottom: "30px"}} className='text-center'>A Pager</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='formUrl'>
          <Form.Control
            style={{fontSize: "14px"}}
            type='url'
            placeholder='Enter URL here'
            size='lg'
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </Form.Group>
        <Button style={{fontSize: "12px"}} variant='primary' size='lg' type='submit' block>
          Simplify
        </Button>
      </Form>
    </Container>
  );
};

export default UrlForm;
