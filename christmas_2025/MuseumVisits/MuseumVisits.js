import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class MuseumVisits extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "20250820_135136 (Large)",
        "./MuseumVisits/costumes/20250820_135136 (Large).svg",
        { x: 240, y: 135 }
      ),
      new Costume(
        "20250820_102936 (Large)",
        "./MuseumVisits/costumes/20250820_102936 (Large).svg",
        { x: 254.504495, y: 135 }
      ),
      new Costume(
        "20250820_103519 (Large)",
        "./MuseumVisits/costumes/20250820_103519 (Large).svg",
        { x: 250, y: 135 }
      ),
      new Costume(
        "20250820_143709 (Large)",
        "./MuseumVisits/costumes/20250820_143709 (Large).svg",
        { x: 256.006006006006, y: 135 }
      ),
      new Costume(
        "20250820_135427 (Large)",
        "./MuseumVisits/costumes/20250820_135427 (Large).jpg",
        { x: 202.5, y: 360 }
      ),
      new Costume(
        "20250820_135512 (Large)",
        "./MuseumVisits/costumes/20250820_135512 (Large).jpg",
        { x: 480, y: 270 }
      ),
      new Costume(
        "20250820_135136 (Large)2",
        "./MuseumVisits/costumes/20250820_135136 (Large)2.svg",
        { x: 259.00901, y: 180 }
      ),
      new Costume("IMG_5753", "./MuseumVisits/costumes/IMG_5753.svg", {
        x: 256.5,
        y: 180,
      }),
      new Costume("IMG_5768", "./MuseumVisits/costumes/IMG_5768.png", {
        x: 270,
        y: 360,
      }),
      new Costume("IMG_5782", "./MuseumVisits/costumes/IMG_5782.jpg", {
        x: 270,
        y: 360,
      }),
      new Costume("IMG_5784", "./MuseumVisits/costumes/IMG_5784.jpg", {
        x: 270,
        y: 360,
      }),
    ];

    this.sounds = [new Sound("pop", "./MuseumVisits/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Museum Summer Visits" },
        this.whenIReceiveMuseumSummerVisits
      ),
      new Trigger(Trigger.BROADCAST, { name: "setup" }, this.whenIReceiveSetup),
    ];
  }

  *whenIReceiveMuseumSummerVisits() {
    this.effects.ghost = 100;
    this.costume = "20250820_135136 (Large)";
    this.visible = true;
    for (let i = 0; i < 11; i++) {
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
