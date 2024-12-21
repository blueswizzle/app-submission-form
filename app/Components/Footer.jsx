import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='flex flex-col items-center justify-center border-t-2 p-4'>
                <div>
                    <Link href='/' className='text-xl'>Home</Link>
                    <span className='text-gray-400 text-2xl font-medium'> | </span>
                    <Link href='/about' className='text-xl'>About Us</Link>
                </div>

                <p className='text-center text-sm'>
                    Copyright &copy; {new Date().getFullYear()} OUR CREED - All rights reserved.
                </p>

            </footer>
        </>
    )
}

export default Footer