import React from 'react';
import { faHome, faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Nav = () => {

  return (
    <nav className='flex justify-between bg-nav p-4'>
      <div>
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className='icon' />
        </Link>

        <Link href="/TicketPage/new">
          <FontAwesomeIcon icon={faTicket} className='icon' />
        </Link>
      </div>
      <div>
        <p className='text-default-text'>a@gmail.com</p>
      </div>
    </nav>
  );
}

export default Nav;
