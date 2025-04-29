import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import React from 'react';

function MainPage() {
    return (
      <div>
        <div className="container">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    );
  }

export default MainPage;