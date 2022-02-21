import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {PrimaryLogo} from './imageComp';

function Navbar () {
  return (
    <div className="bg-white fixed text-defaultColor font-medium shadow border-1 w-full z-50">
      <div>
        <div className="flex justify-between md:p-4 items-center">
          <div className="flex flex-row">
            <Link href={'/'}>
              <a className="px-2 hover:font-bold">Home</a>
            </Link>
            <Link href={'/product'}>
              <a className="px-2 hover:font-bold">Produk</a>
            </Link>
            <Link href={'/detailproduct'}>
              <a className="px-2 hover:font-bold">Detail Produk</a>
            </Link>
          </div>
          <div className="w-1/12  hidden md:block">
            <Image
              src={PrimaryLogo}
              alt="gaiaboga logo"
              layout="responsive"
              className="border-red-500 shrink"
            />
          </div>
          <div className="flex flex-row">
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
