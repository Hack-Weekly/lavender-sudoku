export const Leaderboard = ({ leaderboardData }) => {
  return (
    <>
      <h2 className="text-xl font-semibold mb-2 text-gray-800">Leaderboard</h2>
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left py-3 px-4 bg-gray-100 text-gray-600">Rank</th>
              <th className="text-left py-3 px-4 bg-gray-100 text-gray-600">Username</th>
              <th className="text-left py-3 px-4 bg-gray-100 text-gray-600">Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((entry, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                <td className="py-3 px-4">{entry.rank}</td>
                <td className="py-3 px-4">{entry.username}</td>
                <td className="py-3 px-4">{entry.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
