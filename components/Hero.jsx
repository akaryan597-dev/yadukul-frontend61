import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
const Lottie = dynamic(()=>import('react-lottie-player'), {ssr:false});

export default function Hero(){ 
  const [showVideo, setShowVideo] = useState(false);
  useEffect(()=>{
    // If video exists, prefer video; else show lottie
    fetch('/assets/video/dairy_hero.webm', {method:'HEAD'}).then(r=>{ if(r.ok) setShowVideo(true); }).catch(()=>{});
  },[]);
  return (
    <section className='w-full rounded-lg overflow-hidden mb-8'>
      {showVideo ? (
        <video className='w-full h-64 md:h-96 object-cover' autoPlay muted loop playsInline>
          <source src='/assets/video/dairy_hero.webm' type='video/webm' />
        </video>
      ) : (
        <div className='w-full h-64 md:h-96 bg-[#083923] flex items-center justify-center'>
          <Lottie loop play animationData={require('../public/assets/animations/milkWave.json')} style={{width:'100%',height:'100%'}} />
          <div className='absolute text-center'>
            <h1 className='text-3xl md:text-5xl font-extrabold text-[#00C2A8]'>Pure. Fresh. Local.</h1>
            <p className='text-neutral-300 mt-2'>From Yadukul Dairy to your home — Subscribe daily or weekly</p>
          </div>
        </div>
      )}
    </section>
  )
}
