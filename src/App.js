import {Container, Row, Col} from 'react-bootstrap';
import circle from './circle.svg';
import Box from './box';
const App = () => {
    return (
        <Container fluis>
          <Row>
            <Col md="auto">
              <div className="fs-1">Tile</div>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <Row className="board">
                {}
                <Col>
                  <div>
                    <Box color="blue"/>
                  </div>
                </Col>
                <Col>
                  <div className="board">
                    <Box color="blue"/>
                  </div>
                </Col>
                <Col/>
                <Col/>
                <Col/>
              </Row>
            </Col>
          </Row>
        </Container>
  );
};

export default App;
