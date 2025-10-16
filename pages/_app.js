import Head from 'next/head';
import '../styles/globals.css'
export default function App({Component, pageProps}){
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.png' />
        <meta name='theme-color' content='#083923' />
      </Head>
      <audio id='vande-audio' src='/assets/audio/vande_mataram.mp3' preload='none' />
      <Component {...pageProps} />
      <script dangerouslySetInnerHTML={{__html:`
        document.addEventListener('click', function(e){
          const btn = document.getElementById('play-audio');
          if(btn && e.target && btn.contains(e.target)){
            const a = document.getElementById('vande-audio');
            if(a){ if(a.paused) a.play(); else a.pause(); }
          }
        });
      `}} />
    </>
  )
}
