import React from 'react'
import { IoChevronForwardOutline } from 'react-icons/io5'

export default function SidebarItem({ title, selected, handleChange, icon }) {
    return (
        <label>
            <input type='radio' name='sidebar' value={title} checked={selected === title} onChange={handleChange} />
            <div>
                {icon}
                <h6>{title}</h6>
                <IoChevronForwardOutline className='item-icon' />
            </div>
        </label>
    )
}
