import Link from "next/link"

export default function page() {

  return (
    <>
      <h1>Contact</h1>
      <ul>
        <li><Link href="mailto: koll.david@gmail.com">E-mail</Link></li>
        <li><Link href="https://www.linkedin.com/in/davidkoll/">LinkedIn</Link></li>
        <li> <Link href="https://github.com/donkeykong718/">GitHub</Link></li>
      </ul>
    </>
  )

}