import React from 'react';
import Link from 'next/link';

function Category({ image, text }) {
  return (
    <div className='flex flex-col relative group'>
      <img
        className='w-[15rem] h-[25rem] group-hover:w-[25rem] group-hover:grayscale-0 object-cover grayscale duration-500'
        src={image}
        alt='Category Image'
      />
      <Link href={`/category/${text}`}>
        <button className='px-5 uppercase  text-xs lg:text-sm duration-500 py-2 rounded-full whitespace-nowrap bg-black text-white absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          Shop {text}
        </button>
      </Link>
    </div>
  );
}

export default Category;
