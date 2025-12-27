/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./_2/costumes/costume1.svg", {
        x: -165,
        y: 54.62386749999999,
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
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveChoosePicture() {
    yield* this.showOrHide();
  }

  *whenIReceivePictureChosen() {
    this.visible = false;
  }

  *showOrHide() {
    if (
      this.compare(this.stage.vars.picture, this.stage.vars.numberOfPictures) <
      0
    ) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  *whenIReceiveShowPicture() {
    yield* this.showOrHide();
  }

  *whenthisspriteclicked() {
    this.stage.vars.picture++;
    yield* this.broadcastAndWait("show picture");
  }
}
