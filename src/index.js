/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './main.css';

const refresh = document.getElementById('refresh');
const submit = document.getElementById('submit');
const nameInput = document.getElementById('name');
const scoreInput = document.getElementById('score');
const recentSores = document.querySelector('#recent-scores');

document.getElementById('heading').textContent = 'Leadership';

const submitData = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/THNeemmj46ormQIqw0UT/scores',
    {
      method: 'POST',
      body: JSON.stringify({
        user: nameInput.value,
        score: scoreInput.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  const dataSent = await response.json();
  nameInput.value = '';
  scoreInput.value = '';
  return dataSent;
};

submit.addEventListener('click', submitData);

const refreshFunc = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/THNeemmj46ormQIqw0UT/scores');
  const leaderboardData = await response.json();
  return leaderboardData;
};

const getScore = () => {
  recentSores.innerHTML = '';
  const leaderboardData = refreshFunc();

  leaderboardData.then((value) => {
    if (value.result) {
      value.result.forEach((element) => {
        const displayData = `<tr>
        <td>${element.user}</td>
        <td>${element.score}</td>
        </tr>`;
        recentSores.innerHTML += displayData;
      });
    }
  });
};

const receiveData = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/THNeemmj46ormQIqw0UT/scores',
    {
      method: 'GET',
      header: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  const gameScore = await response.json();
  getScore(nameInput.value, scoreInput.value);
  console.log("Testing---")
  return gameScore;
};

refresh.addEventListener('click', receiveData);
