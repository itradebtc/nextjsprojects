import Image from 'next/image'
import logo from './images/footerimage.jpg'
import mainpic from './images/pic1.png'
import {SlSocialLinkedin, SlSocialInstagram, SlSocialFacebook, SlSocialTwitter} from 'react-icons/sl'
import {ImPinterest2} from 'react-icons/im'
import {BsTelephone} from 'react-icons/bs'
import {FiMail} from 'react-icons/fi'
import Links from './component/Links'

export default function Home() {
  const year = new Date().getFullYear()
  return (
    <main className='py-[70px] px-[20px] md:py-[70px] md:px-[100px]'>
      <div className='bg-slate-300 rounded-3xl flex'>
        <div className='bg-blue-400 md:space-y-32 py-9 px-8 rounded-3xl text-white md:w-[30vw]'>
          <div className='flex space-x-2 px-7'><Image src={logo} alt='logo' width={30} height={30} className='rounded-full' /> <span>Moment Icon</span></div>
          <Image src={mainpic} alt='mainpic' width={500} height={500} />
          <p className='text-[10px] text-center pt-10'>Copyright &copy; {year}, Moment Icon, All right reserved</p>
        </div>
        <div className='px-10 md:px-48 py-14 space-y-16'>
          <div className='shadow-2xl grid rounded-2xl w-[30vw] h-[50vh]'>
            <div className='py-3 rounded-t-2xl text-[20px]'>
                <fieldset>
                <Links />
                </fieldset>
            </div>
            <div className='bg-white rounded-2xl px-10 md:px-14 md:py-8'>
                <fieldset className='text-blue-400 grid space-y-5'>
                  <label className='border-b border-b-slate-800'>
                  Full Name <br />
                  <input type="text" placeholder='Aldrego' className='outline-none text-slate-800' />
                  </label> 
                  <label className='border-b border-b-slate-800'>
                  Email <br />
                  <input type="text" placeholder='Aldrego@email.com' className='outline-none text-slate-800' required/>
                  </label> 
                  <label className='border-b border-b-slate-800'>
                  Password <br />
                  <input type="password" placeholder='********' className='outline-none text-slate-800' required/>
                  </label> 
                  <button type="submit" className='border bg-blue-700 py-2 px-9 w-full rounded-lg text-slate-200'>
                    Sign Up
                  </button>
                  <p className='text-red-800 text-[10px] text-center pb-3'><a href="/"></a>I have an Account?</p>
                </fieldset>
            </div>
          </div>
          <div className='flex space-x-4 md:space-x-9 pl-14 md:pl-24 md:pt-6 cursor-pointer'>
          <SlSocialLinkedin/>
          <SlSocialInstagram/>
          <SlSocialFacebook/>
          <SlSocialTwitter/>
          <ImPinterest2/>
          </div>
          <div className='flex space-x-2 md:space-x-8 md:pl-14 text-[12px]'>
            <div className='flex justify-center items-center gap-3'>
              <BsTelephone/> 
              07086639336
            </div>
            <div className='flex justify-center items-center gap-3'>
              <FiMail/> 
              info@momenticon.com
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
