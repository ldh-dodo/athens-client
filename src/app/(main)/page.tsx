import { redirect } from 'next/navigation';

export default async function Page() {
  redirect('/home');
  return null;
}