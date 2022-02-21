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
        <div>
          <Image
            className="transition duration-700 "
            alt="bgproduct"
            layout="responsive"
            src={BgProduct}
          />
        </div>
        <div className="">
          <div className="bg-white shadow-md p-14 text-center grid grid-row-1 gap-3">
            <h3 className="text-2xl font-bold italic">
              KAMI HIDANGKAN CITARASA NUSANTARA
            </h3>
            <h5 className="">
              Bermodalkan Pengalaman dan keinginan yang kuat disertai dengan orang-orang yang mumpuni di Bidangnya, Gaiaboga didirikan pada bulan Oktober 2020 dengan tujuan memberikan produk bumbu masakan yang berkualitas dan lezat bagi kebutuhan rumah tangga maupun Usaha
            </h5>
          </div>
        </div>
        <div>
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
              <h1 className=" md:text-4xl text-xl font-semibold">PRODUK KAMI</h1>
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

      <Footer />
    </div>
  );
}
