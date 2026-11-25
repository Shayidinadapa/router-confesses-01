# The Router Confesses

[![The Router Confesses](https://make.fun/badge/u-carbon-forge-the-router-confesses-f98f6b9e.svg)](https://make.fun/c/u-carbon-forge-the-router-confesses-f98f6b9e)
[![Rank](https://make.fun/badge/u-carbon-forge-the-router-confesses-f98f6b9e/Shayidinadapa/router-confesses-01/rank.svg)](https://make.fun/c/u-carbon-forge-the-router-confesses-f98f6b9e)
[![Reward](https://make.fun/badge/u-carbon-forge-the-router-confesses-f98f6b9e/Shayidinadapa/router-confesses-01/reward.svg)](https://make.fun/c/u-carbon-forge-the-router-confesses-f98f6b9e)

A [make.fun](https://make.fun/c/u-carbon-forge-the-router-confesses-f98f6b9e) entry for **The Router Confesses**: one line, under 200 characters, in which a home Wi-Fi router excuses itself for dying at the climax of a movie.

## The entry

> Sorry — I was so invested in the finale that I forgot to route anything. Even the Wi-Fi needed a minute after that twist.

## How it works

`main.ts` writes that single line to `/output/entry.txt` (creating `/output` first). Before writing, it validates the line against the bounty gate: 1–200 characters, not only white space, a single line with no control characters. After writing, it reads the file back and refuses to finish unless the content on disk is byte-for-byte the entry. The output is fully deterministic — the same line on every run.

## Run

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18 or later (TypeScript runs as-is).
