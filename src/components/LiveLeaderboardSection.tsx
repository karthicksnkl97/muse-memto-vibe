import { Card, CardContent } from "@/components/ui/card";

const leaderboardData = [
  {
    position: 1,
    username: "@PuneMemer123",
    votes: "1136 votes",
    medal: "🥇"
  },
  {
    position: 2,
    username: "@FCRoadFunny",
    votes: "1043 votes", 
    medal: "🥈"
  },
  {
    position: 3,
    username: "@VimanNagarVibes",
    votes: "980 votes",
    medal: "🥉"
  }
];

export const LiveLeaderboardSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="gradient-yellow border-0 shadow-card rounded-2xl">
          <CardContent className="p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
              🔥 Live Leaderboard - Top Memers
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {leaderboardData.map((memer, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="text-4xl">{memer.medal}</div>
                    <h3 className="text-lg font-bold text-gray-800">{memer.username}</h3>
                    <p className="text-gray-600">{memer.votes}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};