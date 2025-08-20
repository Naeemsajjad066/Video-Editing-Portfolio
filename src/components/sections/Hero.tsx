import heroImage from "@/assets/hero-video-editor.jpg";
import { Button } from "@/components/ui/button";
import { Play, Sparkles, Award, CheckCircle2, Star, ChevronDown, Zap, TrendingUp, Users } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative">
      {/* Background with enhanced overlay */}
      <div className="relative min-h-[90vh] md:min-h-[95vh] overflow-hidden rounded-b-[clamp(1rem,4vw,2rem)]">
        <img
          src={heroImage}
          alt="Professional video editing workstation with dual monitors and cinematic lighting"
          className="absolute inset-0 h-full w-full object-cover will-change-transform scale-100"
          loading="eager"
          decoding="async"
        />
        
        {/* Lighter overlay for better background visibility */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Floating particles effect with enhanced animations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-2 h-2 bg-white/60 rounded-full float-particle shadow-lg" style={{ animationDelay: '0s' }} />
          <div className="absolute top-32 right-20 w-1 h-1 bg-primary/80 rounded-full float-particle shadow-lg" style={{ animationDelay: '1s' }} />
          <div className="absolute top-48 left-1/4 w-1.5 h-1.5 bg-white/50 rounded-full float-particle shadow-lg" style={{ animationDelay: '2s' }} />
          <div className="absolute top-64 right-1/3 w-1 h-1 bg-primary/70 rounded-full float-particle shadow-lg" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-80 left-1/3 w-1.5 h-1.5 bg-white/40 rounded-full float-particle shadow-lg" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-96 right-1/4 w-1 h-1 bg-primary/60 rounded-full float-particle shadow-lg" style={{ animationDelay: '2.5s' }} />
        </div>

        {/* Main content with enhanced animations and two-column layout */}
        <div className="relative z-10 container mx-auto container-padding flex min-h-[90vh] md:min-h-[95vh] items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full max-w-7xl">
            {/* Left Column - Text Content */}
            <div className="text-reveal stagger-1 order-2 lg:order-1">
              {/* Badge with enhanced styling */}
              <div className="mb-6 mt-4">
                <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-3 rounded-full bg-black/30 backdrop-blur-md border border-white/30 shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-black/40">
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-primary animate-pulse" />
                  <span className="text-sm sm:text-base font-semibold text-white tracking-wide">Premium Video Editing</span>
                  <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                </div>
              </div>

              {/* Main heading with enhanced typography and solid colors */}
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.9] sm:leading-[0.85] mb-6 sm:mb-8 text-reveal stagger-2">
                <span className="block text-white drop-shadow-2xl mb-2">Transforming</span>
                <span className="block text-white drop-shadow-2xl mb-2">Ideas into</span>
                <span className="text-primary drop-shadow-lg">
                  Engaging Visuals
                </span>
              </h1>

              {/* Enhanced description with better readability */}
              <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 max-w-3xl text-reveal stagger-3 leading-relaxed font-medium drop-shadow-lg">
                I'm <strong className="text-white font-bold">Aftab Rasheed</strong>, a professional video editor crafting cinematic stories for YouTube, brands, and creators worldwide.
              </p>

              {/* Enhanced CTA buttons with solid styling */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 text-reveal stagger-5">
                <Button asChild variant="hero" size="lg" className="group relative overflow-hidden btn-modern hero-glow text-base sm:text-lg font-semibold px-6 sm:px-10 py-4 sm:py-6 h-auto shadow-2xl hover:shadow-primary/25">
                  <a href="#portfolio" aria-label="View my work" className="relative z-10">
                    <Play className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform duration-200" />
                    View My Work
                    <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="group border-2 border-white/40 hover:border-white/60 hover:bg-black/30 transition-all duration-300 btn-modern text-base sm:text-lg font-semibold px-6 sm:px-10 py-4 sm:py-6 h-auto bg-black/30 backdrop-blur-md shadow-2xl">
                  <a href="#contact" aria-label="Hire me" className="flex items-center gap-2 text-white hover:text-primary">
                    <Zap className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform duration-200" />
                    Hire Me
                  </a>
                </Button>
              </div>

              {/* Trust indicators with solid styling */}
              <div className="mt-8 sm:mt-12 text-reveal stagger-6">
                <p className="text-white/90 text-sm sm:text-base font-medium mb-3 sm:mb-4">Trusted by creators from:</p>
                <div className="flex flex-wrap items-center gap-4 sm:gap-8 opacity-90">
                  <div className="text-xs sm:text-sm font-semibold text-white hover:text-primary transition-colors cursor-pointer hover:scale-105 transform duration-200">YouTube</div>
                  <div className="text-xs sm:text-sm font-semibold text-white hover:text-primary transition-colors cursor-pointer hover:scale-105 transform duration-200">TikTok</div>
                  <div className="text-xs sm:text-sm font-semibold text-white hover:text-primary transition-colors cursor-pointer hover:scale-105 transform duration-200">Instagram</div>
                  <div className="text-xs sm:text-sm font-semibold text-white hover:text-primary transition-colors cursor-pointer hover:scale-105 transform duration-200">Brands</div>
                </div>
              </div>
            </div>

            {/* Right Column - Profile Photo */}
            <div className="flex justify-center lg:justify-end text-reveal stagger-4 order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="relative group">
                {/* Main profile photo container */}
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] 2xl:w-[32rem] 2xl:h-[32rem] rounded-full overflow-hidden shadow-2xl group-hover:shadow-primary/25 transition-all duration-500">
                  {/* Profile image */}
                  <img
                    src="/profile/Profile.png"
                    alt="Aftab Rasheed - Professional Video Editor"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 group-hover:to-black/10 transition-all duration-500" />
                </div>

                {/* Animated border ring */}
                <div className="absolute inset-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] 2xl:w-[32rem] 2xl:h-[32rem] rounded-full border-4 border-primary/30 group-hover:border-primary/60 transition-all duration-500 animate-pulse" />
                
                {/* Outer glow ring */}
                <div className="absolute inset-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] 2xl:w-[32rem] 2xl:h-[32rem] rounded-full border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-500 blur-sm" />
                
                {/* Floating elements around the photo - Hidden on mobile for better performance */}
                <div className="hidden sm:block absolute -top-6 -right-6 w-20 h-20 bg-primary/20 backdrop-blur-md rounded-full border border-primary/40 flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                  <Award className="w-10 h-10 text-primary" />
                </div>
                
                <div className="hidden sm:block absolute -bottom-6 -left-6 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full border border-white/40 flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                  <Star className="w-10 h-10 text-white" />
                </div>
                
                <div className="hidden md:block absolute top-1/2 -right-12 w-16 h-16 bg-primary/30 backdrop-blur-md rounded-full border border-primary/50 flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                
                <div className="hidden md:block absolute top-1/2 -left-12 w-16 h-16 bg-white/30 backdrop-blur-md rounded-full border border-white/50 flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>

                {/* Bottom caption - Responsive sizing */}
                <div className="absolute -bottom-16 sm:-bottom-20 left-1/2 transform -translate-x-1/2 text-center">
                  <div className="bg-black/40 backdrop-blur-md rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 border border-white/20">
                    <p className="text-white font-semibold text-sm sm:text-lg md:text-xl whitespace-nowrap">Aftab Rasheed</p>
                    <p className="text-primary text-xs sm:text-sm md:text-base font-medium whitespace-nowrap">Video Editor & Creator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-reveal stagger-6">
          <a 
            href="#services" 
            aria-label="Scroll to services" 
            className="group inline-flex flex-col items-center text-white/90 hover:text-primary transition-colors duration-300"
          >
            <span className="text-sm font-semibold mb-3 tracking-wider opacity-90 group-hover:opacity-100 transition-opacity">
              EXPLORE
            </span>
            <div className="relative">
              <ChevronDown className="h-7 w-7 animate-bounce group-hover:scale-110 transition-transform duration-200" />
              <div className="absolute inset-0 bg-primary/40 rounded-full blur-md group-hover:bg-primary/60 transition-colors duration-300" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
