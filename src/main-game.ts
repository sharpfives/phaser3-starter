'use strict';

import { TestScene } from "./test-scene";
import * as Phaser from 'phaser';

export class MainGame extends Phaser.Game {
  constructor() {
		super({
      width : 64, // for #lowrezjam
      height : 64, // for #lowrezjam
      type: Phaser.WEBGL,
      parent : 'game-window',
      scene : TestScene,
			backgroundColor : 0x550000,
			render :{
				pixelArt : true
			},
      callbacks: {
        postBoot: function (game) {
          game.canvas.style.width = '100%';
          game.canvas.style.height = '100%';
        }
      }
    });
  }
}

window.addEventListener("load", () => {
  var game = new MainGame();
});
  