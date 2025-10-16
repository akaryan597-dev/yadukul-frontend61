import Header from '../components/Header';
import dynamic from 'next/dynamic';
const HeroCinematic = dynamic(()=>import('../components/HeroCinematic'), {ssr:false});
const AnimatedCounters = dynamic(()=>import('../components/AnimatedCounters'), {ssr:false});
const Hero = dynamic(()=>import('../components/Hero'), {ssr:false});
import Link from 'next/link';
export default function Home(){ return (
  <div className='min-h-screen hero-bg bg-black/40'>
    <Header />
    <main className='max-w-6xl mx-auto py-8 px-6 text-white'>\n      <HeroCinematic />
      <div className='mb-8 rounded-lg overflow-hidden'><object type='image/svg+xml' data='/images/hero-anim.svg' className='w-full h-64 md:h-96'></object></div>
      <div className='grid md:grid-cols-2 gap-8 items-center'>
        <section>
          <h1 className='text-4xl md:text-5xl font-extrabold leading-tight'>Taza Doodh. Seedha Farm se.</h1>
          <p className='mt-4 text-neutral-300'>Yadukul Dairy, Noida — Fresh cow & buffalo milk, dahi, paneer and desi ghee. Subscribe daily, weekly or monthly.</p>
          <div className='mt-6 flex gap-4'>
            <Link href='/products'><a className='px-5 py-3 rounded-lg bg-primary text-black font-semibold'>Products Dekho</a></Link>
            <Link href='/about'><a className='px-5 py-3 rounded-lg border border-white/10'>About</a></Link>
          </div>
          <div className='mt-8 grid grid-cols-2 gap-3 text-sm text-neutral-400'>
            <div className='card p-4 rounded-lg'>Free Home Delivery</div>
            <div className='card p-4 rounded-lg'>Fresh Daily Milk</div>
            <div className='card p-4 rounded-lg'>Subscription Plans</div>
            <div className='card p-4 rounded-lg'>Inventory & Delivery Tracking</div>
          </div>
        </section>
        <section className='p-6 bg-black/50 rounded-lg'>
          <h3 className='text-xl font-semibold'>Top Products</h3>
          <div className='mt-4 grid grid-cols-1 gap-3'>
            <div className='p-3 bg-neutral-900 rounded flex justify-between'>
              <div><div className='font-semibold'>Cow Milk</div><div className='text-sm text-neutral-400'>1 litre • ₹77</div></div>
              <div className='text-neutral-400'>In stock</div>
            </div>
            <div className='p-3 bg-neutral-900 rounded flex justify-between'>
              <div><div className='font-semibold'>Buffalo Milk</div><div className='text-sm text-neutral-400'>1 litre • ₹82</div></div>
              <div className='text-neutral-400'>In stock</div>
            </div>
            <div className='p-3 bg-neutral-900 rounded flex justify-between'>
              <div><div className='font-semibold'>Dahi (Curd)</div><div className='text-sm text-neutral-400'>1 kg • ₹130</div></div>
              <div className='text-neutral-400'>In stock</div>
            </div>
          </div>
        </section>
      </div>
    \n      <div className='mt-8'><AnimatedCounters /></div>\n    </main>
  </div>
) }