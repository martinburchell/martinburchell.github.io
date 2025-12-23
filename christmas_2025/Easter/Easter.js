import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Easter extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "20250407_171441 (Large)2",
        "./Easter/costumes/20250407_171441 (Large)2.svg",
        { x: 240, y: 180 }
      ),
      new Costume(
        "20250407_171441 (Large)",
        "./Easter/costumes/20250407_171441 (Large).svg",
        { x: 240, y: 180 }
      ),
      new Costume(
        "IMG_4113 (Large)",
        "./Easter/costumes/IMG_4113 (Large).svg",
        { x: 135.88588588588595, y: 180 }
      ),
      new Costume(
        "IMG_4122 (Large)",
        "./Easter/costumes/IMG_4122 (Large).jpg",
        { x: 480, y: 360 }
      ),
      new Costume(
        "IMG_4160 (Large)",
        "./Easter/costumes/IMG_4160 (Large).svg",
        { x: 241.6066, y: 180 }
      ),
    ];

    this.sounds = [new Sound("pop", "./Easter/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Easter" },
        this.whenIReceiveEaster
      ),
      new Trigger(Trigger.BROADCAST, { name: "setup" }, this.whenIReceiveSetup),
    ];
  }

  *whenIReceiveEaster() {
    this.effects.ghost = 100;
    this.costume = "20250407_171441 (Large)2";
    this.visible = true;
    for (let i = 0; i < 5; i++) {
      for (let i = 0; i < 8; i++) {
        this.effects.ghost -= 12.5;
        yield* this.wait(0.1);
        yield;
      }
      yield* this.wait(this.toNumber(this.stage.vars.delayBetweenPhotos));
      for (let i = 0; i < 8; i++) {
        this.effects.ghost += 12.5;
        yield* this.wait(0.1);
        yield;
      }
      this.costumeNumber++;
      yield* this.wait(1);
      yield;
    }
    this.broadcast("setup");
  }

  *whenIReceiveSetup() {
    this.goto(0, 0);
    this.visible = false;
  }
}
