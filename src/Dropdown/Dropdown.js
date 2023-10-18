import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import './Dropdown.css'

export default function Dropdown({ dropDownItems, classname }) {

    const [btnText, setBtnText] = useState(dropDownItems[0]);
    const options = useRef([]);

    const dropDownArr = dropDownItems.map((item, idx) => <li key={idx} onClick={handleClick}>{item}</li>)

    function handleClick(event) {
        setBtnText(event.target.textContent);
        dropDown();
    }

    const [close, setClose] = useState(false)

    function dropDown() {
        if (close) {
            options.current[1].style.height = '0'
            setClose(false)
        }
        else {
            options.current[1].style.height = '9rem'
            setClose(true)
        }
    }

    useEffect(() => {
        function checkDropDown(event) {
            if (close && !options.current[0].contains(event.target) && !options.current[1].contains(event.target)) {
                dropDown()
            }
        }
        window.addEventListener('click', checkDropDown)
        return () => window.removeEventListener('click', checkDropDown)
    }, [close])

    return (
        <div className='dropdown-container'>
            <button className={`dropdown-btn ${classname}`} onClick={dropDown} ref={el => options.current[0] = el}>{btnText}<IoIosArrowDown className='dropdown-icon' /></button>
            <ul className='dropdown' ref={el => options.current[1] = el}>
                {dropDownArr}
            </ul>
        </div>
    )
}
