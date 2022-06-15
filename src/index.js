import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './main.css';

const allScores = [
  {"name":"Man-City","Score":"80"},
  {"name":"Manchester United","Score":"75"},
  {"name":"Liverpool","Score":"82"},
  {"name":"Arsenal","Score":"56"},
  {"name":"Barcelona","Score":"40"},
  {"name":"Everton","Score":"76"}
];

var recentSores = document.querySelector('#recent-scores');

  for (let i=0; i<allScores.length; i++) {
    var displayData = `<tr>
    <td>${allScores[i].name}</td>
    <td>${allScores[i].Score}</td>
    </tr>
    `
    recentSores.innerHTML +=displayData;
  }

document.getElementById("heading").innerHTML = "Leaderboard";
