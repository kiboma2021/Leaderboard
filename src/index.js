/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './main.css';



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

const sendData = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/5kwd9qE46jjunPWk6sVg/scores',
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

submit.addEventListener('submit', sendData);






/*
const get_url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ai5Nvjw0VJjtGbkLNuyF/scores/'

async function getResult() {
  const response = await fetch(get_url);
  const data = await response.json();

  console.log(data);
  const recentSores = document.querySelector('#recent-scores');
  const heading = document.getElementById('heading');
  heading.textContent += 1;

  for (let i = 0; i < 10; i++) {
    const displayData = `<tr>
      <td>${data[i]['user']}</td>
      <td>${data[i]['score']}</td>
      </tr>
      `;
    recentSores.innerHTML += displayData;
  }
}
getResult();

*/