import {useEffect, useState} from 'react';

function useCount(target, duration=1200){
  const [count, setCount] = useState(0);
  useEffect(()=>{
    let start = 0; const step = Math.ceil(target / (duration/16));
    const id = setInterval(()=>{ start += step; if(start>=target){ setCount(target); clearInterval(id);} else setCount(start); }, 16);
    return ()=>clearInterval(id);
  },[target,duration]);
  return count;
}

export default function AnimatedCounters({sales=12340, milk=210, orders=42}){
  const s = useCount(sales); const m = useCount(milk); const o = useCount(orders);
  return (
    <div className='grid grid-cols-3 gap-4'>
      <div className='p-4 card rounded'><div className='text-sm'>Total Sales</div><div className='text-xl font-bold'>₹{s}</div></div>
      <div className='p-4 card rounded'><div className='text-sm'>Milk Sold (L)</div><div className='text-xl font-bold'>{m} L</div></div>
      <div className='p-4 card rounded'><div className='text-sm'>Orders</div><div className='text-xl font-bold'>{o}</div></div>
    </div>
  )
}
