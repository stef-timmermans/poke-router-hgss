import React from 'react';
import { useNavigate } from 'react-router-dom';

const DestinationButton = ({ location, onHover, onLeave }) => {
  const navigate = useNavigate();

  return (
    <>
      {location.shapes.map((shape, index) => 
        <button
          key={index}
          style={{
            position: 'absolute',
            top: `${shape[0][0]}px`,
            left: `${shape[0][1]}px`,
            width: `${shape[1][0] - shape[0][0]}px`,
            height: `${shape[1][1] - shape[0][1]}px`,
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
          onMouseEnter={() => onHover(location.id)}
          onMouseLeave={onLeave}
          onClick={() => navigate(`/location/${location.id}`)}
        />
      )}
    </>
  );
};

export default DestinationButton;
