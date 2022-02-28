import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {PrimaryLogo} from './imageComp';
import { useRouter } from 'next/router';

function Navbar () {
  const router = useRouter();
  return (
    <header className="bg-white uppercase text-defaultColor font-medium shadow border-1 w-full z-50">
      <div className="container mx-auto">
        <div className="flex justify-between md:p-2 items-center">
          <div className="w-1/12  hidden md:block">
            <Image
              src={PrimaryLogo}
              alt="gaiaboga logo"
              layout="responsive"
              className="border-red-500 shrink"
            />
          </div>
          <ul className="flex lg:flex-row">
            <li className={router.asPath == "/" ? "active text-yellow-600" : ""}>
            <Link href={'/'}>
              <a className="px-2 hover:text-yellow-600 hover:border-b-2 border-yellow-600">Home</a>
            </Link>
              
            </li>
            <li  className={router.asPath == "/product" ? "active text-yellow-600" : ""}>
            <Link href={'/product'}>
              <a className="px-2 hover:text-yellow-600 hover:border-b-2 border-yellow-600">Produk</a>
            </Link>
              
            </li>
            <li  className={router.asPath == "/about" ? "active text-yellow-600" : ""}>
            <Link href={'/about'}>
              <a className="px-2 hover:text-yellow-600 hover:border-b-2 border-yellow-600">Tentang kami</a>
            </Link>
              
            </li>
            <li  className={router.asPath == "/contact" ? "active text-yellow-600" : ""}>
            <Link href={'/contact'}>
              <a className="px-2 hover:text-yellow-600 hover:border-b-2 border-yellow-600">kontak</a>
            </Link>
              
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
