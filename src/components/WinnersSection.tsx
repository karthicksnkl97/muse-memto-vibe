import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const WinnersSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
          🔥 Past Winners & Viral Memes
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12">
          100+ memes uploaded last week. Don't miss your chance!
        </p>
        
        <Card className="bg-card/80 border-border shadow-card max-w-4xl mx-auto">
          <CardContent className="p-12 text-center space-y-8">
            <div className="text-6xl">😂</div>
            <h3 className="text-2xl font-bold text-card-foreground">
              Join the Hall of Fame
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Your meme could be the next viral sensation! See your creation featured across 
              Pune's social media and win amazing prizes.
            </p>
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold rounded-full shadow-glow transition-smooth hover:scale-105"
            >
              🚀 Start Creating Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};