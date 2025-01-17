// App.js

import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Genres from './pages/Genres';
import Asian from './pages/Asian';
import European from './pages/European';
import Popular from './pages/Popular';
import New from './pages/New';
import Arts from './pages/Arts';
import Support from './pages/Support';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ArtistHome from './pages/ArtistHome';
import AccountSettings from './pages/AccountSettings';

const socialMediaIcons = [
  require('./assets/twitter_icon.png'),
  require('./assets/facebook_icon.png'),
  require('./assets/inst_icon.png'),
  require('./assets/tg_icon.png'),
  require('./assets/email_icon.png'),
];

const App = () => {
  const location = useLocation();
  const isSignInPage = location.pathname.toLowerCase() === '/login';
  const isSignUpPage = location.pathname.toLowerCase() === '/signup';

  return (
    <>
      {isSignInPage || isSignUpPage ? null : <NavBar />}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/asian" element={<Asian />} />
          <Route path="/european" element={<European />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/new" element={<New />} />
          <Route path="/arts" element={<Arts />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account-settings" element={<AccountSettings />} />
          <Route path="/artisthome" element={<ArtistHome socialMediaIcons={socialMediaIcons}/>} />
        </Routes>
      </div>
      {isSignInPage || isSignUpPage ? null : <Footer socialMediaIcons={socialMediaIcons} />}
    </>
  );
};

export default App;
