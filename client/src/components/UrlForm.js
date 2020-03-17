import React, { useState } from 'react';

import { loadPage } from '../api/loadPage';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const UrlForm = ({ setData }) => {
  const [input, setInput] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    let res = await loadPage(input);
    console.log(res.productTitle.toString().trim());
    setData(res);
  };

  return (
    <Container>
      <h1 className='text-center'>A Pager</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='formUrl'>
          <Form.Control
            type='url'
            placeholder='Enter URL here'
            size='lg'
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </Form.Group>
        <Button variant='primary' size='lg' type='submit' block>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default UrlForm;
