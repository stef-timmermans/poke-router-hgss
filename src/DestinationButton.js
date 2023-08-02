/*
  Component: LocationButton
  Description:
    The LocationButton component stores the
    button required to navigate to a location.
    Some locations require multiple buttons to
    be defined as a more complex shape (for example,
    and L-shaped location requires two buttons to
    be defined). The LocationButton component
    reads in from the locations data file to
    determine the location's shape and coordinates
    and renders the button accordingly.
*/

import React from 'react';
import { useNavigate } from 'react-router-dom';

const DestinationButton = ({ location, onHover, onLeave }) => {
  const navigate = useNavigate();
  const urlDashedLocationName = location.name.replace(/\s+/g, '-'); // Replace spaces with hyphens

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
            width: `${shape[1][0] - shape[0][0]}px`,
            height: `${shape[1][1] - shape[0][1]}px`,
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
          onMouseEnter={() => onHover(location.id)}
          onMouseLeave={onLeave}
          onClick={() => navigate(`/location/${urlDashedLocationName}`)}
          title={location.name} // Add the location name as the button title
        />
      )}
    </>
  );
};

export default DestinationButton;
