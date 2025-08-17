import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Film, 
  Scissors, 
  Sparkles, 
  Rocket, 
  Image as ImageIcon, 
  Video, 
  Zap, 
  Target,
  TrendingUp,
  Palette,
  Lightbulb,
  Star
} from "lucide-react";

const services = [
  {
    title: "Video Editing",
    desc: "Professional long-form and episodic content for YouTube, Instagram, TikTok with cinematic quality and engaging storytelling.",
    Icon: Film,
    features: ["Color Grading", "Audio Enhancement", "Smooth Transitions"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20"
  },
  {
    title: "YouTube Automation",
    desc: "Complete script-to-publish editing pipelines for faceless channels with optimized workflows and consistent quality.",
    Icon: Rocket,
    features: ["Template Systems", "Batch Processing", "Quality Assurance"],
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20"
  },
  {
    title: "Short-Form Content",
    desc: "High-retention shorts and reels optimized for hooks, trending formats, and maximum engagement across platforms.",
    Icon: Zap,
    features: ["Hook Optimization", "Trend Integration", "Platform Specific"],
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/20"
  },
  {
    title: "Motion Graphics",
    desc: "Custom on-brand titles, lower thirds, transitions, and effects that elevate your content and maintain brand consistency.",
    Icon: Sparkles,
    features: ["Custom Animations", "Brand Integration", "Dynamic Elements"],
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20"
  },
  {
    title: "Thumbnail Design",
    desc: "Scroll-stopping thumbnails that convert views with psychology-driven design principles and A/B testing insights.",
    Icon: Target,
    features: ["Psychology Driven", "A/B Testing", "High Conversion"],
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20"
  },
  {
    title: "Content Strategy",
    desc: "Data-driven content planning and optimization strategies to maximize reach, engagement, and growth across platforms.",
    Icon: TrendingUp,
    features: ["Analytics Driven", "Growth Planning", "Audience Insights"],
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/20"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto container-padding">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Star className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">What I Offer</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Professional Services
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive video editing solutions tailored to your platform, audience, and goals. 
            From concept to final delivery, I bring your vision to life.
          </p>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, desc, Icon, features, color, bgColor, borderColor }, index) => (
            <Card 
              key={title} 
              className={`group relative overflow-hidden hover-scale border-2 ${borderColor} ${bgColor} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon Container */}
              <div className="relative z-10">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed text-base">
                    {desc}
                  </CardDescription>
                  
                  {/* Features List */}
                  <div className="space-y-2">
                    {features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${color}`} />
                        <span className="text-muted-foreground font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Hover Effect Indicator */}
                  <div className="pt-4">
                    <div className={`w-full h-1 bg-gradient-to-r ${color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                  </div>
                </CardContent>
              </div>
              
              {/* Corner Accent */}
              <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform rotate-45 translate-x-8 -translate-y-8`} />
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Content?
            </h3>
            <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing together. 
              Every video tells a story - let me help you tell yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#portfolio" 
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-colors duration-300 hover:scale-105"
              >
                <Video className="h-5 w-5" />
                View My Work
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/5 text-primary rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Lightbulb className="h-5 w-5" />
                Start Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
