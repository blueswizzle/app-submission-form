import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='flex flex-col items-center border-b-2 my-2'>
                <Image src='/logo.png' width={125} height={125} alt='logo' />
                <h1 className='font-bold'>Commerce Platform & Global Business Directory</h1>
                <h2 className='mb-2'>Empowering, Engaging and Serving Our Ummah</h2>
            </nav>


        </>
    )
}

export default Navbar