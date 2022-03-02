import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const contact = () => {
  return (
    <div>
      <Navbar />

      <div className="py-20 flex justify-center text-5xl font-semibold uppercase bg-gray-100">
        Kontak
      </div>
      {/* <div className=' container mx-auto'> */}
      <div className="grid grid-cols-4 gap-4 container mx-auto px-8 h-screen content-center">
        <div className="grid col-span-1">
          <div>
            <div className="pb-6 pt-6 text-5xl font-semibold">
              Informasi Alamat
            </div>
            <div className=" ">
              Jl. Garuda No.27 Kelurahan Pekiringan, Kecamatan Kesambi, Kota
              Cirebon 45131
              <div className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                : marketing@gaiaboga.id
              </div>
              <div className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                : 082126612726
              </div>
            </div>
          </div>
        </div>
        <div className="grid row-span-1"></div>
        <div className=" grid grid-row col-span-2 gap-6 uppercase font-medium ">
          <form
            action="/send-data-here"
            method="post"
            className="grid grid-row gap-6"
          >
            <div className="grid">
              <label>Nama:</label>
              <input id="" name="" className="border-2" />
            </div>
            <div className="grid">
              <label>Email:</label>
              <input type="text" id="" name="" className="border-2" />
            </div>
            <div className="grid">
              <label>Pesan Anda:</label>
              <textarea type="text" id="" name="" className="border-2" />
            </div>
            <div className="grid">
              <label>No Telp:</label>
              <input type="text" id="" name="" className="border-2" />
            </div>
          </form>
          <button
            className="uppercase font-medium w-full border-2 hover:bg-slate-400 hover:border-slate-400 text-center py-3 rounded-xl transition delay-75 duration-150 ease-in-out"
            type="submit"
          >
            Kirim
          </button>
        </div>
      </div>
      {/* </div> */}
      <Footer />
    </div>
  );
};

export default contact;
