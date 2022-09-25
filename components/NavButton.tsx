import React from 'react'

interface Props {
    title: string;
    isActive?: boolean;
}

function NavButton({ title, isActive }: Props) {
    return (
        <button className={`${isActive && "bg-[#D2000B]"
            } hover:bg-[#D2000B] text-white py-1 px-2 rounded text-s `}>
            {title}
        </button>
    )
}

export default NavButton