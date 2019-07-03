## About

______ is an open source browser-based game made for LOWREZJAM 2019 (___) game jam hosted on itch.io. It was written using the PhaserJS 3 game engine.

To play the game right now on itch.io, go here ____

## Dependencies

This project uses NodeJS to run a minimal webserver for hosting the game. Download and install NodeJS (https://nodejs.org)

## Install

```bash
git clone https://github.com/sharpfives/home-game.git
cd home-game
npm i
```

## Level Editor

This game uses the Tiled editor version 1.1.6 to layout levels and scenes. Any changes in the JSON output format of Tiled will undoubtedly cause breaking changes with the way this game parses those files.

## Run

```bash
node home-game.js
```

This will host the game on a local webserver at port 8080. The run the game, in browser, navigate to:

```bash
http://localhost:8080
```

Currently only Firefox and Chrome browsers are supported.

Thanks for playing!
# phaser3-starter
