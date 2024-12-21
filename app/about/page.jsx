import React from 'react'

const About = () => {
    return (
        <>
            <h1 className='font-bold text-center text-2xl my-7'>About Us</h1>
            <div className='flex items-center justify-center mb-5 p-3'>
                <section className='border p-2 lg:w-1/2'>
                    <h1 className='mb-4'> <span className='font-bold'>CREED</span> is a <span className='font-bold'>Commerce Platform & Global Business Directory Serving The Muslim Community</span></h1>
                    <p className='font-bold'>Our mission is to:</p>
                    <ol className='list-decimal pl-5'>
                        <li>Connect Businesses to Muslims (B2C and B2B)</li>
                        <ol className='list-[lower-alpha] pl-5'>
                            <li><span className='font-bold italic'>Business to Consumer</span> - Connect with your customer and grow your business!</li>
                            <li><span className='font-bold italic'>Business to Business</span> - Connect to our CREED B2B Ecosystem!</li>
                        </ol>
                        <li>Engage, empower, and serve the ummah</li>
                    </ol>

                    <p className='mt-3'>Simply put, if you are a <span className='italic'>Muslim owned, Muslim operated,</span> or a <span className='italic'>business that has a specific offering for the Muslim Community,</span> your business should be on <span className='font-bold'>CREED</span></p>

                    <h1 className='font-bold mt-5'>The CREED Difference</h1>
                    <ol className='list-decimal pl-5'>
                        <li>We only list businesses that serve the Muslim Community</li>
                        <li>We do not work with businesses whose main source of income does not align with Islamic principles</li>
                        <li>We aim to screen our listings to ensure that there is:</li>
                        <ol className='list-[lower-alpha] pl-5'>
                            <li>No adult content</li>
                            <li>No usury/interest</li>
                            <li>No alcohol</li>
                            <li>No illegal drugs</li>
                            <li>No gambling</li>
                            <li>No explicitly stated Haram (forbidden) products or services</li>
                        </ol>
                        <li>Family friendly, easily accessible, and global: No matter where you are, easily find businesses serving you (the muslim consumer) at your fingertips</li>
                    </ol>
                </section>
            </div>


        </>
    )
}

export default About