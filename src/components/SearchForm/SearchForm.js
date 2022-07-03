import { Form, Button, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

export const SearchForm = () => {
  const [inputValue, setInputValue] = useState(null);
  const handleSubjectChange = event => {
    setInputValue(event.currentTarget.value);
  };

  return (
    <Form className="me-3">
      <Row>
        <Col className="me-0">
          <Form.Control
            type="text"
            placeholder="search"
            name="searchQuery"
            value={inputValue || ''}
            onChange={handleSubjectChange}
          />
        </Col>
        <Col>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
