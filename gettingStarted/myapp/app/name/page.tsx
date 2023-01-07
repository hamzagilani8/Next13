import Link from 'next/link'

export default function Name() {
  return (
    <div>
      <h2>Hello world Name!!</h2>
        <br />
    <Link href="/">Go to Home Page</Link>
        <br />
    <Link href="/name">Go to Name Page</Link>
        <br />
    <Link href="/about-us">Go to About Page</Link>
        <br />
    </div>
  )
}