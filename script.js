const pickBtn = document.querySelector('#pick');
const filter = document.querySelector('#filter').value;
const agents = ['Raze','Skye','Yoru','Astra','Breach','Omen','Jett','Raze','Sova','Killjoy','Phoenix','Brimstone','Sage','Viper','Cypher','Reyna','Skye','Yoru','Astra','Breach','Omen','Jett','KayO','Chamber','Neon','Fade','Harbor','Deadlock','Gekko'];
const contoller = ['Astra','Brimstone','Viper','Omen','Harbor'];
const duelist = ['Jett','Neon','Raze','Phoenix','Reyna','Yoru'];
const sentinel = ['Sage','Cypher','Killjoy','Chamber','Deadlock'];
const initiator = ['Breach','Sova','KayO','Fade','Skye','Gekko'];
const agentRole = {
  'Brimstone': 'Controller',
  'Phoenix': 'Duelist',
  'Sage': 'Sentinel',
  'Sova': 'Initiator',
  'Viper': 'Controller',
  'Cypher': 'Sentinel',
  'Reyna': 'Duelist',
  'Killjoy': 'Sentinel',
  'Breach': 'Initiator',
  'Omen': 'Controller',
  'Jett': 'Duelist',
  'Raze': 'Duelist',
  'Skye': 'Initiator',
  'Yoru': 'Duelist',
  'Astra': 'Controller',
  'KayO': 'Initiator',
  'Chamber': 'Duelist',
  'Neon': 'Duelist',
  'Fade': 'Initiator',
  'Harbor': 'Controller',
  'Deadlock': 'Sentinel',
  'Gekko': 'Sentinel'
}
const agentBio = {
  'Brimstone': "Joining from the U.S.A., Brimstone's orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and safely make him the unmatched boots-on-the-ground commander.",
  'Phoenix': "Hailing from the U.K., Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he's got backup or not, he'll rush into a fight on his own terms.",
  'Sage': "The stronghold of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off forceful assaults, she provides a calm center to a hellish battlefield.",
  'Sova': "Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide.",
  'Viper': "The American chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and cripple the enemy's vision. If the toxins don't kill her prey, her mind games surely will.",
  'Cypher': "The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy's every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.",
  'Reyna': "The Mexican vampire, Reyna, is a feast-or-famine Agent who needs to make kills to power up her abilities. If she's coordinated with her team, she can strike fear into enemies and snowball to victory.",
  'Killjoy': "The genius of Germany, Killjoy secures the battlefield with ease using her arsenal of inventions. If the damage from her gear doesn't stop her enemies, her robots debuff will help make short work of them.",
  'Breach': "The bionic Swede, Breach, fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair.",
  'Omen': "The mysterious Agent, Omen, can teleport and flash his way around the battlefield, making him difficult to pin down. Combined with his ability to cancel out enemy abilities, he is a disruptive force on the battlefield.",
  'Jett': "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies up before they even know what hit them.",
  'Raze': "The explosive damage from Raze's arsenal is complemented by her satchel charges and paint shells. If the damage from her gear doesn't stop her enemies, her robots debuff will help make short work of them.",
  'Skye': "Hailing from Australia, Skye and her band of beasts trail-blaze the way through hostile territory. With her creations hampering the enemy, and her power to heal others, the team is strongest and safest by Skye’s side.",
  'Yoru': "Japanese native, Yoru, rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets the drop on each target before they know where to look.",
  'Astra': "Ghanaian Agent Astra harnesses the energies of the cosmos to reshape battlefields to her whim. With full command of her astral form and a talent for deep strategic foresight, she's always eons ahead of her enemy's next move.",
  'KayO': "KAY/O is a machine of war built for a single purpose: neutralizing radiants. His power to Suppress enemy abilities dismantles his opponents' capacity to fight back, securing him and his allies the ultimate edge.",
  'Chamber': "Well-dressed and well-armed, French weapons designer Chamber expels aggressors with deadly precision. He leverages his custom arsenal to hold the line and pick off enemies from afar, with a contingency built for every plan.",
  'Neon': "Filipino Agent Neon surges forward at shocking speeds, discharging bursts of bioelectric radiance as fast as her body generates it. She races ahead to catch enemies off guard, then strikes them down quicker than lightning.",
  'Fade': "Turkish bounty hunter, Fade, unleashes the power of raw nightmares to seize enemy secrets. Attuned with terror itself, she hunts targets and reveals their deepest fears—before crushing them in the dark.",
  'Harbor': "Hailing from India’s coast, Harbor storms the field wielding ancient technology with dominion over water. He unleashes frothing rapids and crushing waves to shield his allies, or pummel those that oppose him.",
  'Deadlock': "Norwegian operative Deadlock deploys an array of cutting-edge nanowire to secure the battlefield from even the most lethal assault. No one escapes her vigilant watch, nor survives her unyielding ferocity.",
  'Gekko': "Gekko the Angeleno leads a tight-knit crew of calamitous creatures. His buddies bound forward, scattering enemies out of the way, with Gekko chasing them down to regroup and go again."
}

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
    document.querySelector('#agent-role').textContent = agentRole[randomAgent];
    document.querySelector('#agent-bio').textContent = agentBio[randomAgent];
  } else if (filterAgents() === 'Controller') {
    const randomAgent = contoller[Math.floor(Math.random() * contoller.length)];
    document.querySelector('#agent-img').src = `./img/${randomAgent}.png`;
    document.querySelector('#agent-name').textContent = randomAgent;
    document.querySelector('#agent-role').textContent = agentRole[randomAgent];
    document.querySelector('#agent-bio').textContent = agentBio[randomAgent];
  } else if (filterAgents() === 'Duelist') {
    const randomAgent = duelist[Math.floor(Math.random() * duelist.length)];
    document.querySelector('#agent-img').src = `./img/${randomAgent}.png`;
    document.querySelector('#agent-name').textContent = randomAgent;
    document.querySelector('#agent-role').textContent = agentRole[randomAgent];
    document.querySelector('#agent-bio').textContent = agentBio[randomAgent];
  } else if (filterAgents() === 'Sentinel') {
    const randomAgent = sentinel[Math.floor(Math.random() * sentinel.length)];
    document.querySelector('#agent-img').src = `./img/${randomAgent}.png`;
    document.querySelector('#agent-name').textContent = randomAgent;
    document.querySelector('#agent-role').textContent = agentRole[randomAgent];
    document.querySelector('#agent-bio').textContent = agentBio[randomAgent];
  } else {
    const randomAgent = agents[Math.floor(Math.random() * agents.length)];
    document.querySelector('#agent-img').src = `./img/${randomAgent}.png`;
    document.querySelector('#agent-name').textContent = randomAgent;
    document.querySelector('#agent-role').textContent = agentRole[randomAgent];
    document.querySelector('#agent-bio').textContent = agentBio[randomAgent];
  }
}
