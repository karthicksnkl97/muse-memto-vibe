import { Button } from "@/components/ui/button";

export const FinalCTASection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="text-6xl mb-6">🔥</div>
        <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          The Streets of Pune Are
        </h2>
        <h3 className="text-4xl md:text-6xl font-bold gradient-accent bg-clip-text text-transparent mb-8">
          Waiting for Your Meme
        </h3>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          🎯 You could be the next ₹1 Lakh winner. Don't just scroll — MEME IT!
        </p>
        
        <Button 
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground px-12 py-6 text-xl font-bold rounded-full shadow-glow transition-smooth hover:scale-105"
        >
          🚀 Join the Battle Now
        </Button>
        
        <p className="text-muted-foreground mt-4">
          🚀 One-tap join • Instant rewards • Fame guaranteed
        </p>
      </div>
    </section>
  );
};