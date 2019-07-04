'use strict';

import * as Phaser from 'phaser';

export class SceneBase extends Phaser.Scene {
	constructor() {
		super("");
	}

	preload() {
		this.load.image('cursor','resources/cursor.png');
	}

	create() {

		const cursor = this.add.image(0,0,'cursor');

		this.input.on('pointermove', function (pointer) {
			cursor.x = pointer.x; 
			cursor.y = pointer.y;
		}, this);

	}

	update() {
		
	}
}