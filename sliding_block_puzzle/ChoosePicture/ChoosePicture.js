/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ChoosePicture extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./ChoosePicture/costumes/costume1.svg", {
        x: 198.6461903250747,
        y: 149.68439192849402,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "choose picture" },
        this.whenIReceiveChoosePicture
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "picture chosen" },
        this.whenIReceivePictureChosen
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "show picture" },
        this.whenIReceiveShowPicture
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveChoosePicture() {
    this.visible = true;
  }

  *whenIReceivePictureChosen() {
    this.visible = false;
  }

  *whenIReceiveShowPicture() {
    this.effects.brightness = this.toNumber(
      this.itemOf(this.stage.vars.brightness, this.stage.vars.picture - 1)
    );
  }
}
