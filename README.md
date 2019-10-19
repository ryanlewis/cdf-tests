Some quick tests around two Node modules that are useful for calculating quartiles and other statistics.

# Notes

This is a very simplistic test and is by no means exhaustive. 

# Modules tested

- [t-digest][1]
- [sample-distribution][2]

t-digest was picked as a popular package, including being the one to calculate histograms in prom-client.
sample-distribution claimed to do what I needed but a little quicker.

# Usage

```
time node tdigest.js
time node sample-distribution.js

```

# Results

```
➜  cdf-tests time node tdigest.js; echo ''; time node sample-distribution.js
approximating 10000000 samples using 376 centroids
min = 0
Q1  = 250.06903244869457
Q2  = 500.10838262555643
Q3  = 750.147405017356
max = 1000
median: 500.10838262555643
upper90: 900.1059029930601
node tdigest.js  5.05s user 0.40s system 103% cpu 5.262 total

observed: 10000000
average: 500.04778099997293
minimum: 0
median: 500.01386476409454
upper90: 911.2379785896167
maximum: 1000
node sample-distribution.js  0.95s user 0.32s system 104% cpu 1.221 total
➜  cdf-tests
```

sample-distribution is approximately 4.3x in these rough tests.

[1]: https://github.com/tdunning/t-digest
[2]: https://github.com/hville/sample-distribution


