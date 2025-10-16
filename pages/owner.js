import Header from '../components/Header';
export default function Owner(){ return (<div className='min-h-screen bg-[#071025] text-white'><Header /><main className='max-w-6xl mx-auto p-6'>
  <h1 className='text-2xl font-bold'>Owner Dashboard (Demo)</h1>
  <p className='text-neutral-400'>This is a demo placeholder for the Owner panel — full dashboards are available in the backend APIs.</p>
  <div className='mt-6 grid md:grid-cols-3 gap-4'>
    <div className='p-4 card rounded-lg'>Total Sales<br/><span className='text-xl font-semibold'>₹12,340</span></div>
    <div className='p-4 card rounded-lg'>Cow Milk Sales<br/><span className='text-xl font-semibold'>120 L</span></div>
    <div className='p-4 card rounded-lg'>Buffalo Milk Sales<br/><span className='text-xl font-semibold'>90 L</span></div>
  </div>
</main></div>) }
