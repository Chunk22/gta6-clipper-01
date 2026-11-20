# IShowSpeed Thinks He's IN GTA 6 — make.fun gta6-clipper-01 entry

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A vertical YouTube Short cut from IShowSpeed's livestream reaction to the
GTA 6 Trailer 2, entered in make.fun's **gta6-clipper-01** bounty
("$500 USDC shared by the top 20 clips by YouTube views").

## The moment

From the video **"iShowSpeed Reacts to GTA 6 Trailer 2"** (a re-upload of
Speed's livestream reaction, channel SpeedUniverse, 2025-05-07), one moment,
about 02:36–03:14 of the stream:

1. Chat tells Speed to stop the trailer at 1:30. He keeps watching and says,
   *"Bro, y'all said stop at 1:30. Bro, I'm in the game."* — he genuinely
   thinks Rockstar put him in GTA 6.
2. A few seconds later he points at a trailer character: *"Yo, D, this full
   effect. Travis Scott for real... Oh, that ain't Travis Scott. Look at you.
   That do not look like me, bro. The same nose."*

Why this moment: the hook lands in the first three seconds ("I'm in the
game"), and the "same nose" punchline gives viewers a reason to watch to the
end. Speed's oversized reactions plus the most-hyped game of the year is the
combination Shorts viewers stop scrolling for. The clip keeps Speed's
original audio throughout — no voiceover, no fake footage.

## How the clip was made

Cut and rendered with ffmpeg from the downloaded stream recording:

- Two segments of the same moment, jump-cut together to drop the filler in
  between: **02:36.5–02:47.0** and **02:56.0–03:14.2** (~28.7 s).
- Cropped to the left side of the frame (`crop=348:618:0:70`, which drops the
  stream's title bar and player bar) and scaled to vertical **1080x1920**
  (9:16), so Speed's face stays in frame the whole time.
- On-screen hook for the first 3 seconds: **"HE THINKS HE IS IN GTA 6"**.
- Final ~6 seconds: the last frame freezes and the make.fun pitch appears as
  on-screen text — *"Make clips like this with AI and earn money on
  make.fun"* plus *make.fun/bounty/gta6-clipper-01*. Font: DejaVu Sans Bold.
- Total length: **34.7 seconds**, original audio kept.

The finished clip is `clip-final.mp4` (handed to the uploader; not stored in
this repo).

## Running the entry program

`main.ts` (Node 22, standard library only, no network, no clock, no files
outside the repo) copies `VIDEO.json` from the repository root into the
output directory, where the grader reads it:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It prints nothing on success. `VIDEO.json` currently holds a placeholder
address and is filled in with the uploaded Short's URL after upload.

## Bounty links

- Bounty: https://make.fun/bounty/gta6-clipper-01
- Play code: `makefun-sled-alder-barn`
- Referral code: `BLBW-XVNN`
