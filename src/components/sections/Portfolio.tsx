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
    thumbnailUrl: "https://img.youtube.com/vi/cCAKLj9rQxM/maxresdefault.jpg",
    description: "A cinematic showcase of my best work featuring dynamic transitions, color grading, and storytelling techniques.",
    duration: "2:45",
    views: "15.2K",
    date: "2024"
  },
  { 
    id: "project-2", 
    title: "Creative Video Project", 
    category: "YouTube", 
    videoUrl: "https://youtu.be/2caP2EsQarQ",
    thumbnailUrl: "https://img.youtube.com/vi/2caP2EsQarQ/maxresdefault.jpg",
    description: "High-impact creative video with stunning visuals, perfect timing, and emotional storytelling.",
    duration: "3:20",
    views: "8.7K",
    date: "2024"
  },
  { 
    id: "project-3", 
    title: "Professional Edit", 
    category: "Ads", 
    videoUrl: "https://youtu.be/xb65v82Fm3E",
    thumbnailUrl: "https://img.youtube.com/vi/xb65v82Fm3E/maxresdefault.jpg",
    description: "Professional video presentation with clean graphics, smooth animations, and professional execution.",
    duration: "4:15",
    views: "12.1K",
    date: "2024"
  },
  { 
    id: "project-4", 
    title: "Dynamic Content", 
    category: "Corporate", 
    videoUrl: "https://youtu.be/Naram6TjAec",
    thumbnailUrl: "https://img.youtube.com/vi/Naram6TjAec/maxresdefault.jpg",
    description: "Engaging content edit with retention hooks, dynamic pacing, and audience engagement elements.",
    duration: "5:30",
    views: "45.3K",
    date: "2024"
  },
  { 
    id: "project-5", 
    title: "Visual Storytelling", 
    category: "Shorts", 
    videoUrl: "https://youtu.be/896r_ixafZY",
    thumbnailUrl: "https://img.youtube.com/vi/896r_ixafZY/maxresdefault.jpg",
    description: "High-energy content optimized for maximum retention and viral potential across platforms.",
    duration: "2:45",
    views: "89.2K",
    date: "2024"
  },
  { 
    id: "project-6", 
    title: "Cinematic Production", 
    category: "Ads", 
    videoUrl: "https://youtu.be/5TC4zD6CZX4",
    thumbnailUrl: "https://img.youtube.com/vi/5TC4zD6CZX4/maxresdefault.jpg",
    description: "Dynamic cinematic video with excitement building, clear messaging, and strong visual appeal.",
    duration: "3:00",
    views: "23.8K",
    date: "2024"
  },
  { 
    id: "project-7", 
    title: "Creative Masterpiece", 
    category: "Corporate", 
    videoUrl: "https://youtu.be/egkRLaANzFM",
    thumbnailUrl: "https://img.youtube.com/vi/egkRLaANzFM/maxresdefault.jpg",
    description: "Professional video production with clear visuals, step-by-step presentation, and creative execution.",
    duration: "6:45",
    views: "18.9K",
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
          {openId && (() => {
            const video = allVideos.find(v => v.id === openId);
            // Extract YouTube video ID from URL
            const videoId = video?.videoUrl.includes('youtu.be/') 
              ? video.videoUrl.split('youtu.be/')[1]?.split('?')[0]
              : video?.videoUrl.split('v=')[1]?.split('&')[0];
            
            return (
              <div className="space-y-4">
                <h3 className="text-xl font-bold">
                  {video?.title}
                </h3>
                <p className="text-muted-foreground">
                  {video?.description}
                </p>
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video?.title}
                  />
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Duration: {video?.duration}</span>
                  <span>Views: {video?.views}</span>
                  <span>Date: {video?.date}</span>
                </div>
              </div>
            );
          })()}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
