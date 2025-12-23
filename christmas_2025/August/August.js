import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class August extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./August/costumes/costume1.svg", { x: 0, y: 0 }),
      new Costume("August", "./August/costumes/August.png", { x: 50, y: 50 }),
    ];

    this.sounds = [new Sound("pop", "./August/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "setup" }, this.whenIReceiveSetup),
      new Trigger(
        Trigger.BROADCAST,
        { name: "hide months" },
        this.whenIReceiveHideMonths
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
    ];
  }

  *whenIReceiveSetup() {
    this.size = 150;
    this.goto(-180 + 375, 50);
    this.visible = true;
  }

  *whenIReceiveHideMonths() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("Museum Summer Visits");
  }
}
