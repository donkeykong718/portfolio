import Link from 'next/link'

export default function page() {
  return (
    <>
      <h1>Resume</h1>
      <object data="/uploads/David Koll Resume.pdf" type="application/pdf" width="100%" height="500px" />
      <Link href="/uploads/David Koll Resume.pdf">Download as PDF</Link>
    </>
  )

}