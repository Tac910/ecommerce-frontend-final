import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='w-full border-t   h-fit mt-20'>
      <div className='w-10/12 my-20 mx-auto flex  justify-between'>
        <div className='flex flex-col md:flex-row gap-16'>
          <div className='flex font-extralight flex-col gap-4'>
            <div className='font-semibold uppercase'>About</div>
            <div>Company</div>
            <div>Careers</div>
            <div>Services</div>
            <div>Help</div>
          </div>
          <div className='flex font-extralight flex-col gap-4'>
            <div className='font-semibold uppercase'>Gengars collection</div>
            <div>Sale of the day</div>
            <Link href={'/category/men'}>Mens Collection</Link>
            <Link href={'/category/women'}>Womens Collection</Link>
            <Link href={'/category/shoes'}>Shoes Collection</Link>
          </div>
          <div className='flex font-extralight flex-col gap-4'>
            <div className='font-semibold uppercase'>Contact</div>
            <div>contactus@gengar.in</div>
            <div>address</div>

          </div>
        </div>

        <div>
          <div className='flex uppercase font-extralight flex-col gap-4'>
            <div>Instagram</div>
            <div>Whatsapp</div>
            <div>Youtube</div>

          </div>
        </div>
      </div>




      <div className='bg-bblue p-3 text-sm text-wwhite w-full '>
        <div className='w-11/12 mx-auto flex justify-between'>
          <div>
            Copyright @copy 2023. All rights reserved.
          </div>
          <div className='flex gap-3'>
            <div>Terms & Conditions</div>
            <div>Privacy Policy</div>
          </div>


        </div>


      </div>
    </div>
  )
}
