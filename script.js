const pickBtn = document.querySelector('#pick');
const filter = document.querySelector('#filter').value;
const agents = ['Raze','Skye','Yoru','Astra','Breach','Omen','Jett','Raze','Sova','Killjoy','Phoenix','Brimstone','Sage','Viper','Cypher','Reyna','Skye','Yoru','Astra','Breach','Omen','Jett','KayO','Chamber','Neon','Fade','Harbor'];
const contoller = ['Astra','Brimstone','Viper','Omen','Harbor'];
const duelist = ['Jett','Neon','Raze','Phoenix','Reyna','Yoru'];
const sentinel = ['Sage','Cypher','Killjoy','Chamber'];
const initiator = ['Breach','Sova','KayO','Fade','Skye'];

pickBtn.addEventListener('click', getRandomAgent);

function filterAgents() {
  const filter = document.querySelector('#filter').value;

  return filter;
}

function getRandomAgent() {

  if (filterAgents() === 'Initiator') {
    const randomAgent = initiator[Math.floor(Math.random() * initiator.length)];
    document.querySelector('#agent-img').src = `./img/${randomAgent}.png`;
    document.querySelector('#agent-name').textContent = randomAgent;
  } else if (filterAgents() === 'Controller') {
    const randomAgent = contoller[Math.floor(Math.random() * contoller.length)];
    document.querySelector('#agent-img').src = `./img/${randomAgent}.png`;
    document.querySelector('#agent-name').textContent = randomAgent;
  } else if (filterAgents() === 'Duelist') {
    const randomAgent = duelist[Math.floor(Math.random() * duelist.length)];
    document.querySelector('#agent-img').src = `./img/${randomAgent}.png`;
    document.querySelector('#agent-name').textContent = randomAgent;
  } else if (filterAgents() === 'Sentinel') {
    const randomAgent = sentinel[Math.floor(Math.random() * sentinel.length)];
    document.querySelector('#agent-img').src = `./img/${randomAgent}.png`;
    document.querySelector('#agent-name').textContent = randomAgent;
  } else {
    const randomAgent = agents[Math.floor(Math.random() * agents.length)];
    document.querySelector('#agent-img').src = `./img/${randomAgent}.png`;
    document.querySelector('#agent-name').textContent = randomAgent;
  }
}
