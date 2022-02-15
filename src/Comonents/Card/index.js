import * as React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

function CardComponent()  {
  return (
    <Container>
      <Row>
          <Col sm={6}>
            <Card>
              <Card.Img
                variant="top"
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/146557059/original/23501d6e00d01ba86111dcfe28e65c112ecac4b6/create-high-quality-interior-renders.jpg"
              />
            </Card>
          </Col>
      </Row>
    </Container>
  )
}

export default CardComponent;