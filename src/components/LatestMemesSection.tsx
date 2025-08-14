import { Card, CardContent } from "@/components/ui/card";

const latestMemes = [
  {
    username: "@user123",
    timeAgo: "2 mins ago",
    emoji: "🚗",
    bgColor: "bg-blue-100"
  },
  {
    username: "@memequeen", 
    timeAgo: "5 mins ago",
    emoji: "☕",
    bgColor: "bg-green-100"
  },
  {
    username: "@puneboy",
    timeAgo: "8 mins ago", 
    emoji: "🍕",
    bgColor: "bg-purple-100"
  },
  {
    username: "@rainymemes",
    timeAgo: "12 mins ago",
    emoji: "🌧️", 
    bgColor: "bg-yellow-100"
  }
];

export const LatestMemesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground">
          🎯 See Latest Memes
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestMemes.map((meme, index) => (
            <Card key={index} className="bg-card/80 border-border shadow-card transition-smooth hover:scale-105">
              <CardContent className="p-6">
                <div className={`${meme.bgColor} rounded-lg h-32 flex items-center justify-center mb-4`}>
                  <span className="text-4xl">{meme.emoji}</span>
                </div>
                <h3 className="font-bold text-card-foreground mb-1">{meme.username}</h3>
                <p className="text-muted-foreground text-sm">{meme.timeAgo}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};