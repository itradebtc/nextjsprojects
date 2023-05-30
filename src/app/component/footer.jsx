import React from 'react'
import Image from 'next/image'
import pic from '../images/footerimage.jpg'

export default function Footer() {
  return (
    <div>
        <Image src={pic} alt='my footer logo' width={70} height={70} className='rounded-full md:ml-[70px]'/>
    </div>
  )
}
