import React from 'react'
import Cart from './components/cart'
import Link from 'next/link'

function About() {
  return (
  <>
    <div>About</div>
    <Cart />
    <Link href='/'> home</Link>
  </>
  )
}

export default About