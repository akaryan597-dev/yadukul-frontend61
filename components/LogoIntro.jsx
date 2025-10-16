import { useEffect } from 'react';
import Lottie from 'react-lottie-player';
import logoData from '../public/assets/animations/logoIntro.json';

export default function LogoIntro({onFinish}){
  useEffect(()=>{ const t = setTimeout(()=>{ onFinish && onFinish(); }, 2800); return ()=>clearTimeout(t); },[onFinish]);
  return (<div className='fixed inset-0 z-50 flex items-center justify-center bg-[#083923]'>
    <div className='w-56'><Lottie loop={false} play animationData={logoData} /></div>
  </div>);
}
