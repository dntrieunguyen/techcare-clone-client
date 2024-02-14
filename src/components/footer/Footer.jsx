import React from 'react';
import {
   wid_payment,
   wid_policy,
   wid_social,
   wid_store,
} from '../../constant/footer';

const Footer = () => {
   return (
      <footer className="bg-[#E8E8E8] p-2 flex flex-wrap gap-5 ">
         <div className="flex flex-wrap gap-5 footer-top">
            <div className="w-full my-5 wid_item md:my-0 sm:flex-1">
               <h2 className="my-2 font-medium uppercase ">
                  {wid_policy.title}
               </h2>
               <hr className="" color="F49B00 " />
               {wid_policy.list.map((item, index) => (
                  <p className="my-2" key={index}>
                     {item.item}
                  </p>
               ))}
            </div>

            <div className="wid_item sm:flex-1">
               <h2 className="my-2 font-medium uppercase ">
                  {wid_store.title}
               </h2>
               <hr className="" color="F49B00 " />
               {wid_store.list.map((item, index) => (
                  <p className="my-2 font-bold text-blue-700" key={index}>
                     {item.item}
                  </p>
               ))}

               {wid_store.contact.map((item, index) => (
                  <div className="flex gap-5 my-5 wid_store_contact">
                     <img
                        key={index}
                        className="w-[15px]"
                        src="https://s.w.org/images/core/emoji/11/svg/260e.svg"
                        alt=""
                     />
                     <p className="font-bold">{item.item}</p>
                  </div>
               ))}
               <img
                  src={require('../../assets/images/dang_ky_bct.png')}
                  alt=""
               />
               <p className="my-5 font-medium">
                  Số Giấy Phép ĐKKD / MST: 0401741816 – Do Sở Kế Hoạch Đầu Tư Đà
                  Nẵng Cấp
               </p>
            </div>

            <div className="wid_item sm:flex-1">
               <h2 className="my-2 font-medium uppercase">
                  {wid_payment.title}
               </h2>
               <hr className="" color="F49B00" />
               <div className="flex flex-wrap items-start justify-start gap-3">
                  {wid_payment.list.map((item, index) => (
                     <div key={index} className="flex gap-1 flex-4">
                        <img
                           src={'../../assets/icon/icon-tienmat.png'}
                           alt=""
                        />
                        <p className="my-2">{item.item}</p>
                     </div>
                  ))}
                  <h2 className="my-2 font-medium uppercase ">
                     Liên hệ với chúng tôi
                  </h2>
               </div>
               <hr className="" color="F49B00 " />
               <div className="flex items-center gap-1">
                  <img
                     src="https://s.w.org/images/core/emoji/11/svg/2709.svg"
                     alt=""
                     width="20px"
                  />
                  <p className="text-blue-700">cskh.techcare@gmail.com</p>
               </div>
               <p>{`Thứ 2 -> Chủ nhật / 8h00 – 21h00`}</p>
               <div className="flex border-2 rounded-md border-main">
                  <input
                     className="w-full p-1 h-11 outline-main"
                     type="text"
                     placeholder="Quý khách để lại email liên hệ border-2 rounded-md"
                  />
                  <button className="px-5 py-1 text-white bg-main">Gửi</button>
               </div>
            </div>
            <div className="flex-1 wid_item">
               <div className="facebook">
                  <h2 className="my-2 font-medium uppercase">facebook</h2>
                  <hr className="" color="F49B00" />
                  <p className="my-2 font-medium">
                     Công Ty TNHH MTV Quốc Tế Phúc Thành Đạt
                  </p>
                  <p className="my-2 font-medium">
                     133 Hàm Nghi, P.Vĩnh Trung, Thanh Khê, TP: Đà Nẵng, Việt
                     Nam
                  </p>
                  <p className="my-2 font-medium">SĐT: 0236.366.3333</p>
                  <p className="my-2 font-medium">
                     Email: ceotechcare@gmail.com
                  </p>
                  <p className="my-2 font-medium">Website: techcare.vn</p>
                  <img
                     src="https://images.dmca.com/Badges/dmca-badge-w100-5x1-01.png?ID=e462196f-673b-4806-8f09-9adacb64f379"
                     alt=""
                  />
               </div>
            </div>
         </div>
         <div className="footer-mid">
            <h2 className="my-2 font-medium uppercase ">Liên kết</h2>
            <hr className="" color="F49B00 " />
            <div className="social-contact">
               {wid_social &&
                  wid_social.list.map((item, index) => (
                     <img key={index} src={item?.icon} alt="" />
                  ))}
            </div>
         </div>
      </footer>
   );
};

export default Footer;
