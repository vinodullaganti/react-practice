import * as React from 'react';
import { Container, Accordion, Row, Col } from 'react-bootstrap';

function AccordionComponent()  {
  return (
    <Container>
      <Row>
          <Col sm={6}>
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                Accordion Body #1
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                Accordion Body #2
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </Col>
      </Row>
    </Container>
  )
}

export default AccordionComponent;