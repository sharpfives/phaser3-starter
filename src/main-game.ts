'use strict';

import { SceneBase } from "./scene-base";
import * as Phaser from 'phaser';

export class MainGame extends Phaser.Game {
  constructor() {
		super({
      width : 64,
      height : 64,
      type: Phaser.WEBGL,
      parent : 'game-window',
      scene : SceneBase,
			backgroundColor : 0x550000,
			render :{
				pixelArt : true
			},
      physics: {
        default: 'matter',
        matter: {
          gravity: { y: 0.08 },
          debug: true
        }
      },
      plugins: {

      },
      callbacks: {
        postBoot: function (game) {
          // In v3.15, you have to override Phaser's default styles
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
  