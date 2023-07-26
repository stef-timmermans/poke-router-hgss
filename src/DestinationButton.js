import React from 'react';

const DestinationButton = ({ location, onHover, onLeave, onSelect }) => {
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
          onClick={() => onSelect(location.id)}
        />
      )}
    </>
  );
};

export default DestinationButton;
