
// Refactor all necessary doc grabs to initialize function?
const todayContainer = document.querySelector('.today');

async function drawAll(json) {
  todayContainer.innerHTML = json['days'][0]['temp'];
}

export { drawAll };