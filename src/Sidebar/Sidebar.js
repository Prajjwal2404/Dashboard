import React, { useEffect, useState } from 'react'
import { RiSettingsLine } from 'react-icons/ri'
import { AiOutlineClose } from 'react-icons/ai'
import { IoKeyOutline, IoCubeOutline, IoPersonOutline, IoWalletOutline, IoPricetagsOutline, IoHelpCircleOutline } from 'react-icons/io5'
import { IoIosArrowDown } from 'react-icons/io'
import SidebarItem from '../components/SidebarItem'
import profile from '../images/profile.jpg'
import './Sidebar.css'

export default function Sidebar({ menuRef, isMobile }) {

    const [dashboard, setDashboard] = useState('Dashboard')

    function handleChange(event) {
        setDashboard(event.target.value)
    }

    useEffect(() => {
        function checkSidebar(event) {
            if (!menuRef.current[0].contains(event.target) && !menuRef.current[1].contains(event.target) &&
                menuRef.current[1].classList.contains('open')) {
                sidebarClose()
            }
        }
        if (isMobile) window.addEventListener('click', checkSidebar)
        return () => window.removeEventListener('click', checkSidebar)
    }, [isMobile])

    function sidebarClose() {
        menuRef.current[1].classList.remove('open')
    }

    return (
        <div className='sidebar' ref={el => menuRef.current[1] = el}>
            {isMobile && <AiOutlineClose className='menu-close-icon' onClick={sidebarClose} />}
            <div className='dashboard-container'>
                <div className='dashboard-title'>
                    <RiSettingsLine className='dashboard-icon' />
                    <h3>Dashboard</h3>
                </div>
                <div className='dashboard-items'>
                    <SidebarItem title='Dashboard' selected={dashboard} handleChange={handleChange}
                        icon={<IoKeyOutline className='dashboard-item-icon' />} />
                    <SidebarItem title='Product' selected={dashboard} handleChange={handleChange}
                        icon={<IoCubeOutline className='dashboard-item-icon' />} />
                    <SidebarItem title='Customers' selected={dashboard} handleChange={handleChange}
                        icon={<IoPersonOutline className='dashboard-item-icon' />} />
                    <SidebarItem title='Income' selected={dashboard} handleChange={handleChange}
                        icon={<IoWalletOutline className='dashboard-item-icon' />} />
                    <SidebarItem title='Promote' selected={dashboard} handleChange={handleChange}
                        icon={<IoPricetagsOutline className='dashboard-item-icon' />} />
                    <SidebarItem title='Help' selected={dashboard} handleChange={handleChange}
                        icon={<IoHelpCircleOutline className='dashboard-item-icon' />} />
                </div>
            </div>
            <div className='profile-div'>
                <img src={profile} alt='profile-img' />
                <div className='user-name'>
                    <h6>Evano</h6>
                    <p>Project Manager</p>
                </div>
                <IoIosArrowDown className='profile-icon' />
            </div>
        </div>
    )
}
