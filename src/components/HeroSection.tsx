import { Button } from "@/components/ui/button";
import { CountdownTimer } from "./CountdownTimer";
import trophyImage from "@/assets/trophy.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-8">
        <CountdownTimer />
        
        <div className="space-y-6">
          <img 
            src={trophyImage} 
            alt="Trophy" 
            className="w-24 h-24 mx-auto floating-animation"
          />
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              Pune's Biggest
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold gradient-accent bg-clip-text text-transparent">
              Meme Battle
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold text-foreground">
              is ON!
            </h3>
          </div>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          Make memes. Get famous. Win prizes from ₹1,000 to ₹1,00,000.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold rounded-full shadow-glow transition-smooth hover:scale-105"
          >
            🔴 Join the Meme Battle Now
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-border bg-card/50 hover:bg-card text-card-foreground px-8 py-6 text-lg rounded-full transition-smooth hover:scale-105"
          >
            View Weekly Themes & Prizes
          </Button>
        </div>
        
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          <span>☕</span>
          Get a café discount instantly after uploading your first meme!
        </p>
      </div>
    </section>
  );
};