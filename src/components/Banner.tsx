/* eslint-disable react/no-unknown-property */
import React from 'react';

function Banner(): JSX.Element {
  return (
    <div className="w-full">
      {/* <video
        src="/src/assets/video.mp4"
        width="100%"
        height="60%"
        autoPlay
        loop
        muted
      ></video> */}
      <img
        src="https://i.ibb.co/yVnqzCt/contacts.jpg"
        alt=""
        className="w-full h-screen"
      />
      
    </div>
  );
}

export default Banner;
