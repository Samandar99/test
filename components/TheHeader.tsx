import Link from 'next/link'
import React from 'react'

export default function TheHeader() {
    return (
        <header className='header'>
            <Link href="/" className='header__link'>Home</Link>
            <Link href="/blog" className='header__link'>Blog</Link>
            <Link href="/about" className='header__link'>About</Link>
        </header>
    )
}
