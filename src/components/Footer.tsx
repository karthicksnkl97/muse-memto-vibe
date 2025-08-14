export const Footer = () => {
  return (
    <footer className="bg-card/90 border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-card-foreground">Memto</h3>
            <p className="text-card-foreground/80">
              Pune's biggest meme community
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-card-foreground">Quick Links</h4>
            <div className="space-y-2">
              <a href="#" className="block text-card-foreground/80 hover:text-card-foreground transition-smooth">
                What is Memto?
              </a>
              <a href="#" className="block text-card-foreground/80 hover:text-card-foreground transition-smooth">
                Terms & Conditions
              </a>
              <a href="#" className="block text-card-foreground/80 hover:text-card-foreground transition-smooth">
                Privacy Policy
              </a>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-card-foreground">Follow Us</h4>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#" className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white transition-smooth hover:scale-105">
                📘
              </a>
              <a href="#" className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center text-white transition-smooth hover:scale-105">
                📷
              </a>
              <a href="#" className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center text-white transition-smooth hover:scale-105">
                🎥
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-card-foreground/80">
            © 2024 Memto. Made with ❤️ in Pune
          </p>
        </div>
      </div>
    </footer>
  );
};