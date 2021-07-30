import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Box from './Box';
const App = () => {

  const { colors, setColors } = useState([]);

  const getColors = (size) => {
    let randomColors = [];
    for (let i = 0; i < size; i++) {
      let r = Math.floor(Math.random() * 255);
      let g = Math.floor(Math.random() * 255);
      let b = Math.floor(Math.random() * 255);
      let color = `rgb(${r},${g},${b})`;
      randomColors.push(color);
    };
    console.log(randomColors[0])
    return randomColors[0];
  };

  useEffect(() => {
    let randomColors = getColors(1);
    //setColors([]);
    console.log("hi from use effect", colors);
  }, []);

  const selectTile = (e) => {
    let square = e.target;
    let div = square.closest("div");
    console.log("tile", div);
  };
  return (
    <Container fluid>
      <Row>
        <Col md="auto">
          <div className="fs-1">Tile</div>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Row className="board">
            <Col>
              <Box key={1} color={getColors(1)} onClick={selectTile} />
              <Box key={2} color="yellow" onClick={selectTile} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
