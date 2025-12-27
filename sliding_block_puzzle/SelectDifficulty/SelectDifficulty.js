/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SelectDifficulty extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./SelectDifficulty/costumes/costume1.svg", {
        x: 115.64619032507471,
        y: 149.68444192849404,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "select difficulty" },
        this.whenIReceiveSelectDifficulty
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "difficulty selected" },
        this.whenIReceiveDifficultySelected
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveSelectDifficulty() {
    this.effects.brightness = this.toNumber(
      this.itemOf(this.stage.vars.brightness, this.stage.vars.picture - 1)
    );
    this.visible = true;
  }

  *whenIReceiveDifficultySelected() {
    this.visible = false;
  }
}
