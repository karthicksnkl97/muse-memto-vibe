import { Card, CardContent } from "@/components/ui/card";

const pastWinners = [
  {
    emoji: "😂",
    username: "@PuneMemer",
    memeTitle: "When you see FC Road traffic",
    likes: "1,247 likes"
  },
  {
    emoji: "🤣", 
    username: "@VimanNagarViral",
    memeTitle: "Pune weather vs my mood",
    likes: "2,156 likes"
  },
  {
    emoji: "💯",
    username: "@KPFunnyGuy", 
    memeTitle: "Biryani vs Vada Pav debate",
    likes: "3,421 likes"
  }
];

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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pastWinners.map((winner, index) => (
            <Card key={index} className="bg-card/80 border-border shadow-card transition-smooth hover:scale-105">
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-5xl mb-4">{winner.emoji}</div>
                <h3 className="text-lg font-bold text-card-foreground">Winner: {winner.username}</h3>
                <p className="text-muted-foreground italic">"{winner.memeTitle}"</p>
                <p className="text-green-500 font-semibold">{winner.likes}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};