
// redShirtSpeeds = [5, 5, 3, 9, 2]
// blueShirtSpeeds = [3, 6, 7, 2, 1]

// fastest = false
// 2, 3, 5, 5, 9
// 1, 2, 3, 6, 7

// fastest = true
// 2, 3, 5, 5, 9
// 7, 6, 3, 2, 1


const sortAsc = (a, b) => {
  return a - b
}

const sortDesc = (a, b) => {
  return b - a
}

const getTotalSpeed = (redShirtSpeeds, blueShirtSpeeds, fastest) => {
  if (redShirtSpeeds.length !== blueShirtSpeeds.length) throw new TypeError('array must have same size');
  redShirtSpeeds = redShirtSpeeds.sort(sortAsc);
  blueShirtSpeeds = blueShirtSpeeds.sort(sortAsc);
  if (fastest) blueShirtSpeeds = blueShirtSpeeds.sort(sortDesc);
  let totalSum = 0;
  for (const idx in redShirtSpeeds) {
    if (redShirtSpeeds[idx] < 0 || blueShirtSpeeds[idx] < 0) throw new TypeError('speeds must be positive');
    totalSum += Math.max(redShirtSpeeds[idx], blueShirtSpeeds[idx])
  }
  return totalSum;
}


const red = [5, 5, 3, 9, 2];
const blue = [3, 6, 7, 2, 1];

const fast = getTotalSpeed(red, blue, true);
const slow = getTotalSpeed(red, blue, false);

console.log({fast, slow})

module.exports = {
  sortAsc,
  sortDesc,
  getTotalSpeed,
}