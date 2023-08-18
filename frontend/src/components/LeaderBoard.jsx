// export const Leaderboard = ({ leaderboardData, username }) => {
//   return (
//     <>
//       <h2 className="text-xl font-semibold mt-2 underline text-gray-800">Leaderboard</h2>
//       <div className="w-full border  border-spacing-8 border-red-600">
//         <table className="w-full border-collapse">
//           <thead class="underline">
//             <tr>
//               <th className="text-left py-3 px-4 bg-gray-100 text-gray-600">Rank</th>
//               <th className="text-left py-3 px-4 bg-gray-100 text-gray-600">Username</th>
//               <th className="text-left py-3 px-4 bg-gray-100 text-gray-600">Score</th>
//             </tr>
//           </thead>
//           <tbody>
//             {leaderboardData.map((entry, index) => (
//               <tr key={index} className={entry.username === username ? "bg-blue-gray-200" : (index % 2 === 0 ? "bg-gray-100" : "bg-white")}>
//                 <td className="py-3 px-4">{index + 1}</td>
//                 <td className="py-3 px-4">{entry.username}</td>
//                 <td className="py-3 px-4">{entry.score}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

import React from 'react';

const getMedal = (rank) => {
  if (rank === 1) {
    return '🥇'; // Gold medal
  } else if (rank === 2) {
    return '🥈'; // Silver medal
  } else if (rank === 3) {
    return '🥉'; // Bronze medal
  } else {
    return ''; // No medal for ranks beyond 3
  }
};



export const Leaderboard = ({ leaderboardData,username,profile }) => {
  return (
    <>
      <h2 className="text-xl font-semibold mt-2 underline text-gray-800">Leaderboard</h2>
      <div className="w-full  border-4 rounded-2xl border-yellow-200">
        <table className="w-full border-collapse">
          <thead className="underline">
            <tr>
              <th className="text-left py-3 px-4 bg-gray-100 text-gray-600">Rank</th>
              <th className="text-left py-3 px-4 bg-gray-100 text-gray-600">Username</th>
              <th className="text-left py-3 px-4 bg-gray-100 text-gray-600">Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((entry, index) => (
              <tr
                key={index}
                className={
                  entry.username === username
                    ? 'bg-blue-gray-200'
                    : index % 2 === 0
                    ? 'bg-gray-100'
                    : 'bg-white'
                }
              >
                <td className="py-3 px-2">
                <span className="ml-2">{getMedal(index + 1)}</span>
                  {index + 1}.
                </td>
                <td className="py-3 px-4">
                  {entry.username}
                </td>
                <td className="py-3 px-4">{entry.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
