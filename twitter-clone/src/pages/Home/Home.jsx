import React from 'react';
import Follow from '../../components/Follow/Follow';
import Footer from '../../components/Footer/Footer';
import Happening from '../../components/Happening/Happening';
import Menu from '../../components/Menu/Menu';
import Tweets from '../../components/tweets/Tweets';
import '../../styles/home.css';

const Home = () => {
  return (
    <div className='gridHome'>
      <div>
          <Menu/> 
      </div>
      <div>
        <Tweets/>
      </div>
      <div>
        <Happening/>
        <Follow/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home