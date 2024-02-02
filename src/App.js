import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import { PATH } from './constant/PATH';
import Default from './layouts/Default';
import Shop from './pages/shop/Shop';

function App() {
   return (
      <>
         <Router>
            <Routes>
               <Route element={<Default />}>
                  <Route path={PATH.HOME} element={<Home />} />
                  <Route path={PATH.SHOP} element={<Shop />} />
               </Route>
            </Routes>
         </Router>
      </>
   );
}

export default App;
