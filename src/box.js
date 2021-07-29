const Box = ({color}) => {
    return(
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="100%" height="100%" fill={color}/>
        </svg>
    );
};

export default Box;
