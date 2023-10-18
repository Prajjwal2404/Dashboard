import React, { useEffect, useRef, useState } from 'react'
import { IoAddOutline } from 'react-icons/io5'

export default function ProductItem({ img, productName, stock, price, sales }) {

    const [isEllipsisVisible, setIsEllipsisVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const elementRef = useRef([]);

    function checkOverflow() {
        if (elementRef.current[0]) {
            const isOverflowing = elementRef.current[0].offsetWidth < elementRef.current[0].scrollWidth;
            setIsEllipsisVisible(isOverflowing);
        }
    }

    useEffect(() => {
        checkOverflow();
        return () => { };
    }, []);

    useEffect(() => {
        let resizeObserver = null;
        if (elementRef.current[0]) {
            resizeObserver = new ResizeObserver(checkOverflow);
            resizeObserver.observe(elementRef.current[0]);
        }
        return () => {
            if (resizeObserver) {
                resizeObserver.disconnect();
            }
        };
    }, [elementRef.current[0]]);

    useEffect(() => {
        function collapse(event) {
            if (isExpanded && !elementRef.current[0].contains(event.target) &&
                !elementRef.current[1]?.contains(event.target)) {
                elementRef.current[0].classList.remove('description')
                setIsExpanded(false)
            }
        }
        window.addEventListener('click', collapse)
        return () => window.removeEventListener('click', collapse)
    }, [isExpanded]);

    function expand() {
        elementRef.current[0].classList.add('description')
        setIsExpanded(true)
    }

    return (
        <>
            <div className='product-info-div'>
                <img src={img} alt='product-img' />
                <div className='product-info'>
                    <h4>{productName}</h4>
                    <h6 ref={el => elementRef.current[0] = el}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                    {isEllipsisVisible && <span className='details-icon' onClick={expand}
                        ref={el => elementRef.current[1] = el}><IoAddOutline className='plus-icon' /></span>}
                </div>
            </div>
            <p className='product-stock'>{stock} in stock</p>
            <p className='product-price'>$ {price}</p>
            <p className='product-sales'>{sales}</p>
        </>
    )
}
