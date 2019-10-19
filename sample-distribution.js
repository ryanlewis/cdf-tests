const Recorder = require('sample-distribution');

const recorder = new Recorder(10);

for (let i = 0; i < 10000000; i++) {
    recorder.push(Math.round(Math.random() * 1000));
}

console.log('observed:', recorder.N);
console.log('average:', recorder.E);
console.log('minimum:', recorder.Q(0)) // minimum:0
console.log('median:', recorder.Q(0.5)) // median:4
console.log('upper90:', recorder.Q(0.9));
console.log('maximum:', recorder.Q(1)) // maximum:8
