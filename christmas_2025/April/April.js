import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class April extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./April/costumes/costume1.svg", { x: 0, y: 0 }),
      new Costume("April", "./April/costumes/April.png", { x: 50, y: 50 }),
    ];

    this.sounds = [new Sound("pop", "./April/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "setup" }, this.whenIReceiveSetup),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "hide months" },
        this.whenIReceiveHideMonths
      ),
    ];
  }

  *whenIReceiveSetup() {
    this.size = 150;
    this.goto(-180 + 375, 120);
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("Easter");
  }

  *whenIReceiveHideMonths() {
    this.visible = false;
  }
}
