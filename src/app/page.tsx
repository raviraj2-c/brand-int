'use client';


import { useSearchParams } from 'next/navigation';
import WhoAreYou from './components/who-are-you/WhoAreYou';
import Login from './components/login/Login';



export default function Home() {
  const searchParams = useSearchParams();
  const view = searchParams.get('view');

  if (view === 'signin') {
    return <WhoAreYou />;
  }

  return <Login />;


  

}
