import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 235.65519422761918,
        y: -71.26770043336936,
      }),
      new Costume("backdrop2", "./Stage/costumes/backdrop2.svg", {
        x: 0,
        y: 0,
      }),
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "hide months" },
        this.whenIReceiveHideMonths
      ),
      new Trigger(Trigger.BROADCAST, { name: "setup" }, this.whenIReceiveSetup),
    ];

    this.vars.delayBetweenPhotos = 3;
  }

  *whenIReceiveHideMonths() {
    this.costume = "backdrop2";
  }

  *whenIReceiveSetup() {
    this.costume = "backdrop1";
  }
}
