import { RiStarSFill } from 'react-icons/ri';

import React from 'react';

interface qtStars {
  stars: number;
}

function Stars({ stars }: qtStars) {
  return (
    <ul className="flex flex-row text-lightApricotSalmon">
      {stars ? (
        Array.from({ length: stars }, (_, index) => (
          <li key={index}>
            <RiStarSFill className="size-6 drop-shadow-md" />
          </li>
        ))
      ) : (
        <li>empty</li>
      )}
    </ul>
  );
}

export default Stars;
