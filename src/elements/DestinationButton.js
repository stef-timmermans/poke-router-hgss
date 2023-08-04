/*
  Component: DestinationButton
  Description:
    A button that is placed on the map to represent a destination.
    When the button is hovered over, a tooltip appears with the name
    of the destination. When the button is clicked, the user is
    navigated to the location page for that destination. Some locations
    have multiple buttons to allow for more complex shapes than simply
    rectangles.

    Coordinate inputs are sourced from data/locations.json and are inclusive
    lower bounds and inclusive upper bounds. For example, a button with the
    following coordinates: [[0,0],[10,10]] would be an 11x11 pixel square with
    its top left corner at (0,0) and its bottom right corner at (10,10).
*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DestinationButton = ({ location, onHover, onLeave }) => {
  const navigate = useNavigate();
  const urlDashedLocationName = location.name.replace(/\s+/g, '-'); // Replace spaces with hyphens
  const [isHovering, setIsHovering] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX: x, clientY: y } = event;
    setTooltipPosition({ x: x + 20, y });
  }

  return (
    <>
      {location.shapes.map((shape, index) => 
        <button
          key={index}
          style={{
            /*
              Load the button with the location's shape's coordinates, which are 
              relative to the map's container. The start and end coordinates are
              inclusive. Some locations require multiple shapes to be defined but
              will ultimately function more or less as a single button other than
              tooltip behavior.
            */
            position: 'absolute',
            top: `${shape[0][0]}px`,
            left: `${shape[0][1]}px`,
            width: `${shape[1][0] - shape[0][0] + 1}px`,
            height: `${shape[1][1] - shape[0][1] + 1}px`,

            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
          onMouseEnter={(event) => {
            setIsHovering(true);
            onHover(location.id);
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => {
            setIsHovering(false);
            onLeave();
          }}
          onClick={() => navigate(`/location/${urlDashedLocationName}`)}
        />
      )}

      <div
        style={{
          visibility: isHovering ? 'visible' : 'hidden',
          position: 'fixed',
          top: `${tooltipPosition.y}px`,
          left: `${tooltipPosition.x}px`,
          padding: '5px',
          backgroundColor: 'white',
          color: 'black',
          borderRadius: '5px',
          opacity: isHovering ? 1 : 0,
          transition: 'opacity 0.2s ease-in-out, visibility 0.2s ease-in-out',
          pointerEvents: 'none',
        }}
      >
        {location.name}
      </div>
    </>
  );
};

export default DestinationButton;
