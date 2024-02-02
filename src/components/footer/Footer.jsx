import React from 'react';
import { wid_payment, wid_policy, wid_store } from '../../constant/footer';

const Footer = () => {
   return (
      <footer className="bg-[#E8E8E8] p-2 md:flex">
         <div className="wid_policy my-5 md:my-0">
            <h2 className=" font-medium uppercase my-2">{wid_policy.title}</h2>
            <hr color="F49B00 " />
            {wid_policy.list.map((item, index) => (
               <p className="my-2" key={index}>
                  {item.item}
               </p>
            ))}
         </div>

         <div className="wid_store">
            <h2 className=" font-medium uppercase my-2">{wid_store.title}</h2>
            <hr color="F49B00 " />
            {wid_store.list.map((item, index) => (
               <p className="my-2 text-blue-700 font-bold" key={index}>
                  {item.item}
               </p>
            ))}

            {wid_store.contact.map((item, index) => (
               <div className="wid_store_contact flex gap-5 my-5">
                  <img
                     className="w-[15px]"
                     src="https://s.w.org/images/core/emoji/11/svg/260e.svg"
                     alt=""
                  />
                  <p className="font-bold">{item.item}</p>
               </div>
            ))}
            <img src={require('../../assets/images/dang_ky_bct.png')} alt="" />
            <p className="my-5 font-medium">
               Số Giấy Phép ĐKKD / MST: 0401741816 – Do Sở Kế Hoạch Đầu Tư Đà
               Nẵng Cấp
            </p>
         </div>

         <div className="wid_payment">
            <h2 className="font-medium uppercase my-2">{wid_payment.title}</h2>
            <hr color="F49B00" />
            <div className="flex flex-wrap gap-3 justify-between items-start">
               {wid_payment.list.map((item, index) => (
                  <div key={index} className="flex gap-1 flex-4">
                     <img
                        src={require('../../assets/images/icon-tienmat.png')}
                        alt=""
                     />
                     <p className="my-2">{item.item}</p>
                  </div>
               ))}
            </div>
         </div>
      </footer>
   );
};

export default Footer;
