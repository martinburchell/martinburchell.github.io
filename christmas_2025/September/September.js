import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class September extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./September/costumes/costume1.svg", {
        x: 0,
        y: 0,
      }),
      new Costume("September", "./September/costumes/September.png", {
        x: 50,
        y: 50,
      }),
    ];

    this.sounds = [new Sound("pop", "./September/sounds/pop.wav")];

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
    this.goto(-180, -20);
    this.visible = true;
  }

  *whenIReceiveHideMonths() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("Haven Holiday with Home Ed Friends");
  }
}
