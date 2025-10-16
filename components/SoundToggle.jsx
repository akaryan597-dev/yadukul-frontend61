import {useState, useEffect} from 'react';

export default function SoundToggle(){ 
  const [muted, setMuted] = useState(true);
  useEffect(()=>{
    const audio = document.getElementById('vande-audio');
    if(audio) audio.muted = muted;
  },[muted]);
  return (
    <button aria-label='Toggle sound' onClick={()=>setMuted(!muted)} className='px-3 py-2 rounded bg-white/5 text-sm'>
      {muted ? 'Unmute' : 'Mute'}
    </button>
  )
}
