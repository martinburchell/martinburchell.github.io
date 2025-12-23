import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class LondonHoliday extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "IMG_4550 - Copy (Large)2",
        "./LondonHoliday/costumes/IMG_4550 - Copy (Large)2.svg",
        { x: 241.6066016066071, y: 180 }
      ),
      new Costume(
        "IMG_4502 - Copy (Large)",
        "./LondonHoliday/costumes/IMG_4502 - Copy (Large).svg",
        { x: 135.88588588588587, y: 180 }
      ),
      new Costume(
        "IMG_4504 - Copy (Large)",
        "./LondonHoliday/costumes/IMG_4504 - Copy (Large).jpg",
        { x: 270, y: 360 }
      ),
      new Costume(
        "IMG_4506 - Copy (Large)",
        "./LondonHoliday/costumes/IMG_4506 - Copy (Large).jpg",
        { x: 270, y: 360 }
      ),
      new Costume(
        "IMG_4550 - Copy (Large)",
        "./LondonHoliday/costumes/IMG_4550 - Copy (Large).svg",
        { x: 135.49999999999994, y: 180 }
      ),
      new Costume(
        "IMG_4545 - Copy (Large)",
        "./LondonHoliday/costumes/IMG_4545 - Copy (Large).jpg",
        { x: 480, y: 360 }
      ),
      new Costume(
        "IMG_4566 - Copy (Large)",
        "./LondonHoliday/costumes/IMG_4566 - Copy (Large).svg",
        { x: 135.5, y: 180 }
      ),
      new Costume(
        "IMG_4569 - Copy (Large)",
        "./LondonHoliday/costumes/IMG_4569 - Copy (Large).svg",
        { x: 135.5, y: 180 }
      ),
      new Costume(
        "IMG_4584 - Copy (Large)",
        "./LondonHoliday/costumes/IMG_4584 - Copy (Large).svg",
        { x: 319.069066996997, y: 180 }
      ),
      new Costume(
        "IMG_4582 - Copy (Large)",
        "./LondonHoliday/costumes/IMG_4582 - Copy (Large).svg",
        { x: 266.5165165165165, y: 180 }
      ),
      new Costume(
        "IMG_4635 - Copy (Large)",
        "./LondonHoliday/costumes/IMG_4635 - Copy (Large).svg",
        { x: 259.009009009009, y: 180 }
      ),
      new Costume(
        "IMG_4650 - Copy (Large)",
        "./LondonHoliday/costumes/IMG_4650 - Copy (Large).svg",
        { x: 259.00901, y: 180 }
      ),
      new Costume(
        "IMG_4652 - Copy (Large)",
        "./LondonHoliday/costumes/IMG_4652 - Copy (Large).svg",
        { x: 259.00901, y: 180 }
      ),
      new Costume(
        "IMG_4667 - Copy (Large)",
        "./LondonHoliday/costumes/IMG_4667 - Copy (Large).svg",
        { x: 135.88588588588587, y: 180 }
      ),
      new Costume(
        "IMG_4668 - Copy (Large)",
        "./LondonHoliday/costumes/IMG_4668 - Copy (Large).jpg",
        { x: 480, y: 360 }
      ),
      new Costume(
        "IMG_4736 - Copy (Large)",
        "./LondonHoliday/costumes/IMG_4736 - Copy (Large).jpg",
        { x: 270, y: 360 }
      ),
      new Costume(
        "IMG_4756 - Copy (Large)",
        "./LondonHoliday/costumes/IMG_4756 - Copy (Large).svg",
        { x: 260.51051051051047, y: 180 }
      ),
      new Costume(
        "IMG_4759 - Copy (Large)",
        "./LondonHoliday/costumes/IMG_4759 - Copy (Large).jpg",
        { x: 480, y: 360 }
      ),
      new Costume(
        "IMG_4821 - Copy (Large)",
        "./LondonHoliday/costumes/IMG_4821 - Copy (Large).svg",
        { x: 253.002995, y: 180 }
      ),
    ];

    this.sounds = [new Sound("pop", "./LondonHoliday/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "London Holiday" },
        this.whenIReceiveLondonHoliday
      ),
      new Trigger(Trigger.BROADCAST, { name: "setup" }, this.whenIReceiveSetup),
    ];
  }

  *whenIReceiveLondonHoliday() {
    this.effects.ghost = 100;
    this.costume = "IMG_4550 - Copy (Large)2";
    this.visible = true;
    for (let i = 0; i < 18; i++) {
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
