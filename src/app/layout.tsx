import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Piadas sobre a lenda de Chuck Norris',
  description: 'Generated by create next app',
}

export default function RootLayout({children,}: {
  children: React.ReactNode
}) {
  const linkStyles = `hover:text-red-400 text-sm md:text-2xl`
  const bodyStyles = `flex flex-col md:flex-row items-center justify-center min-h-screen  bg-gray-800`
  return (
    <html lang="en">
      <body className={bodyStyles}>
          <header className='w-fit md:w-1/5 min-h-screen flex flex-col items-center justify-between px-10 bg-yellow-200'>
            <nav className='flex flex-col gap-11 w-full my-auto text-zinc-800 text-xl'>
              <Link className= {linkStyles} href="/">Home page</Link>
              <Link className= {linkStyles} href="/jokes">Fatos</Link>
              <Link className= {linkStyles} href="/jokescategory">Fatos por categoria</Link>
            </nav>
          </header>
        <main className='flex flex-grow items-center justify-center'>
        {children}
        </main>
        </body>
    </html>
  )
}
