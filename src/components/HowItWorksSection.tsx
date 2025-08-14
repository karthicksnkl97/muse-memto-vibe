import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: "📱",
    number: "1",
    title: "Scan & Join",
    description: "Scan the QR or click Join Now"
  },
  {
    icon: "🎨",
    number: "2", 
    title: "Create a Meme",
    description: "Based on weekly theme"
  },
  {
    icon: "🏆",
    number: "3",
    title: "Win & Get Famous",
    description: "Prizes + your meme featured across Pune"
  }
];

export const HowItWorksSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground">
          🚀 How It Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="bg-card/80 border-border shadow-card transition-smooth hover:scale-105"
            >
              <CardContent className="p-8 text-center space-y-6">
                <div className="text-5xl mb-4">{step.icon}</div>
                <div className="gradient-accent bg-clip-text text-transparent text-6xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-card-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-lg">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};