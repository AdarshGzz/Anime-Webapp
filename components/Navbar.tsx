import React from 'react'
import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='w-full px-2 sm:px-10 py-5 flex flex-row justify-between'>
            <div className='text-xl font-bold'>
                ANIME<span className='text-[#EF253B]'>VERSE</span>
            </div>
            <div className='flex flex-row md:gap-5 gap-2'>
                <Link href={'https://github.com/AdarshGzz'} className='px-5 py-1 rounded-md border border-solid border-[#EF253B] text-[#EF253B] flex items-center justify-center text-md sm:text-lg hover:bg-[#EF253B] hover:text-[#0F1117] duration-100'>
                    <Github />
                </Link>
                <Link href={'https://www.linkedin.com/in/adarsh-kumar-gupta-a96b54228/'} className='px-5 py-1 rounded-md border border-solid border-[#EF253B] text-[#EF253B] flex items-center justify-center text-md sm:text-lg hover:bg-[#EF253B] hover:text-[#0F1117] duration-100'>
                    <Linkedin />
                </Link>
            </div>
        </div>
    )
}

export default Navbar