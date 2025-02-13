import { faHome, faTicket, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

const Nav = () => {
  return (
    <nav className='flex justify-between items-center bg-gray-800 p-4'>
      <div className='flex justify-between items-center space-x-4'>
        <Link href='/'>
          <FontAwesomeIcon icon={ faHome } className='icon' />
        </Link>
        <Link href='/TicketPage/new'>
          <FontAwesomeIcon icon={ faTicket } className='icon' />
        </Link>
        <Link href='/CSSModuleExample/cssModulePage'>
          <FontAwesomeIcon icon={ faWandMagicSparkles } className='icon' />
        </Link>
      </div>
      <div>
        <p className='text-white'>RobinWillson101@gmail.com</p>
      </div>
    </nav>
  );
};

export default Nav;