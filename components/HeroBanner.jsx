import Link from 'next/link';
import React from 'react'

export default function HeroBanner() {
  const image = 'https://images.unsplash.com/photo-1653759718574-de2769592e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
  const cardStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (

    <div className='lg:w-10/12 flex my-10 flex-col justify-between h-[22rem]  md:h-[24rem] mx-auto' style={cardStyle}>
      <div className='p-6 font-semibold text-3xl lg:text-6xl mix-blend-difference text-white'> Get everything you <br />
        need for your fashion <br />
        look and lifestyle.
      </div>
      <div className='p-6 flex flex-row-reverse'>
        <Link href={'/category/all'} className='bg-white mix-blend-difference text-2xl text-bblack uppercase w-fit px-6 py-2 rounded-full '>
          Shop now
        </Link>
      </div>
    </div>
  )
}
