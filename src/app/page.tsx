import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <h1>HOME PAGE</h1>
      <Link href={'/dashboard'} className='bg-[#F1C617] text-black'>
        GO TO DASHBOARD
      </Link>
    </main>
  );
}
