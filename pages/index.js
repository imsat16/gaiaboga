import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import HomeCover from '../components/HomeCover';
import Image from 'next/image';
import {BgProduct} from '../components/imageComp';
import Footer from '../components/Footer';

export default function Home () {
  return (
    <div className="">
      <Navbar />
      <HomeCover />
      <div className=" p-8 grid lg:grid-cols-3 gap-8 items-center">
        <h3 className="text-2xl font-bold italic text-center md:hidden">
          KAMI HIDANGKAN CITARASA NUSANTARA
        </h3>
        <div className="md:hidden lg:block">
          <Image alt="bgproduct" src={BgProduct} />
        </div>
        <div className="">
          <div className="bg-white shadow-md p-14 text-center grid grid-row-1 gap-3">
            <h3 className="text-2xl font-bold italic hidden md:block">
              KAMI HIDANGKAN CITARASA NUSANTARA
            </h3>
            <h5 className="">
              Bermodalkan Pengalaman dan keinginan yang kuat disertai dengan orang-orang yang mumpuni di Bidangnya, Gaiaboga didirikan pada bulan Oktober 2020 dengan tujuan memberikan produk bumbu masakan yang berkualitas dan lezat bagi kebutuhan rumah tangga maupun Usaha
            </h5>
          </div>
        </div>
        <div className="hidden md:block">
          <Image alt="bgproduct" src={BgProduct} />
        </div>
      </div>
      {/*  */}
      <div className=" bg-yellow-800 md:w-full md:h-screen flex flex-col justify-center items-center md:px-32 p-16">
        <div className="bg-white grid md:grid-cols-2 items-center">
          <div className="flex flex-col justify-center items-center ">
            <Image className=" " alt="bgproduct" src={BgProduct} />
          </div>
          <div className="md:p-16">
            <div className="grid grid-rows-1 gap-3">
              <h1 className=" md:text-4xl text-xl font-semibold">
                PRODUK KAMI
              </h1>
              <p className="text-lg">
                Gaiaboga saat ini memiliki 3 kategori produk yang sudah ditawarkan ke seluruh masyarakat
              </p>
              <ul className="list-disc">
                <li>
                  Bawang Goreng
                </li>
                <li>
                  Aneka Saus
                </li>
                <li>
                  Sobaso
                </li>
              </ul>
              <button className="uppercase bg-yellow-800 p-2 rounded-md">
                lihat Produk
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className=" container mx-auto flex flex-col py-20 justify-center items-center text-center">
        <div className="grid gap-2 w-3/6 border-2 mb-12">
          <h2 className=" uppercase text-4xl border-2 font-semibold">Cara pemesanan</h2>
          <div className=" flex justify-center text-xl w-full border-2">
            <p className=" text-2xl w-11/12 border-2">
              Kami akan memberikan cara
              agar Anda dapat memesan produk yang kami tawarkan dengan mudah
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
          <div className="flex items-center justify-center flex-col">
            <div className=" p-3 w-24 h-24 md:w-48 md:h-48 lg:w-24 lg:h-24 hover:bg-yellow-700 shadow-2xl text-yellow-700 hover:text-white transition hover:duration-300 hover:scale-110 ease-in-out text-center border-4 border-yellow-700 rounded-full flex flex-col justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 md:h-16 md:w-16 lg:h-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>TELP (+62)838-2009-0369</div>
          </div>
          <div className="flex items-center justify-center flex-col">
            <div className=" p-3 w-24 h-24 md:w-48 md:h-48 lg:w-24 lg:h-24 hover:bg-yellow-700 shadow-2xl text-yellow-700 hover:text-white transition hover:duration-300 hover:scale-110 ease-in-out text-center border-4 border-yellow-700 rounded-full flex flex-col justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 md:h-16 md:w-16 lg:h-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </div>
            <div>TETAPKAN PESANAN</div>
          </div>
          <div className="flex items-center justify-center flex-col">
            <div className=" p-3 w-24 h-24 md:w-48 md:h-48 lg:w-24 lg:h-24 hover:bg-yellow-700 shadow-2xl text-yellow-700 hover:text-white transition hover:duration-300 hover:scale-110 ease-in-out text-center border-4 border-yellow-700 rounded-full flex flex-col justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 md:h-16 md:w-16 lg:h-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path
                  fillRule="evenodd"
                  d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>PEMBAYARAN</div>
          </div>
          <div className="flex items-center justify-center flex-col">
            <div className=" p-3 w-24 h-24 md:w-48 md:h-48 lg:w-24 lg:h-24 hover:bg-yellow-700 shadow-2xl text-yellow-700 hover:text-white transition hover:duration-300 hover:scale-110 ease-in-out text-center border-4 border-yellow-700 rounded-full flex flex-col justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 md:h-16 md:w-16 lg:h-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
              </svg>
            </div>
            <div>PENGANTARAN</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
