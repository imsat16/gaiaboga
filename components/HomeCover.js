import React from 'react';
import Image from 'next/image';
import {BgProduct} from '../components/imageComp';

export default function HomeCover () {
  return (
    <div className="h-screen w-full ">
      <div className="h-screen brightness-50 contrast-75 w-full overflow-hidden absolute -z-10">
        <Image
          className=""
          alt="bgproduct"
          src={BgProduct}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="text-white uppercase font-medium">
        <div className="flex flex-col h-screen justify-center items-center ">
          <p className="md:text-8xl text-5xl text-center italic">
            &quot;gaiaboga&quot;
          </p>
          <p className=" md:text-xl text-sm md:w-1/3 w-9/12 text-center font-normal p-5">
            Bumbu Rempah Nusantara Hidangkan Rasa Bergelora Untuk Tuan dan Nyonya
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            <button className="border-yellow-800 border-2 hover:border-white bg-yellow-800 hover:bg-opacity-100 transition duration-300 py-3 px-6 rounded-full">
              Tentang kami
            </button>
            <button className="border-yellow-800 border-2 hover:border-white bg-yellow-800 bg-opacity-50 hover:bg-opacity-100 transition duration-300 py-3 px-6 rounded-full">
              Tentang kami
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
