import { Card, CardContent } from "@/components/ui/card";

const partners = [
  {
    emoji: "☕",
    name: "Café Coffee Day",
    discount: "15% OFF"
  },
  {
    emoji: "🍕", 
    name: "Domino's Pizza",
    discount: "20% OFF"
  },
  {
    emoji: "🍔",
    name: "McDonald's", 
    discount: "10% OFF"
  },
  {
    emoji: "🧋",
    name: "Chaayos",
    discount: "25% OFF"
  }
];

export const PartnersSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
          ☕ Partner Café Discounts
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Show your Memto profile at checkout to get discounts — just for playing!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <Card 
              key={index}
              className="bg-card/80 border-border shadow-card transition-smooth hover:scale-105 hover:shadow-glow"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-4xl mb-4">{partner.emoji}</div>
                <h3 className="text-lg font-bold text-card-foreground">{partner.name}</h3>
                <div className="gradient-accent bg-clip-text text-transparent text-xl font-bold">
                  {partner.discount}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};