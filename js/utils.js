function getTimestamp() {
  let d = new Date();
  return d.getTime();
}

function randomDivId() {
  let d = Math.floor(Math.random() * 6) + 1;
  let n = Math.floor(Math.random() * 6) + 1;
  return `#slot-${d}${n}`;
}

// function normalTime() {
// 	let fir = getTimestamp();
// 	let sec = getTimestamp();
// 	let res = Date();
// 	return res.getTime(sec - fir);
// }
