import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import VideoCard from './VideoCard';
import '../css/homepage.css';
import Menu from '../assets/Menu.png';
import YTlogo from '../assets/Black.png';
import HomeIcon from '../assets/icon-home.png';
import Trending from '../assets/trending-icon.png';
import Subscribes from '../assets/Subscriptions.png';
import Library from '../assets/Library.png';
import Searchpng from '../assets/search.png';
import Livenav from '../assets/Live.png';
import Combined from '../assets/Combined.png';
import Notificate from '../assets/Notificate.png';
import User from '../assets/user.jpg';

const VideoPlayerPage = () => {
  const { videoId } = useParams();
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
    <div  className={darkMode ? 'dark-mode' : ''}>
      <header>
        <nav  className={darkMode ? 'dark-mode' : ''}>
          <div className='nav-left'> <img className='home-menu' src={Menu} alt="" />
       <Link to={`/home`}><img className='home-logo' src={YTlogo} alt='Logo'/></Link>
       <label className='home-search'>
         <input className='home-search1' placeholder='Search'  type="text" />
           <img src={Searchpng} alt="" />
       </label></div>
       <div className='nav-right'>
       <button className='darkmodebtn1' onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <img className='darkmode' src="https://cdn.iconscout.com/icon/free/png-256/free-dark-mode-6888661-5645488.png" alt="" /> : <img className='lightmode' src="https://static.thenounproject.com/png/4157080-200.png" alt="" />}
      </button>
        <img className='nav-live' src={Livenav} alt="" />
        <img className='nav-combined' src={Combined} alt="" />
        <img src={Notificate} alt="" />
        <img className='home-User' src={User} alt="" />
       </div>
      
      
        </nav>
      </header>
      <div className='videomain'>
      <ReactPlayer width="1363px" height="700px" className="youtube-video" url={`https://www.youtube.com/watch?v=${videoId}`} controls playing={true} />
      <Link to={`/home`}>Home Page</Link>
        <section className='videomain-right'>{videos.map((video) => (
        <VideoCard key={video.id} video={video} />
        ))}</section>
      </div>
      <footer  className={darkMode ? 'dark-mode' : ''}>
        <div className="footer">
          <div className="footer-menu"><img width="20px" src={HomeIcon} alt="" /><h3 className='footer-red-text footer-text'>Home</h3></div>
          <div className="footer-menu"><img src={Trending} alt="" /><h3 className=' footer-text'>Trending</h3></div>
          <div className="footer-menu"><img src={Subscribes} alt="" /><h3 className=' footer-text'>Subscriptions</h3></div>
          <div className="footer-menu"><img src={Library} alt="" /><h3 className=' footer-text'>Library</h3></div>

        </div>
      </footer>
      
    </div>
  );
};

export default VideoPlayerPage;
