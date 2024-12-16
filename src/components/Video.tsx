import React, { useEffect, useRef, useState } from 'react';
import UnMute from '../unmute-svg';
import Mute from '../mute-svg';

interface VideoWithControlsProps {
  videoUrl: string;
  onVideoEnd: () => void; // Callback when the video finishes
}

const VideoWithControls: React.FC<VideoWithControlsProps> = ({ videoUrl, onVideoEnd }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [unMute,setUnmute] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play();
      video.addEventListener('ended', onVideoEnd);
    }
    return () => {
      video?.removeEventListener('ended', onVideoEnd);
    };
  }, [onVideoEnd]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <video
        ref={videoRef}
        src={videoUrl}
        controls={false}
        muted
        loop={false}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <button
        onClick={() => {
          const video = videoRef.current;
          if (video){
            setUnmute(!unMute);
            video.muted = !video.muted;
          } 
        }}
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          padding: '5px 10px',
          borderRadius: '80%',
          border: '1px solid',
          background: '#90889A'
        }}
      >
        {unMute? <UnMute /> : <Mute/> }
      </button>
    </div>
  );
};

export default VideoWithControls;