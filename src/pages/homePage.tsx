import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const navigateSearchPage = () => {
    navigate("/chord");
  };

  return (
    <div>
      <Navbar />
      <main className='ms-[7rem] mt-[3rem] mr-[4rem] m-[3rem] mx-4'>
        <div className='flex items-center text-center'></div>
        <h1 className='text-[#fff] text-4xl font-bold px-20 text-center'>Pembelajaran gitar adalah perjalanan pribadi yang penuh dengan tantangan dan pencapaian. Setiap chord yang Anda pelajari dan setiap lagu yang Anda kuasai membawa Anda lebih dekat kepada impian Anda menjadi seorang musisi yang mahir</h1>
        <button className='absolute backdrop-blur-sm bg-whi font-bold py-2 px-7 mt-[14rem] m-[9rem] mx-[12rem] '>
          <a href="tentang">Tentang</a>
        </button>
        <div className="flex m-[10rem] mt-[0rem] py-[6rem]">
          <div className="h-[17rem] w-[35rem] bg-white rounded-xl relative mr-10 m-7 mx-[rem]">
            <p className="text-3xl font-bold text-white m-3 z-50 absolute top-0 left-0">Chord</p>
            <p className="text-lg font-normal text-white m-3 z-50 absolute top-[4rem] left-0">Gitar adalah cermin dari semangat Anda. Jika Anda bermain dengan penuh dedikasi, Anda akan memancarkan keajaiban musik</p>
            <img src="data:image/jpeg;base64,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" alt="Chord" className="absolute inset-0 w-full h-full object-cover z-0 rounded-xl brightness-50" />
            <button className='absolute backdrop-blur-sm bg-white/30 hover:bg-blue-700 text-white font-bold py-2 px-7 rounded-bl-lg rounded-tr-lg mt-[13rem] m-[9rem] mx-[12rem]'>
              <a href="chord">Lanjut</a>
            </button>
          </div>
          <div className="h-[17rem] w-[35rem] bg-white rounded-xl relative mr-10 m-7">
            <p className="text-3xl font-bold text-white m-3 z-50 absolute top-0 left-0">Tutorial</p>
            <p className="text-lg font-normal text-white m-3 z-50 absolute top-[4rem] left-0">Dari ketukan-ketukan lembut hingga dentuman-dentuman keras, terciptalah melodi yang mengubah dunia menjadi panggung tiada batas</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwHAH1Yqz_B08hU_q2xDbmB0yJyhDeFs6Y0PMCB87cLsOaaIkOGJQ5HD8z2un5ROmS32Y&usqp=CAU" alt="Chord" className="absolute inset-0 w-full h-full object-cover z-0 rounded-xl brightness-50" />
            <button className='absolute backdrop-blur-sm bg-white/30 hover:bg-blue-700 text-white font-bold py-2 px-7 rounded-bl-lg rounded-tr-lg mt-[14rem] m-[9rem] mx-[12rem] '>
              <a href="tutorial">Lanjut</a>
            </button>
          </div>
        </div>
        <div className=" text-white mt-80 ">Temukan website kami di <br />www.weguitar.com</div>
      </main>
    </div>
  );
};


export default HomePage;
