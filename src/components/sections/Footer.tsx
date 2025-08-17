const Footer = () => {
  return (
    <footer className="border-t py-8 mt-16">
      <div className="container mx-auto container-padding text-sm flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-muted-foreground">© {new Date().getFullYear()} Aftab Rasheed — All rights reserved.</p>
        <p className="text-muted-foreground">
          Built with care — <a href="#hero" className="story-link">Back to top</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
