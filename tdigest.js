const TDigest = require('tdigest').TDigest;
const td = new TDigest();

for (let i = 0; i < 10000000; i++) {
    td.push(Math.round(Math.random() * 1000));


    if (i % 10000 === 0) {
        td.compress();
    }

}

console.log(td.summary());
console.log('median:', td.percentile(0.5));
console.log('upper90:', td.percentile(0.9));
