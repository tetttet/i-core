"use client";

import { useEffect, useState } from "react";

const Hero = () => {
  const heroVideo = "/videos/hero-1.mp4";
  const smallHeroVideo = "/videos/smallHero.mp4";

  const [videoSrc, setVideoSrc] = useState(heroVideo); // Default video source
  const [isClient, setIsClient] = useState(false); // State to track if it's the client side

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    // Set isClient to true after component mounts
    setIsClient(true);

    // Add resize event listener
    window.addEventListener("resize", handleVideoSrcSet);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  // Set video source based on window size, but only after component is mounted
  useEffect(() => {
    if (isClient) {
      handleVideoSrcSet();
    }
  }, [isClient]); // Runs after isClient is set to true

  if (!isClient) {
    // Render a placeholder or fallback for SSR
    return <div className="w-full h-full bg-black"></div>;
  }

  return (
    <section className="w-full mt-0 lg:mt-16 nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <div className="md:w-full w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
