/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _ extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./_/costumes/costume1.svg", {
        x: 224,
        y: 55.623891698297015,
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

  *whenIReceiveShowPicture() {
    yield* this.showOrHide();
  }

  *showOrHide() {
    if (this.compare(this.stage.vars.picture, 1) > 0) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  *whenthisspriteclicked() {
    this.stage.vars.picture--;
    yield* this.broadcastAndWait("show picture");
  }
}
