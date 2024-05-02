function calculateNumber(type, a, b) {
  // SUM, SUBTRACT, or DIVIDE
  let res = 'Error';

  if (type === 'SUM') res = Math.round(a) + Math.round(b);
  else if (type === 'SUBTRACT') res = Math.round(a) - Math.round(b);
  else if (type === 'DIVIDE' && Math.round(b) !== 0) res = Math.round(a) / Math.round(b);

  return res;
}

module.exports = calculateNumber;
