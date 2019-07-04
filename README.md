# phaser3-starter
This is quick-start project that uses best-practices for developing a web-based game using the Phaser 3 engine, Typescript, Webpack, and node modules.

## Install dependencies
```bash
cd phaser3-starter
npm i
```

## Run / Debug
```bash
npm run dev
```
This will open a browser window and launch the game. To debug and set break points in the Typescript source, open up the developer tab in Chrome.

# Production
When you're ready to push your game to itch.io, run:
```bash
npm run prod
```
This will also open start your game but will minify and condense the game and all its dependencies. The dist/ folder can now but uploaded to itch.io. See ___ for instruction on how to use butler.
