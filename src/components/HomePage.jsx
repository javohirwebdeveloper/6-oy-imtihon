import React, { useState, useEffect } from 'react';
import VideoCard from './VideoCard';
import '../css/homepage.css';
import Menu from '../assets/Menu.png';
import YTlogo from '../assets/Black.png';
import Searchpng from '../assets/search.png';
import HomeIcon from '../assets/icon-home.png';
import Trending from '../assets/trending-icon.png';
import Subscribes from '../assets/Subscriptions.png';
import Library from '../assets/Library.png';
import History from '../assets/History.png';
import Whatch from '../assets/whatch.png';
import Favourites from'../assets/Favourites.png';
import Liked from '../assets/Liked.png';
import Music from '../assets/Music.png';
import Games from '../assets/Games.png';
import More from '../assets/more.png';
import Livenav from '../assets/Live.png';
import Combined from '../assets/Combined.png';
import Notificate from '../assets/Notificate.png';
import User from '../assets/user.jpg';
const HomePage = () => {
  const [videos, setVideos] = useState([]);
  const [darkMode, setDarkMode] = useState(false); 
  const maxResults = 12; 

  useEffect(() => {
    const fetchData = async () => {
      
      const url = `https://youtube-v31.p.rapidapi.com/videos?part=snippet&chart=mostPopular&regionCode=US&maxResults=${maxResults}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'd38fd788ddmsh66e6f5ade1825dfp1151ddjsna52b159c135c',
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setVideos(result.items || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
       <div className="container">

      
      <header>
        <nav className={darkMode ? 'dark-mode' : ''}>
          <div className='nav-left'> <img className='home-menu' src={Menu} alt="" />
       <img className='home-logo' src={YTlogo} alt='Logo'/>
       <label className='home-search'>
         <input className='home-search1' placeholder='Search'  type="text" />
           <img src={Searchpng} alt="" />
       </label></div>
       <div className='nav-right'>
       <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <img className='darkmode' src="https://cdn.iconscout.com/icon/free/png-256/free-dark-mode-6888661-5645488.png" alt="" /> : <img className='lightmode' src="https://static.thenounproject.com/png/4157080-200.png" alt="" />}
      </button>
        <img className='nav-live' src={Livenav} alt="" />
        <img className='nav-combined' src={Combined} alt="" />
        <img src={Notificate} alt="" />
        <img className='home-User' src={User} alt="" />
       </div>
      
      
        </nav>
      </header>
      <article className={darkMode ? 'dark-mode' : ''}>
        <ul>
          <li><img src={HomeIcon} alt="" /><h3>Home</h3></li>
          <li><img src={Trending} alt="" /><h3>Trending</h3></li>
          <li><img src={Subscribes} alt="" /><h3>Subscriptions</h3></li>
        </ul>
        <ul>
          <li><img src={Library} alt="" /><h3>Library</h3></li>
          <li><img src={History} alt="" /><h3>History</h3></li>
          <li><img src={Whatch} alt="" /><h3>Watch later</h3></li>
          <li><img src={Favourites} alt="" /><h3>Favourites</h3></li>
          <li><img src={Liked} alt="" /><h3>Liked videos</h3></li>
          <li><img src={Music} alt="" /><h3>Music</h3></li>
          <li><img src={Games} alt="" /><h3>Games</h3></li>
          <li><img src={More} alt="" /><h3>Show more</h3></li>
        </ul>
      </article>
      <main>
       <section>
        {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
        ))}
      </section>
      
      </main>
      <footer  className={darkMode ? 'dark-mode' : ''}>
        <div className="footer">
          <div className="footer-menu"><img width="20px" src={HomeIcon} alt="" /><h3 className='footer-red-text footer-text'>Home</h3></div>
          <div className="footer-menu"><img src={Trending} alt="" /><h3 className=' footer-text'>Trending</h3></div>
          <div className="footer-menu"><img src={Subscribes} alt="" /><h3 className=' footer-text'>Subscriptions</h3></div>
          <div className="footer-menu"><img src={Library} alt="" /><h3 className=' footer-text'>Library</h3></div>

        </div>
      </footer>
      
    </div> 
    
  </div>
  );
};

export default HomePage;