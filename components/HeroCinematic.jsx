import dynamic from 'next/dynamic';
import {useEffect, useState} from 'react';
const Lottie = dynamic(()=>import('react-lottie-player'), {ssr:false});

export default function HeroCinematic(){ 
  const [videoAvailable, setVideoAvailable] = useState(false);
  useEffect(()=>{ fetch('/assets/video/dairy_hero.webm', {method:'HEAD'}).then(r=>{ if(r.ok) setVideoAvailable(true); }).catch(()=>{}); },[]);
  return (
    <section className='relative w-full overflow-hidden rounded-lg mb-8'>
      {videoAvailable ? (
        <video className='w-full h-72 md:h-96 object-cover' autoPlay muted loop playsInline>
          <source src='/assets/video/dairy_hero.webm' type='video/webm' />
        </video>
      ) : (
        <div className='w-full h-72 md:h-96 bg-gradient-to-br from-[#0b2f24] to-[#072a22] flex items-center justify-center relative'>
          <Lottie loop play animationData={require('../public/assets/animations/milkWave.json')} style={{width:'100%',height:'100%'}} />
          <div className='absolute text-center px-4'>
            <h1 className='text-3xl md:text-5xl font-extrabold text-[#F7F1E6]'>Welcome to Yadukul Dairy</h1>
            <p className='text-neutral-300 mt-2 max-w-xl mx-auto'>Pure. Fresh. Farm to Home — Subscribe daily or weekly</p>
          </div>
        </div>
      )}
      <div className='absolute right-6 top-6'><button id='play-audio' className='px-3 py-2 rounded bg-white/10 text-sm'>Play Music</button></div>
    </section>
  )
}
