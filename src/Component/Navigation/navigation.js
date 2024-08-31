import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Outlets from '../Outlet/Outlets';
import Home from '../Header/Home';
import Services from '../Header/Services';
import Portfolio from '../Header/Portfolio';
import Blog from '../Header/Blog';
import Company from '../Header/Company';
import YourComponent from '../Apicall';
import DetailComponent from '../DetailComponent';
import ErrorPage from '../Header/Errorpage';
import SomeComponent from '../Header/Somecomponent';
import A1 from '../UseContext/A1';
import A4 from '../UseContext/A4'
import ClickEvent from '../ClickEvent';
export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlets />}>
          {/* <Route index element={<Home />} /> 
          <Route path="Services" element={<Services />} />
          <Route path="Portfolio" element={<Portfolio />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="Company" element={<Company />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          {/* <Route path='*' element={<Login/>}/> */}
          {/* <Route path="somecomponent" component={SomeComponent} /> */} 
          {/* <Route path="Errorpage" component={ErrorPage} /> This should be the last Route */}
          {/* <Route path='/A1'element={<A1/>}/> */}
          {/* <Route path='/A4' element={<A4/>}/> */}
          {/* <Route path='/yourcomponent' element={<YourComponent/>}/> */}
          <Route path='/ClickEvent' element={<ClickEvent/>}/>
        
          
        </Route>
        {/* <Route path="*" element={<ErrorPage />} /> This catches all undefined routes */}

        {/* <Route path="/YourComponent" element={<YourComponent/>} />
        <Route path="/detail/:id" element={<DetailComponent />} /></Route> */}
      </Routes>
    </BrowserRouter>
  );
}
