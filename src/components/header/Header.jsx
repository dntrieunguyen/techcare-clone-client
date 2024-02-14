import BottomHeader from '../ui/header/BottomHeader';
import TopHeader from '../ui/header/TopHeader';

const Header = () => {
   return (
      <>
         <header className="fixed top-0 left-0 w-full p-3 bg-main">
            <TopHeader></TopHeader>
            <BottomHeader></BottomHeader>
         </header>
      </>
   );
};

export default Header;
