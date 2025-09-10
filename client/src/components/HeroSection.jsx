
import { assets } from '../assets/assets'
import { ArrowRight, CalendarIcon, ClockIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import image from '../../src/assets/image.jpg'
import image2 from '../../src/assets/image2.jpg'
import image3 from '../../src/assets/image3.jpg'
import image4 from '../../src/assets/image4.jpg'
import React, { useEffect, useState } from 'react'

const images = [image, image2, image3, image4]

const HeroSection = () => {
  const navigate = useNavigate()
  const [bgIndex, setBgIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      ; // <-- keep previous line ending
        // Add a fade-out effect before changing the image
        setBgIndex((prev) => (prev + 1) % images.length) }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='relative h-screen'>
      {/* Auto-sliding Background Image */}
      <img
        src={images[bgIndex]}
        alt={`Background ${bgIndex + 1}`}
        className="absolute inset-0 w-full h-full object-cover opacity-60 -z-10 transition-all duration-3000"
      />

      <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 h-full'>
        <img src={assets.marvelLogo} alt="" className="max-h-11 lg:h-11 mt-20"/>
        <h1 className='text-5xl md:text-[70px] md:leading-18 font-semibold max-w-110'>Deadpool & <br /> Wolvorine</h1>
        <div className='flex items-center gap-4 text-gray-300'>
          <span>Action | Adventure | Sci-Fi</span>
          <div className='flex items-center gap-1'>
              <CalendarIcon className='w-4.5 h-4.5'/> 2024
          </div>
          <div className='flex items-center gap-1'>
              <ClockIcon className='w-4.5 h-4.5'/> 2h 8m
          </div>
        </div>
        <p className='max-w-md text-gray-300'>In a chaotic multiverse where timelines collapse and realities collide, Deadpool joins forces with Wolverine on a reckless mission that could change everything</p>
        <button onClick={()=> navigate('/movies')} className='flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'>
           Explore Movies
           <ArrowRight className="w-5 h-5"/>
        </button>
      </div>
    </div>
  )
}

export default HeroSection
