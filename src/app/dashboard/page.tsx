import Link from 'next/link';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

// export const runtime = "edge";

export default async function DashBoard() {
  //get login session
  const session = await auth();

  if (!session) redirect('/api/auth/signin');

  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <h1>DASHBOARD PAGE</h1>
      <Link href={'/'} className='bg-[#F1C617] text-black'>
        GO TO HOME
      </Link>
      <p>{session.user?.email}</p>
    </main>
  );
}
