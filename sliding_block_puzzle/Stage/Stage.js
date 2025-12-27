/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("empty", "./Stage/costumes/empty.svg", { x: 240, y: 180 }),
    ];

    this.sounds = [];

    this.triggers = [];

    this.vars.spaceIndex = 1;
    this.vars.solved = 0;
    this.vars.picture = 1;
    this.vars.numberOfPictures = 5;
    this.vars.difficulty = 30;
    this.vars.debug = [];
    this.vars.tileData = [0, 5, 6, 4, 1, 11, 9, 12, 8, 3, 2, 7];
    this.vars.brightness = [100, 100, 100, 100, -100];
  }
}
