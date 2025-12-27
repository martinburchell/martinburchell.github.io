/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Easy extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Easy/costumes/costume1.svg", {
        x: 196,
        y: 68.47444499999999,
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
    this.stage.vars.difficulty = 4;
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
