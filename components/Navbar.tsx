import Link from 'next/link'
import Search from './Search'

export default function Navbar() {
  return (
    <nav className='bg-slate-600 p-4  sticky top-0 drop-shadow-xl'>
      <div className='container mx-auto'>
        <div className='flex justify-between flex-col md:flex-row'>
      <h1 className='text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0'>
        <Link href="/">WikiRocket</Link>
      </h1>
      <Search />
      </div>
      </div>
    </nav>
  )
}
