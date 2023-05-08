import Navbar from './Navbar'
import Image from 'next/image'
import './globals.css'

export const metadata = {
  title: 'David Koll | Full-stack Developer'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Image src='/assets/construction.jpg'
          width={678}
          height={370}
          alt="under construction"
          style={{ width: '100vw', height: 'auto', maxHeight: '250px', display: 'flex' }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
