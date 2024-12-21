import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='flex flex-col items-center border border-b-2'>
                <Image src='/Creed Logo.png' width={200} height={200} alt='logo' />
                <h1 className='font-bold'>Commerce Platform & Global Business Directory</h1>
                <h2>Empowering, Engaging and Serving the Ummah</h2>
            </nav>


        </>
    )
}

export default Navbar