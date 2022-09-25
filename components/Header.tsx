import React from 'react'
import NavButton from './NavButton'
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";

function Header() {
    return (
        <header className=''>
            {/* LEFT */}
            <div className='flex items-center space-x-2'>
                <img
                    className='rounded-full h-20 w-20'
                    src='https://i.imgur.com/4h7mAu7.png'
                    alt=""
                />
                <div>
                    <h1 className='text-lg text-white font-bold'>EtherSiim Lottery</h1>
                    <p className='text-xs text-emerald-500 truncate'>User....</p>
                </div>
            </div>

            {/* CENTER */}
            <div>
                <div className='bg-[#0A1F1C] p-4 space-x-2'>
                    <NavButton isActive title='Buy Ticket' />
                    <NavButton title='Logout' />
                </div>
            </div>

            {/* RIGHT */}
            <div>
                <div className='bg-[#0A1F1C] p-4 space-x-2'>
                    <Bars3BottomRightIcon className='h-8 w-8 mx-auto text-white cursor-pointer' />
                </div>
            </div>
        </header>
    )
}

export default Header

