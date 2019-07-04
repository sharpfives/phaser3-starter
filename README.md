# phaser3-starter
This is a starter project that uses best-practices for developing a web-based game using the Phaser 3 engine (via node module), Typescript, and Webpack. The project is configured specifically for #LOWREZJAM with crisp pixel art and a gorgeous resolution of 64 x 64 pixels. Check it out in action [here](https://sharpfives.itch.io/phaser3-starter).

## Project Structure
All code goes in <code>src/</code>, all resources (images, music, etc.) go in <code>resources/</code>.

The game entry point is in <code>src/main-game.ts</code>. This will start an example scene <code>src/test-scene.ts</code>, which moves a cursor sprite with your mouse.

## Install Dependencies
This project uses Webpack and NodeJS to run a minimal webserver for hosting the game. First download and install NodeJS (https://nodejs.org). Then,

```bash
cd phaser3-starter
npm i
```

## Run / Debug
```bash
npm run dev
```
This will open a browser window and launch the game. You can now edit any of your files in <code>src/</code> or <code>resources/</code> and the game will automatically get rebuilt and the browser page will refresh. Pretty cool! You can debug and set break points in the Typescript source using the Developer Tab window in Chrome.

## Production
When you're ready to publish your game, run:
```bash
npm run prod
```
This will condense the game (code and resources) and all its dependencies into a <code>dist</code> folder in the project root. The <code>dist/</code> folder can now but uploaded to [itch.io](https://itch.io/) for everyone to enjoy. See [here](https://itch.io/docs/butler/pushing.html) for instructions on how to use butler for pushing builds (or you can always use the web interface).
