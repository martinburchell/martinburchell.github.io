import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class IsaacNewtonsHouseAndFlagFen extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "costume1",
        "./IsaacNewtonsHouseAndFlagFen/costumes/costume1.svg",
        { x: 241.6066016066071, y: 180 }
      ),
      new Costume(
        "IMG_3916 - Copy (Large)",
        "./IsaacNewtonsHouseAndFlagFen/costumes/IMG_3916 - Copy (Large).svg",
        { x: 240, y: 180 }
      ),
      new Costume(
        "IMG_3934 (Large)",
        "./IsaacNewtonsHouseAndFlagFen/costumes/IMG_3934 (Large).svg",
        { x: 333.20818397897904, y: 180 }
      ),
      new Costume(
        "IMG_3930 (Large)",
        "./IsaacNewtonsHouseAndFlagFen/costumes/IMG_3930 (Large).svg",
        { x: 274.0240240240241, y: 180 }
      ),
      new Costume(
        "IMG_3938 (Large)",
        "./IsaacNewtonsHouseAndFlagFen/costumes/IMG_3938 (Large).png",
        { x: 270, y: 360 }
      ),
      new Costume(
        "IMG_3944 (Large)",
        "./IsaacNewtonsHouseAndFlagFen/costumes/IMG_3944 (Large).jpg",
        { x: 270, y: 360 }
      ),
      new Costume(
        "IMG_3921 (Large)",
        "./IsaacNewtonsHouseAndFlagFen/costumes/IMG_3921 (Large).svg",
        { x: 272.52252252252265, y: 180 }
      ),
      new Costume(
        "IMG_4026 (Large)",
        "./IsaacNewtonsHouseAndFlagFen/costumes/IMG_4026 (Large).svg",
        { x: 253.00300300300293, y: 180 }
      ),
      new Costume(
        "IMG_3956 (Large)",
        "./IsaacNewtonsHouseAndFlagFen/costumes/IMG_3956 (Large).jpg",
        { x: 270, y: 360 }
      ),
      new Costume(
        "IMG_4219 (Large)",
        "./IsaacNewtonsHouseAndFlagFen/costumes/IMG_4219 (Large).svg",
        { x: 301.0510510510513, y: 180 }
      ),
    ];

    this.sounds = [
      new Sound("pop", "./IsaacNewtonsHouseAndFlagFen/sounds/pop.wav"),
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Newton's House and Flag Fen" },
        this.whenIReceiveNewtonsHouseAndFlagFen
      ),
      new Trigger(Trigger.BROADCAST, { name: "setup" }, this.whenIReceiveSetup),
    ];
  }

  *whenIReceiveNewtonsHouseAndFlagFen() {
    this.effects.ghost = 100;
    this.costume = "costume1";
    this.visible = true;
    for (let i = 0; i < 10; i++) {
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
