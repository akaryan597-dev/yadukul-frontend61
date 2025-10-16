import axios from 'axios';
export default async function handler(req,res){ const base = process.env.BACKEND_URL || 'http://localhost:5000'; try{ const r = await axios.get(base + '/api/products'); res.status(200).json(r.data);}catch(e){ res.status(200).json([]);} }
