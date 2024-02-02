import React from 'react';
import { IoBagCheckOutline } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosSearch } from 'react-icons/io';
import { BsTelephone } from 'react-icons/bs';

const Header = () => {
   return (
      <header className="h-[100px] lg:h-[70px] w-full md:h-[125px] bg-main p-3 fixed top-0 left-0">
         {/* header main */}
         <div className="header-main flex justify-between lg:items-center">
            <div className="logo">
               <img
                  src={require('../../assets/images/logo_head_new.png')}
                  alt=""
                  className="w-[160px] h-[30px] lg:w-[240px] lg:h-[40px]"
               />
            </div>
            {/* header main item hidden in large */}
            <div className="search-lg w-1/2 hidden lg:block">
               <div className="input-header flex h-[40px] w-full">
                  <input
                     type="text"
                     placeholder="Bạn cần tìm gì?"
                     className="w-full px-3 h-full text-sm-content outline-none"
                  />
                  <span className="py-2 font-bold rounded-e-md text-center px-6 search-btn bg-black text-white">
                     Search
                  </span>
               </div>
            </div>
            {/* header main item in large */}
            <div className="header-info hidden lg:flex lg:items-center text-white gap-3">
               <BsTelephone className="text-[30px]" />
               <div className="header-info-content flex flex-col">
                  <label htmlFor="">Gọi mua hàng:</label>
                  <span className="text-[18px] font-bold">0236.366.3333</span>
               </div>
            </div>
            <div className="bag">
               <IoBagCheckOutline className="text-[25px] lg:text-[40px] font-bold text-white" />
            </div>
         </div>
         {/* header item in mobile && tablet */}
         <div className="header-extra-hidden-lh flex mt-2 gap-3  justify-between lg:hidden">
            <div className="icon-header">
               <RxHamburgerMenu className="text-[30px] md:mt-1 text-white" />
            </div>
            <div className="input-header flex w-full">
               <input
                  type="text"
                  placeholder="Bạn cần tìm gì?"
                  className="w-full px-3 text-sm-content outline-none md:h-[40px]"
               />
               <IoIosSearch className="icon-search text-[30px] h-full px-3 w-12 bg-black text-white" />
            </div>
         </div>
      </header>
   );
};

export default Header;
