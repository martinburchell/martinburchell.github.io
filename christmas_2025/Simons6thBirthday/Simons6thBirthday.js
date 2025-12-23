import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Simons6thBirthday extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "IMG_3679 (Large)",
        "./Simons6thBirthday/costumes/IMG_3679 (Large).svg",
        { x: 135.00000102102098, y: 179.9999955308043 }
      ),
      new Costume(
        "WhatsApp Image 2025-01-24 at 21",
        "./Simons6thBirthday/costumes/WhatsApp Image 2025-01-24 at 21.svg",
        { x: 350.60060150150156, y: 180 }
      ),
      new Costume(
        "WhatsApp Image 2025-01-24 at 2",
        "./Simons6thBirthday/costumes/WhatsApp Image 2025-01-24 at 2.jpg",
        { x: 480, y: 360 }
      ),
      new Costume(
        "IMG_3680 (Large)",
        "./Simons6thBirthday/costumes/IMG_3680 (Large).svg",
        { x: 332.5825819819819, y: 180 }
      ),
      new Costume(
        "IMG_3684 (Large)",
        "./Simons6thBirthday/costumes/IMG_3684 (Large).png",
        { x: 267, y: 360 }
      ),
      new Costume(
        "IMG_3691 (Large)",
        "./Simons6thBirthday/costumes/IMG_3691 (Large).jpg",
        { x: 480, y: 360 }
      ),
      new Costume(
        "IMG_3699 (Large)",
        "./Simons6thBirthday/costumes/IMG_3699 (Large).png",
        { x: 258, y: 360 }
      ),
    ];

    this.sounds = [new Sound("pop", "./Simons6thBirthday/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Simon's 6th Birthday" },
        this.whenIReceiveSimons6thBirthday
      ),
      new Trigger(Trigger.BROADCAST, { name: "setup" }, this.whenIReceiveSetup),
    ];
  }

  *whenIReceiveSimons6thBirthday() {
    this.effects.ghost = 100;
    this.costume = "IMG_3679 (Large)";
    this.visible = true;
    for (let i = 0; i < 7; i++) {
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
