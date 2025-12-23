import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class January extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./January/costumes/costume1.svg", {
        x: 0,
        y: 0,
      }),
      new Costume("January", "./January/costumes/January.png", {
        x: 50,
        y: 50,
      }),
    ];

    this.sounds = [new Sound("pop", "./January/sounds/pop.wav")];

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
    this.visible = true;
    this.size = 150;
    this.goto(-180, 120);
  }

  *whenthisspriteclicked() {
    this.broadcast("Simon's 6th Birthday");
  }

  *whenIReceiveHideMonths() {
    this.visible = false;
  }
}
