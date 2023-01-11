import { FC } from 'react'
import { Button, Col, Container, Row } from "react-bootstrap"

type Props = {}

const Index: FC = (props: Props) => {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2>Notes</h2>
        </Col>
        <Col xs="auto" >
          <Button size="lg">Create</Button>
          <Button size="lg" variant="outline-secondary" className="ms-3" >Edit Tags</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Index