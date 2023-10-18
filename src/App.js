import { FiSearch } from 'react-icons/fi';
import { IoMenuOutline } from 'react-icons/io5'
import Sidebar from './Sidebar/Sidebar';
import Insights from './Insights/Insights';
import Overview from './overview/Overview';
import Customers from './Customers/Customers';
import Products from './Products/Products';
import HandleMedia from './components/HandleMedia';
import './App.css';
import { useRef } from 'react';

function App() {

  const menuRef = useRef([])
  const isMobile = HandleMedia('screen and (max-width: 750px)')

  function sidebarOpen() {
    menuRef.current[1].classList.add('open')
  }


  return (
    <>
      <div className="app">
        {isMobile && <div ref={el => menuRef.current[0] = el} onClick={sidebarOpen} className='menu-div'>
          <IoMenuOutline className='menu-icon' /></div>}
        <h3>Hello Shahrukh 👋🏼,</h3>
        <div className='search-div'>
          <FiSearch className='search-icon' />
          <input type='text' name='search' placeholder='Search' />
        </div>
      </div>
      <Sidebar menuRef={menuRef} isMobile={isMobile} />
      <Insights />
      <div className='charts'>
        <Overview />
        <Customers />
      </div>
      <Products />
    </>
  )
}

export default App;
