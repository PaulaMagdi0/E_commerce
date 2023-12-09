import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
//import BookData from './Components/Data.json';
import Cart from './Components/Cart/Cart';
import Home from './Components/Pages/Home';
import Men from './Components/Pages/Men';
import Women from './Components/Pages/Women';
import Kids from './Components/Pages/Kids';
import Discount from './Components/Pages/Discount';
import Accessories from './Components/Pages/Accessories'
import About from './Components/Pages/About';
import SignUp from './Components/Pages/SignUp';
import SignIn from './Components/Pages/SignIn';
import BackToTopButton from './Components/BackToTop';
import Payment from './Components/Pages/Payment';
import PaymentWay from './Components/Pages/PaymentWay';
import Upload from './Components/Pages/Upload';
import ProductDetails from './Components/Pages/ProductDetails';
//import SearchBar from './Components/SearchBar/SearchBar';
//import Navbar from './Components/Navbar/Navbar';
//import { FooterContainer } from './Components/Container/footer';
import ScrollToTop from './ScrollToTop';
import EnterTheCode from './Components/Pages/EnterTheCode';
import ForgetPassword from './Components/Pages/ForgetPassword';
import ResetPassword from './Components/Pages/ResetPassword';
import Tops from './Components/Pages/Tops';
import Bottoms from './Components/Pages/Bottoms';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenTops from './Components/Pages/MenTops';
import MenBottoms from './Components/Pages/MenBottoms';
import MenAccessories from './Components/Pages/MenAccessories';
import MenFeatures from './Components/Pages/MenFeatures';
import WomenTops from './Components/Pages/WomenTops';
import WomenBottoms from './Components/Pages/WomenBottoms';
import WomenAccessories from './Components/Pages/WomenAccessories';
import WomenFeatures from './Components/Pages/WomenFeatures';
import WomenDressesAndJumpSuits from './Components/Pages/WomenDressesAndJumpSuits';
import KidsGraphics from './Components/Pages/KidsGraphics';
import KidsZippers from './Components/Pages/KidsZippers';
import KidsPants from './Components/Pages/KidsPants';
import GetDiscount10 from './Components/Pages/GetDiscount10';
import GetDiscount25 from './Components/Pages/GetDiscount25';
import GetDiscount50 from './Components/Pages/GetDiscount50';

function App() {
  return (
      <BrowserRouter>
        <div className='App'>
          <ScrollToTop />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/men' element={<Men />}/>
              <Route path='/mentops' element={<MenTops />}/>
              <Route path='/menbottoms' element={<MenBottoms />}/>
              <Route path='/menaccessories' element={<MenAccessories />}/>
              <Route path='/menfeatures' element={<MenFeatures />}/>
              <Route path='/womentops' element={<WomenTops />}/>
              <Route path='/womenbottoms' element={<WomenBottoms />}/>
              <Route path='/womenaccessories' element={<WomenAccessories />}/>
              <Route path='/womenfeatures' element={<WomenFeatures />}/>
              <Route path='/womendressesandjumpSuits' element={<WomenDressesAndJumpSuits />}/>
              <Route path='/women' element={<Women />}/>
              <Route path='/kids' element={<Kids />}/>
              <Route path='/kidsgraphics' element={<KidsGraphics />}/>
              <Route path='/kidszippers' element={<KidsZippers />}/>
              <Route path='/kidspants' element={<KidsPants />}/>
              <Route path='/discount' element={<Discount />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/accessories' element={<Accessories />}/>
              <Route path='/signUp' element={<SignUp />}/>
              <Route path='/signIn' element={<SignIn />}/>
              <Route path='/productdetails/:id' element={<ProductDetails />}/>
              <Route path='/paymentway' element={<PaymentWay />}/>
              <Route path='/payment' element={<Payment />}/>
              <Route path='/upload' element={<Upload />}/>
              <Route path='/cart' element={<Cart />}/>
              <Route path='/tops' element={<Tops />}/>
              <Route path='/bottoms' element={<Bottoms />}/>
              <Route path='/forgetpassword' element={<ForgetPassword />}/>
              <Route path='/enterthecode' element={<EnterTheCode />}/>
              <Route path='/resetpassword' element={<ResetPassword />}/>
              <Route path='/discount10' element={<GetDiscount10 />}/>
              <Route path='/discount25' element={<GetDiscount25 />}/>
              <Route path='/discount50' element={<GetDiscount50 />}/>

            </Routes>
            <BackToTopButton />
        </div>
      </BrowserRouter>
  );
}

export default App;
