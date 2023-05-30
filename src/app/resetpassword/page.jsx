import React from 'react'
import Links from '../forgetpassword/Linkss'
import Image from 'next/image'
import logo from '../images/footerimage.jpg'
import mainpic from '../images/passwordreset.webp'
import {MdEmail} from 'react-icons/md'



export default function page() {
  return (
    <main className='py-[70px] px-[20px] md:py-[70px] md:px-[100px]'>
      <div className='bg-slate-300 rounded-3xl flex'>
        <div className='bg-blue-400 space-y-14 py-9 px-8 rounded-3xl text-white md:w-[30vw]'>
            <Image src={logo} alt='logo' width={30} height={30} className='rounded-full' />
          <Image src={mainpic} alt='mainpic' width={500} height={500} />
        </div>
        <div className='px-10 md:px-48 py-40'>
          <div className='shadow-2xl grid rounded-2xl md:w-[30vw] md:h-[30vh]'>
            
            <div className='bg-white rounded-2xl px-10 py-6 md:px-14 md:py-8'>
                <fieldset className='text-blue-400 text-lg grid space-y-5'>
                 <label className='flex items-center gap-3 border border-slate-800 rounded-lg px-2'>
                  <MdEmail/><input type="text" placeholder='Email or ID' className='border-l border-l-slate-800 px-2 outline-none text-slate-800'/>
                  </label> 
                  <button type="submit" className='border bg-blue-700 py-2 px-9 w-fit rounded-lg text-slate-200'>
                    Reset Password
                  </button>
                </fieldset>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
