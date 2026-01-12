const Jobs = {
  SHOOTER: { p: 2, a: 0, w: 0 },
  ATHLETE: { p: 0, a: 2, w: 0 },
  SCHOLAR: { p: 0, a: 0, w: 2 }
};

const successSelect = document.getElementById('success');
['SUCCESS','FAILURE','CRITICAL'].forEach(v => {
  const o = document.createElement('option');
  o.value = v; o.textContent = v;
  successSelect.appendChild(o);
});

['job1','job2','job3'].forEach(id => {
  const sel = document.getElementById(id);
  Object.keys(Jobs).forEach(j => {
    const o = document.createElement('option');
    o.value = j; o.textContent = j;
    sel.appendChild(o);
  });
});

function toggleTheme() {
  document.body.classList.toggle('light');
}

function z(p, a, w, s, o, l) {
  return p * s + a * o + w * l;
}

function solveNoSoldier(input) {
  let best = -Infinity;
  let res = null;

  for (let p = 0; p <= input.max; p++)
    for (let a = 0; a <= input.max; a++)
      for (let w = 0; w <= input.max; w++) {
        const v = z(p, a, w, input.s, input.o, input.l);
        if (v > best) {
          best = v;
          res = { p, a, w };
        }
      }
  return res;
}

function calculate() {
  const input = {
    s: Number(shoot.value),
    o: Number(obst.value),
    l: Number(lib.value),
    max: Number(maxLevel.value || 5)
  };

  const leader = solveNoSoldier(input);
  document.getElementById('lP').value = leader.p;
  document.getElementById('lA').value = leader.a;
  document.getElementById('lW').value = leader.w;
}
