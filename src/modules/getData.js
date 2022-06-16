const refreshFunc = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/THNeemmj46ormQIqw0UT/scores');
  const leaderboardData = await response.json();
  return leaderboardData;
};

export default refreshFunc;
