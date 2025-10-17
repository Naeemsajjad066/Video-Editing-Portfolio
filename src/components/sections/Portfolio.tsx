import { useMemo, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play, ExternalLink, Calendar, Clock, TrendingUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoItem {
  id: string;
  title: string;
  category: string;
  videoUrl: string;
  thumbnailUrl: string;
  description?: string;
  duration?: string;
  views?: string;
  date?: string;
}

const allVideos: VideoItem[] = [
  { 
    id: "showreel-1", 
    title: "Showreel – Cinematic Edit", 
    category: "YouTube", 
    videoUrl: "https://youtu.be/cCAKLj9rQxM",
    thumbnailUrl: "/thumbnails/image.png",
    description: "A cinematic showcase of my best work featuring dynamic transitions, color grading, and storytelling techniques.",
    duration: "2:45",
    views: "15.2K",
    date: "2024"
  },
  { 
    id: "ad-spot-1", 
    title: "Brand Commercial", 
    category: "Ads", 
    videoUrl: "/videos/intro-video.mp4",
    thumbnailUrl: "/thumbnails/image.png",
    description: "High-impact commercial for luxury brand with stunning visuals, perfect timing, and emotional storytelling.",
    duration: "1:30",
    views: "8.7K",
    date: "2024"
  },
  { 
    id: "corporate-1", 
    title: "Company Overview", 
    category: "Corporate", 
    videoUrl: "/videos/intro-video.mp4",
    thumbnailUrl: "/thumbnails/image.png",
    description: "Professional corporate presentation with clean graphics, smooth animations, and professional voiceover.",
    duration: "3:15",
    views: "12.1K",
    date: "2024"
  },
  { 
    id: "youtube-1", 
    title: "Creator Content", 
    category: "YouTube", 
    videoUrl: "/videos/intro-video.mp4",
    thumbnailUrl: "/thumbnails/image.png",
    description: "Engaging YouTube content edit with retention hooks, dynamic pacing, and audience engagement elements.",
    duration: "8:30",
    views: "45.3K",
    date: "2024"
  },
  { 
    id: "short-1", 
    title: "Viral Short", 
    category: "Shorts", 
    videoUrl: "/videos/intro-video.mp4",
    thumbnailUrl: "/thumbnails/image.png",
    description: "High-energy short-form content optimized for maximum retention and viral potential across platforms.",
    duration: "0:45",
    views: "89.2K",
    date: "2024"
  },
  { 
    id: "ad-spot-2", 
    title: "Product Launch", 
    category: "Ads", 
    videoUrl: "/videos/intro-video.mp4",
    thumbnailUrl: "/thumbnails/image.png",
    description: "Dynamic product reveal video with excitement building, clear messaging, and strong call-to-action.",
    duration: "2:00",
    views: "23.8K",
    date: "2024"
  },
  { 
    id: "corporate-2", 
    title: "Training Video", 
    category: "Corporate", 
    videoUrl: "/videos/intro-video.mp4",
    thumbnailUrl: "/thumbnails/image.png",
    description: "Educational corporate training with clear visuals, step-by-step instructions, and professional presentation.",
    duration: "5:45",
    views: "18.9K",
    date: "2024"
  },
  { 
    id: "short-2", 
    title: "Social Media Edit", 
    category: "Shorts", 
    videoUrl: "/videos/intro-video.mp4",
    thumbnailUrl: "/thumbnails/image.png",
    description: "Trendy social media content with current trends, engaging transitions, and platform-specific optimization.",
    duration: "0:30",
    views: "67.4K",
    date: "2024"
  },
  { 
    id: "youtube-2", 
    title: "Educational Series", 
    category: "YouTube", 
    videoUrl: "/videos/intro-video.mp4",
    thumbnailUrl: "/thumbnails/image.png",
    description: "Comprehensive educational content with clear explanations, visual aids, and engaging presentation style.",
    duration: "12:20",
    views: "34.7K",
    date: "2024"
  },
  { 
    id: "ad-spot-3", 
    title: "Event Promo", 
    category: "Ads", 
    videoUrl: "/videos/intro-video.mp4",
    thumbnailUrl: "/thumbnails/image.png",
    description: "Exciting event promotion with dynamic visuals, compelling messaging, and strong audience appeal.",
    duration: "1:15",
    views: "31.2K",
    date: "2024"
  },
  { 
    id: "corporate-3", 
    title: "Client Testimonial", 
    category: "Corporate", 
    videoUrl: "/videos/intro-video.mp4",
    thumbnailUrl: "/thumbnails/image.png",
    description: "Authentic client testimonial with professional editing, clear audio, and compelling storytelling.",
    duration: "2:30",
    views: "9.6K",
    date: "2024"
  },
  { 
    id: "short-3", 
    title: "Behind the Scenes", 
    category: "Shorts", 
    videoUrl: "/videos/intro-video.mp4",
    thumbnailUrl: "/thumbnails/image.png",
    description: "Exclusive behind-the-scenes content with raw footage, authentic moments, and engaging editing.",
    duration: "0:55",
    views: "42.8K",
    date: "2024"
  }
];

const categories = ["All", "YouTube", "Ads", "Shorts", "Corporate"] as const;

const Portfolio = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const grouped = useMemo(() => {
    const map: Record<string, VideoItem[]> = {
      All: allVideos,
      YouTube: allVideos.filter(v => v.category === "YouTube"),
      Ads: allVideos.filter(v => v.category === "Ads"),
      Shorts: allVideos.filter(v => v.category === "Shorts"),
      Corporate: allVideos.filter(v => v.category === "Corporate"),
    };
    return map;
  }, []);

  const handleVideoOpen = (videoId: string) => {
    setOpenId(videoId);
  };

  const handleVideoClose = () => {
    setOpenId(null);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const getVisibleVideos = (videos: VideoItem[]) => {
    return showAll ? videos : videos.slice(0, 8);
  };

  const hasMoreVideos = (videos: VideoItem[]) => {
    return videos.length > 8;
  };

  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="container mx-auto container-padding">
        {/* Enhanced Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Portfolio Showcase
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore my diverse portfolio of video editing projects across different platforms and styles. 
            Each piece demonstrates creativity, technical skill, and attention to detail.
          </p>
        </div>

        <Tabs defaultValue="All" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-5 bg-muted/50 p-1 rounded-xl">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="rounded-lg px-4 py-2 text-sm font-medium transition-all hover:bg-primary/10 hover:text-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => {
            const categoryVideos = grouped[category];
            const visibleVideos = getVisibleVideos(categoryVideos);
            const hasMore = hasMoreVideos(categoryVideos);
            
            return (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {visibleVideos.map((video) => (
                    <Card key={video.id} className="group overflow-hidden hover-scale border-2 border-border/50 hover:border-primary/30 transition-all duration-300">
                      <div className="relative aspect-video bg-black rounded-t-lg overflow-hidden">
                        {/* Thumbnail Image */}
                        <img
                          src={video.thumbnailUrl}
                          alt={`${video.title} thumbnail`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            // Fallback to a placeholder if image fails to load
                            e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDMyMCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMTgwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNDQuNSA3MEwxNzAuNSA4Ny41TDE0NC41IDEwNVY3MFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+';
                          }}
                        />
                        
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button
                            onClick={() => handleVideoOpen(video.id)}
                            className="bg-primary hover:bg-primary/90 text-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform duration-200"
                          >
                            <Play className="h-6 w-6" />
                          </button>
                        </div>

                        {/* Video Stats */}
                        <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md">
                          {video.duration}
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                            {video.title}
                          </h3>
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {video.description}
                        </p>

                        {/* Video Metadata */}
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <TrendingUp className="h-3 w-3" />
                            <span>{video.views}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{video.date}</span>
                          </div>
                        </div>

                        {/* View Button */}
                        <button 
                          onClick={() => handleVideoOpen(video.id)}
                          className="w-full mt-3 bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-300 hover:scale-105"
                        >
                          View Project
                        </button>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Show More/Less Button */}
                {hasMore && (
                  <div className="text-center mt-8">
                    <Button
                      onClick={toggleShowAll}
                      variant="outline"
                      size="lg"
                      className="px-8 py-3 border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                    >
                      <span className="mr-2">
                        {showAll ? 'Show Less' : `Show ${categoryVideos.length - 8} More`}
                      </span>
                      <ChevronDown 
                        className={`h-5 w-5 transition-transform duration-300 ${
                          showAll ? 'rotate-180' : ''
                        }`}
                      />
                    </Button>
                  </div>
                )}
              </TabsContent>
            );
          })}
        </Tabs>

        {/* Portfolio CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Ready to See More?
            </h3>
            <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
              This is just a sample of my work. Let's discuss your project and create something amazing together.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-colors duration-300 hover:scale-105"
            >
              <ExternalLink className="h-5 w-5" />
              Start Your Project
            </a>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={openId !== null} onOpenChange={handleVideoClose}>
        <DialogContent className="max-w-4xl">
          {openId && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold">
                {allVideos.find(v => v.id === openId)?.title}
              </h3>
              <p className="text-muted-foreground">
                {allVideos.find(v => v.id === openId)?.description}
              </p>
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <video
                  src={allVideos.find(v => v.id === openId)?.videoUrl}
                  className="w-full h-full"
                  controls
                  autoPlay
                  muted
                  onError={(e) => {
                    console.error('Video failed to load:', e.currentTarget.src);
                    const videoElement = e.currentTarget;
                    videoElement.style.display = 'none';
                    const errorDiv = document.createElement('div');
                    errorDiv.className = 'flex items-center justify-center h-full text-white';
                    errorDiv.innerHTML = '<p>Video failed to load. Please check the file path.</p>';
                    videoElement.parentNode?.appendChild(errorDiv);
                  }}
                >
                  <source src={allVideos.find(v => v.id === openId)?.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Duration: {allVideos.find(v => v.id === openId)?.duration}</span>
                <span>Views: {allVideos.find(v => v.id === openId)?.views}</span>
                <span>Date: {allVideos.find(v => v.id === openId)?.date}</span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
