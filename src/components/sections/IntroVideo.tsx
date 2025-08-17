import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

const IntroVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    setShowVideo(true);
    // Small delay to ensure video element is rendered
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }, 100);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const restart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setCurrentTime(0);
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <section id="intro-video" className="py-16 md:py-24 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Welcome to My World
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Watch my intro video to get to know me and my creative process. 
            This is where the magic begins.
          </p>
        </div>

        {/* Video Player Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
            {/* Show Thumbnail First */}
            {!showVideo && (
              <div className="relative aspect-video">
                <img
                  src="/thumbnails/image.png"
                  alt="Intro Video Thumbnail"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to a placeholder if image fails to load
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDMyMCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMTgwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNDQuNSA3MEwxNzAuNSA4Ny41TDE0NC41IDEwNVY3MFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+';
                  }}
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <Button
                    onClick={handlePlayClick}
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white rounded-full p-6 shadow-2xl hover:scale-110 transition-transform duration-200"
                  >
                    <Play className="h-8 w-8 ml-1" />
                  </Button>
                </div>
              </div>
            )}

            {/* Video Element (only shown after clicking play) */}
            {showVideo && (
              <video
                ref={videoRef}
                className="w-full h-auto aspect-video"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                muted={isMuted}
                playsInline
              >
                <source src="/videos/intro-video.mp4" type="video/mp4" />
                <source src="/videos/intro-video.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            )}

            {/* Custom Video Controls (only shown when video is playing) */}
            {showVideo && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 z-20">
                {/* Progress Bar */}
                <div className="mb-3">
                  <input
                    type="range"
                    min="0"
                    max={duration || 0}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) ${(currentTime / duration) * 100}%, rgba(255,255,255,0.3) ${(currentTime / duration) * 100}%, rgba(255,255,255,0.3) 100%)`
                    }}
                  />
                </div>

                {/* Control Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Play/Pause Button */}
                    <Button
                      onClick={togglePlay}
                      variant="ghost"
                      size="sm"
                      className="text-white hover:bg-white/20 rounded-full p-2"
                    >
                      {isPlaying ? (
                        <Pause className="h-5 w-5" />
                      ) : (
                        <Play className="h-5 w-5" />
                      )}
                    </Button>

                    {/* Mute Button */}
                    <Button
                      onClick={toggleMute}
                      variant="ghost"
                      size="sm"
                      className="text-white hover:bg-white/20 rounded-full p-2"
                    >
                      {isMuted ? (
                        <VolumeX className="h-5 w-5" />
                      ) : (
                        <Volume2 className="h-5 w-5" />
                      )}
                    </Button>

                    {/* Restart Button */}
                    <Button
                      onClick={restart}
                      variant="ghost"
                      size="sm"
                      className="text-white hover:bg-white/20 rounded-full p-2"
                    >
                      <RotateCcw className="h-5 w-5" />
                    </Button>
                  </div>

                  {/* Time Display */}
                  <div className="text-white text-sm font-medium">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </div>

                  {/* Fullscreen Button */}
                  <Button
                    onClick={toggleFullscreen}
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/20 rounded-full p-2"
                  >
                    <Maximize2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            )}

            {/* Play Button Overlay (when video is paused) - Positioned to not cover controls */}
            {showVideo && !isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center pb-20 z-10">
                <Button
                  onClick={togglePlay}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-full p-6 shadow-2xl hover:scale-110 transition-transform duration-200"
                >
                  <Play className="h-8 w-8 ml-1" />
                </Button>
              </div>
            )}
          </div>

          {/* Video Description */}
          <div className="mt-6 text-center">
            <h3 className="font-semibold text-lg mb-2">My Introduction</h3>
            <p className="text-muted-foreground">
              Get to know me, my passion for video editing, and what drives me to create amazing content.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroVideo;
