import React, { Fragment } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const UrlForm = () => {
  const onSubmit = e => {
    e.preventDefault();
    // Update URL state here
  };
  return (
    <Fragment>
      <h1 className="text-center">A Pager</h1>
      <Form>
        <Form.Group controlId="formBasicPassword">
          <Form.Control type="url" placeholder="Enter URL here" size="lg" />
        </Form.Group>
        <Button variant="primary" size="lg" type="submit" block>
          Submit
        </Button>
      </Form>
    </Fragment>
  );
};

export default UrlForm;
