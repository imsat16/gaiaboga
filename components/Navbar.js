import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {PrimaryLogo} from './imageComp';

function Navbar () {
  return (
    <div className="bg-white uppercase text-defaultColor font-medium shadow border-1 w-full z-50">
      <div className='container mx-auto'>
        <div className="flex justify-between md:p-2 items-center">
          <div className="w-1/12  hidden md:block">
            <Image
              src={PrimaryLogo}
              alt="gaiaboga logo"
              layout="responsive"
              className="border-red-500 shrink"
            />
          </div>
          <div className="flex flex-row">
            <Link href={'/'}>
              <a className="px-2 hover:font-bold">Home</a>
            </Link>
            <Link href={'/product'}>
              <a className="px-2 hover:font-bold">Produk</a>
            </Link>
            <Link href={'/about'}>
              <a className="px-2 hover:font-bold">Tentang kami</a>
            </Link>
            <Link href={'/contact'}>
              <a className="px-2 hover:font-bold">kontak</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
