import { Card, CardContent } from "@/components/ui/card";

const prizes = [
  {
    icon: "🏆",
    title: "Grand Prize",
    amount: "₹1,00,000",
    subtitle: "+ feature on Memto socials",
    gradientClass: "gradient-orange",
    textColor: "text-white"
  },
  {
    icon: "🎯",
    title: "Weekly Winner",
    amount: "₹500–₹1,000",
    subtitle: "Amazon voucher",
    gradientClass: "gradient-purple",
    textColor: "text-white"
  },
  {
    icon: "🍕",
    title: "Runner-Up",
    amount: "Free meals",
    subtitle: "& café vouchers",
    gradientClass: "gradient-green",
    textColor: "text-white"
  },
  {
    icon: "🎁",
    title: "Every Participant",
    amount: "Guaranteed café discount",
    subtitle: "(10–20%)",
    gradientClass: "gradient-blue",
    textColor: "text-white"
  }
];

export const PrizesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          💰 What You Can Win
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {prizes.map((prize, index) => (
            <Card 
              key={index} 
              className={`${prize.gradientClass} border-0 shadow-card transition-smooth hover:scale-105 hover:shadow-glow rounded-2xl`}
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-4xl mb-4">{prize.icon}</div>
                <h3 className={`text-xl font-bold ${prize.textColor}`}>{prize.title}</h3>
                <div className={`${prize.textColor} text-2xl font-bold`}>
                  {prize.amount}
                </div>
                <p className={`${prize.textColor} text-sm opacity-90`}>{prize.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};