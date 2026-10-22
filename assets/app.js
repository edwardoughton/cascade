'use strict';
const themes = [
 ['SEE THE SYSTEM', 'Local to Global Infrastructure Detection', 'Detecting power, telecoms and transport assets, their capacity and the demand they serve. A connected picture begins with knowing what is there.', 'SCALE / LOCAL → GLOBAL'],
 ['EXPLORE THE DYNAMICS', 'Spatiotemporal Simulation', 'Using spatiotemporal simulation to model demand processes and the operation of critical infrastructure systems across space and time.', 'DYNAMICS / SPACE × TIME'],
 ['TRACE THE CONNECTIONS', 'Interdependencies and Cascading Failure', 'Modelling how failures spread between sectors and across borders, including cyber threats. Explore dependencies to assess risk and resilience across the whole system.', 'DEPENDENCIES / RISK → RESILIENCE'],
 ['LOOK BEYOND THE GROUND', 'Space as Critical Infrastructure', 'Understanding satellites and positioning, navigation and timing (PNT) as systems that other infrastructure depends on. Connect space assets to their dependencies on Earth.', 'DEPENDENCIES / ORBIT → EARTH'],
 ['TURN EVIDENCE INTO ACTION', 'Decision Support', 'Turning simulation evidence into actionable, operational decision pathways. Deliver insights through twinning, apps and software to support government and industry partners.', 'OUTPUT / EVIDENCE → ACTION']
];
const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTheme(index, focus = false) {
 tabs.forEach((tab, i) => { tab.setAttribute('aria-selected', String(i === index)); tab.tabIndex = i === index ? 0 : -1; });
 const theme = themes[index];
 document.getElementById('theme-kicker').textContent = theme[0];
 document.getElementById('theme-title').textContent = theme[1];
 document.getElementById('theme-description').textContent = theme[2];
 document.querySelector('.visual-caption').textContent = theme[3];
 document.querySelector('.visual-number').textContent = String(index + 1).padStart(2, '0');
 document.querySelector('.map-grid').style.transform = `perspective(320px) rotateX(${43 + index * 4}deg) rotateZ(${-24 + index * 18}deg)`;
 document.getElementById('theme-panel').setAttribute('aria-labelledby', `tab-${index}`);
 if (focus) tabs[index].focus();
}
tabs.forEach((tab, index) => {
 tab.addEventListener('click', () => selectTheme(index));
 tab.addEventListener('keydown', event => {
  let next;
  if (event.key === 'ArrowDown') next = (index + 1) % tabs.length;
  if (event.key === 'ArrowUp') next = (index + tabs.length - 1) % tabs.length;
  if (event.key === 'Home') next = 0;
  if (event.key === 'End') next = tabs.length - 1;
  if (next !== undefined) { event.preventDefault(); selectTheme(next, true); }
 });
});
const svgNS = 'http://www.w3.org/2000/svg';
const colors = ['#e9bd75', '#bad9f1', '#b5dab3', '#c5b8e8'];
const points = [];
for (let ring = 0; ring < 3; ring++) {
 for (let i = 0; i < 16; i++) {
  const angle = (i / 16) * Math.PI * 2 + ring * .19;
  const radius = 115 + ring * 57;
  points.push({x:320 + Math.cos(angle)*radius, y:285 + Math.sin(angle)*radius*.88, group:Math.floor(i/4)});
 }
}
function svgElement(name, attrs) { const el = document.createElementNS(svgNS, name); Object.entries(attrs).forEach(([key,value]) => el.setAttribute(key,String(value))); return el; }
points.forEach((p, i) => {
 [ (i + 1) % points.length, (i + 16) % points.length ].forEach(j => {
  const q = points[j];
  document.getElementById('network-lines').append(svgElement('line', {x1:p.x,y1:p.y,x2:q.x,y2:q.y,stroke:colors[p.group], 'stroke-width':.8, 'stroke-opacity':.24}));
 });
 if (i < 16 && i % 2 === 0) document.getElementById('network-lines').append(svgElement('line', {x1:p.x,y1:p.y,x2:320,y2:285,stroke:colors[p.group],'stroke-opacity':.35,'stroke-dasharray':'3 5'}));
 document.getElementById('network-nodes').append(svgElement('circle', {cx:p.x,cy:p.y,r:i%5===0?4:2.5,fill:colors[p.group],opacity:i%3===0?1:.6}));
});
document.getElementById('year').textContent = new Date().getFullYear();
