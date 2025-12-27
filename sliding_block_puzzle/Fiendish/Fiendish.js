/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Fiendish extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Fiendish/costumes/costume1.svg", {
        x: 196.06427481861795,
        y: -73.06649330052494,
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
    this.stage.vars.difficulty = 30;
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
