import React from 'react';
import Image from 'next/image';

const SimpleSlideCard = ({ pic, name }) => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Image src={pic} alt={name} width={300} height={300} />
      <h4>{name}</h4>
    </div>
  );
};

export default SimpleSlideCard;
