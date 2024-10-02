'use client';

import Image from 'next/image';
import React, { useRef } from 'react';

const Card = ({ i, title, description, src, link, color }) => {
  const container = useRef(null);

  return (
    <div
      ref={container}
      className='flex items-center justify-center scrollable-section top-0 mt-8' // Added margin-top for spacing
    >
      <div
        style={{ backgroundColor: color }}
        className='relative w-[90%] h-[200px] md:w-[800px] md:h-[400px] lg:w-[1000px] lg:h-[500px] rounded-xl'
      >
        <Image
          className='object-cover rounded-xl'
          fill
          src={`/images/${src}`}
          alt='image'
        />
      </div>
    </div>
  );
};

export default Card;
