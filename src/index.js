/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './main.css';

const refresh = document.querySelector('#refresh');
const submit = document.querySelector('#submit');
const nameInput = document.getElementById('name');
const scoreInput = document.getElementById('score');
const recentSores = document.querySelector('#recent-scores');

const GenerateID = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
    {
      method: 'POST',
      body: JSON.stringify({
        name: 'kibs',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  const id = await response.json();
  return id;
  //console.log(id) //THNeemmj46ormQIqw0UT
};
GenerateID();

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
  return dataSent;
};

submit.addEventListener('submit', submitData);

const getScore = (name, score) => {
  const displayData = `<tr>
  <td>${name}</td>
  <td>${score}</td>
  </tr>
  `;
  recentSores.innerHTML += displayData;
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
  return gameScore;
};

refresh.addEventListener('click', receiveData);
