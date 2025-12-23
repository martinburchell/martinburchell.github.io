import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PirateDay extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "IMG_4435 (Large)",
        "./PirateDay/costumes/IMG_4435 (Large).svg",
        { x: 240, y: 180 }
      ),
      new Costume(
        "WhatsApp Image 2025-08-16 at 10",
        "./PirateDay/costumes/WhatsApp Image 2025-08-16 at 10.svg",
        { x: 136.5, y: 180 }
      ),
      new Costume(
        "IMG_4361 (Large)",
        "./PirateDay/costumes/IMG_4361 (Large).jpg",
        { x: 480, y: 360 }
      ),
      new Costume(
        "IMG_4363 (Large)",
        "./PirateDay/costumes/IMG_4363 (Large).jpg",
        { x: 480, y: 360 }
      ),
      new Costume(
        "IMG_4343 (Large)",
        "./PirateDay/costumes/IMG_4343 (Large).jpg",
        { x: 480, y: 360 }
      ),
      new Costume(
        "IMG_4442 (Large)",
        "./PirateDay/costumes/IMG_4442 (Large).jpg",
        { x: 480, y: 360 }
      ),
      new Costume(
        "IMG_4351 (Large)",
        "./PirateDay/costumes/IMG_4351 (Large).svg",
        { x: 266.691615, y: 180 }
      ),
      new Costume(
        "WhatsApp Image 2025-05-24 at 20",
        "./PirateDay/costumes/WhatsApp Image 2025-05-24 at 20.jpg",
        { x: 480, y: 360 }
      ),
      new Costume(
        "IMG_4405 (Large)",
        "./PirateDay/costumes/IMG_4405 (Large).jpg",
        { x: 270, y: 360 }
      ),
    ];

    this.sounds = [new Sound("pop", "./PirateDay/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Pirate Day" },
        this.whenIReceivePirateDay
      ),
      new Trigger(Trigger.BROADCAST, { name: "setup" }, this.whenIReceiveSetup),
    ];
  }

  *whenIReceivePirateDay() {
    this.effects.ghost = 100;
    this.costume = "IMG_4435 (Large)";
    this.visible = true;
    for (let i = 0; i < 9; i++) {
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
