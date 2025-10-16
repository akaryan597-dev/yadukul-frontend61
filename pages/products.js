import useSWR from 'swr';
import axios from 'axios';
import Header from '../components/Header';
const fetcher = url => axios.get(url).then(r=>r.data);
export default function Products(){ const {data} = useSWR('/api/products', fetcher);
  return (<div className='min-h-screen bg-[#071025] text-white'><Header /><main className='max-w-6xl mx-auto p-6'>
    <h2 className='text-2xl mb-4'>Products</h2>
    {!data && <p>Loading...</p>}
    {data && <div className='grid md:grid-cols-3 gap-4'>
      {data.map(p=>(<div key={p._id} className='p-4 bg-neutral-900 rounded-lg product-anim'>
        <div className='font-semibold'>{p.name}</div>
        <div className='text-sm text-neutral-400'>{p.unit} • ₹{p.price}</div>
      </div>))}
    </div>}
  </main></div>) }
