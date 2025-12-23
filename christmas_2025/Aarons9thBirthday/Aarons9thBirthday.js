import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Aarons9thBirthday extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "IMG_3853 (Large)",
        "./Aarons9thBirthday/costumes/IMG_3853 (Large).svg",
        { x: 135, y: 180 }
      ),
      new Costume(
        "IMG_3873 (Large)",
        "./Aarons9thBirthday/costumes/IMG_3873 (Large).svg",
        { x: 256.0060060060059, y: 180 }
      ),
      new Costume(
        "IMG_3839 (Large)",
        "./Aarons9thBirthday/costumes/IMG_3839 (Large).jpg",
        { x: 480, y: 360 }
      ),
      new Costume(
        "IMG_3849 (Large)",
        "./Aarons9thBirthday/costumes/IMG_3849 (Large).png",
        { x: 270, y: 360 }
      ),
      new Costume(
        "IMG_3864 (Large)",
        "./Aarons9thBirthday/costumes/IMG_3864 (Large).png",
        { x: 360, y: 360 }
      ),
      new Costume(
        "IMG_3887 (Large)",
        "./Aarons9thBirthday/costumes/IMG_3887 (Large).svg",
        { x: 263.5135135135135, y: 180 }
      ),
      new Costume(
        "IMG_3891 (Large)",
        "./Aarons9thBirthday/costumes/IMG_3891 (Large).svg",
        { x: 258.513515, y: 180 }
      ),
      new Costume(
        "IMG_3900 (Large)",
        "./Aarons9thBirthday/costumes/IMG_3900 (Large).svg",
        { x: 266.5165165165165, y: 180 }
      ),
    ];

    this.sounds = [new Sound("pop", "./Aarons9thBirthday/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Aaron's 9th Birthday" },
        this.whenIReceiveAarons9thBirthday
      ),
      new Trigger(Trigger.BROADCAST, { name: "setup" }, this.whenIReceiveSetup),
    ];
  }

  *whenIReceiveAarons9thBirthday() {
    this.effects.ghost = 100;
    this.costume = "IMG_3853 (Large)";
    this.visible = true;
    for (let i = 0; i < 8; i++) {
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
