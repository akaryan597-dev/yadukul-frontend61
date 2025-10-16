import Link from 'next/link';
export default function Header(){ return (
  <header className='w-full py-4 px-6 flex items-center justify-between bg-transparent'>
    <div className='flex items-center gap-3'>
      <div className='w-12 h-12 rounded-full bg-white/5 flex items-center justify-center'><img src='/images/yadukul_logo.jpg' alt='Yadukul' className='w-11 h-11 object-cover rounded'/></div>
      <div className='text-white font-semibold'>Yadukul Dairy</div>
    </div>
    <nav className='hidden md:flex gap-6 text-sm text-neutral-300'>
      <Link href='/'><a>Home</a></Link>
      <Link href='/products'><a>Products</a></Link>
      <Link href='/about'><a>About</a></Link>
      <Link href='/owner'><a>Owner</a></Link>
    </nav>
  </header>
) }