import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class February extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./February/costumes/costume1.svg", {
        x: 0,
        y: 0,
      }),
      new Costume("February", "./February/costumes/February.png", {
        x: 50,
        y: 50,
      }),
    ];

    this.sounds = [new Sound("pop", "./February/sounds/pop.wav")];

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
    this.goto(-180 + 125, 120);
    this.visible = true;
  }

  *whenIReceiveHideMonths() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("Aaron's 9th Birthday");
  }
}
