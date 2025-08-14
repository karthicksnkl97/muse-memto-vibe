import { Card, CardContent } from "@/components/ui/card";

const themes = [
  {
    week: "Week 1",
    title: "My Monday Mood in Pune",
    emoji: "😴"
  },
  {
    week: "Week 2",
    title: "Breakup vs Biryani", 
    emoji: "💔 🍛"
  },
  {
    week: "Week 3",
    title: "Indian Parents vs Memes",
    emoji: "👨‍👩‍👧‍👦"
  },
  {
    week: "Week 4",
    title: "Pune Traffic Be Like…",
    emoji: "🚗"
  }
];

export const WeeklyThemesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground">
          🗓️ Weekly Themes
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {themes.map((theme, index) => (
            <Card 
              key={index}
              className="bg-card/80 border-border shadow-card transition-smooth hover:scale-105 hover:shadow-glow"
            >
              <CardContent className="p-6 text-center space-y-4">
                <h3 className="gradient-accent bg-clip-text text-transparent text-lg font-bold">
                  {theme.week}
                </h3>
                <h4 className="text-xl font-bold text-card-foreground">
                  {theme.title}
                </h4>
                <div className="text-4xl">{theme.emoji}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};