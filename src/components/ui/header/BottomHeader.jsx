import React from 'react';
import { BsTelephone } from 'react-icons/bs';
import { IoIosSearch } from 'react-icons/io';
import { IoBagCheckOutline } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';

const BottomHeader = () => {
   return (
      <>
         {/* header main */}
         <div className="flex justify-between header-main lg:items-center">
            <div className="logo">
               <img
                  src={require('../../../assets/images/logo_head_new.png')}
                  alt=""
                  className="w-[160px] h-[30px] lg:w-[240px] lg:h-[40px]"
               />
            </div>
            {/* header main item hidden in large */}
            <div className="hidden w-1/2 search-lg lg:block">
               <div className="input-header flex h-[40px] w-full">
                  <input
                     type="text"
                     placeholder="Bạn cần tìm gì?"
                     className="w-full h-full px-3 outline-none text-sm-content"
                  />
                  <span className="px-6 py-2 font-bold text-center text-white bg-black rounded-e-md search-btn">
                     Search
                  </span>
               </div>
            </div>
            {/* header main item in large */}
            <div className="hidden gap-3 text-white header-info lg:flex lg:items-center">
               <BsTelephone className="text-[30px]" />
               <div className="flex flex-col header-info-content">
                  <label htmlFor="">Gọi mua hàng:</label>
                  <span className="text-[18px] font-bold">0236.366.3333</span>
               </div>
            </div>
            <div className="bag">
               <IoBagCheckOutline className="text-[25px] lg:text-[40px] font-bold text-white" />
            </div>
         </div>
         {/* header item in mobile && tablet */}
         <div className="flex justify-between gap-3 mt-2 lg:hidden">
            <div className="icon-header">
               <RxHamburgerMenu className="text-[30px] md:mt-1 text-white" />
            </div>
            <div className="flex w-full input-header">
               <input
                  type="text"
                  placeholder="Bạn cần tìm gì?"
                  className="w-full px-3 text-sm-content outline-none md:h-[40px]"
               />
               <IoIosSearch className="icon-search text-[30px] h-full px-3 w-12 bg-black text-white" />
            </div>
         </div>
      </>
   );
};

export default BottomHeader;
