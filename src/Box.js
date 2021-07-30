import { useState } from 'react';

const Box = ({ color, onClick }) => {

  const [selected, setSelected] = useState(false);

  let style = {
    fill: color,
    border: "0.1rem solid red"
  };

  let box = {
    fill: "white",
    strokeWidth: "5%",
    stroke: "green",
    fillOpacity: "0"
  };

  const selectTile = () => {
    setSelected(!selected);
  };

  return (
    <div className="box" onClick={selectTile}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="2.5" y="2.5" width="95%" height="95%" style={style} />
        <rect x="20" y="30" width="60%" height="60%" fill="red" />
        <rect x="35" y="55" width="30%" height="30%" fill="white" />
        {selected && (<rect x="0" y="0" width="100%" height="100%" style={box} />)}

      </svg>
    </div>
  );
};

export default Box;
