const fs = require('fs');

console.log("🔵 Start");

// Microtask: process.nextTick
process.nextTick(() => {
  console.log("🟣 Next Tick 1");

  process.nextTick(() => {
    console.log("🟣 Next Tick 2");
  });

  Promise.resolve().then(() => {
    console.log("🟢 Promise inside Next Tick");
  });
});

// Microtask: Promise
Promise.resolve().then(() => {
  console.log("🟢 Promise 1");

  return Promise.resolve().then(() => {
    console.log("🟢 Promise 2");
  });
});

// Timer: setTimeout
setTimeout(() => {
  console.log("🟠 Timeout 1 (0ms)");

  process.nextTick(() => {
    console.log("🟣 Next Tick inside Timeout");
  });

  Promise.resolve().then(() => {
    console.log("🟢 Promise inside Timeout");
  });
}, 0);

// Timer: setTimeout with delay
setTimeout(() => {
  console.log("🟠 Timeout 2 (50ms)");
}, 50);

// Check phase: setImmediate
setImmediate(() => {
  console.log("🔴 setImmediate");

  process.nextTick(() => {
    console.log("🟣 Next Tick inside setImmediate");
  });
});

// Simulated I/O: fs.readFile
fs.readFile(__filename, () => {
  console.log("📘 fs.readFile callback");

  setImmediate(() => {
    console.log("🔴 setImmediate inside fs.readFile");
  });

  process.nextTick(() => {
    console.log("🟣 Next Tick inside fs.readFile");
  });
});

console.log("🔵 End");