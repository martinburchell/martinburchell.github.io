/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Tricky extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Tricky/costumes/costume1.svg", {
        x: 196.02685589942158,
        y: -1.5255572692750548,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "select difficulty" },
        this.whenIReceiveSelectDifficulty
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "difficulty selected" },
        this.whenIReceiveDifficultySelected
      ),
    ];
  }

  *whenthisspriteclicked() {
    this.stage.vars.difficulty = 10;
    this.broadcast("difficulty selected");
  }

  *whenIReceiveSelectDifficulty() {
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveDifficultySelected() {
    this.visible = false;
  }
}
