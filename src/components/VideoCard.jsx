import React from 'react';
import { Link } from 'react-router-dom';


const VideoCard = ({ video }) => {
  return (
    <div className='videocard' style={{  padding: '10px', margin: '10px', maxWidth: '350px', maxHeight: '300px' }}>
      <Link to={`/video/${video.id}`}>
        <img className='video-image' src={video.snippet.thumbnails.default.url} alt={video.snippet.title} style={{ width: '100%' }} />
      </Link>
      <h3>{video.snippet.title}</h3>
    </div>
  );
};

export default VideoCard;
