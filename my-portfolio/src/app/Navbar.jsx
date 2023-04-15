import Link from 'next/link'

export default function Navbar() {

  return (
    <div id="nav-container">
      <Link href='/'>Home</Link>
      <Link href='/about'>About Me</Link>
      <Link href='/projects'>Projects</Link>
      <Link href='/resume'>Resume</Link>
      <Link href='/contact'>Contact</Link>
    </div>
  )
}