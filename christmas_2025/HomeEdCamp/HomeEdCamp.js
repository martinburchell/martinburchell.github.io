import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class HomeEdCamp extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "20250711_200406 (Large)",
        "./HomeEdCamp/costumes/20250711_200406 (Large).svg",
        { x: 240, y: 135 }
      ),
      new Costume(
        "20250709_173046 (Large)",
        "./HomeEdCamp/costumes/20250709_173046 (Large).svg",
        { x: 260.5105105105105, y: 180 }
      ),
      new Costume(
        "20250709_201856 (Large)",
        "./HomeEdCamp/costumes/20250709_201856 (Large).jpg",
        { x: 270, y: 360 }
      ),
      new Costume(
        "20250710_111306 (Large)",
        "./HomeEdCamp/costumes/20250710_111306 (Large).svg",
        { x: 257.50751, y: 135 }
      ),
      new Costume(
        "20250710_113951 (Large)",
        "./HomeEdCamp/costumes/20250710_113951 (Large).jpg",
        { x: 480, y: 270 }
      ),
      new Costume(
        "20250710_145332 (Large)",
        "./HomeEdCamp/costumes/20250710_145332 (Large).jpg",
        { x: 480, y: 270 }
      ),
      new Costume(
        "20250713_112238 (Large)",
        "./HomeEdCamp/costumes/20250713_112238 (Large).jpg",
        { x: 480, y: 270 }
      ),
      new Costume(
        "20250710_194708 (Large)",
        "./HomeEdCamp/costumes/20250710_194708 (Large).svg",
        { x: 266.5165165165165, y: 135 }
      ),
      new Costume(
        "20250710_195403 (Large)",
        "./HomeEdCamp/costumes/20250710_195403 (Large).jpg",
        { x: 480, y: 270 }
      ),
      new Costume(
        "20250710_195141 (Large)",
        "./HomeEdCamp/costumes/20250710_195141 (Large).jpg",
        { x: 202.5, y: 360 }
      ),
      new Costume(
        "20250711_204322 (Large)",
        "./HomeEdCamp/costumes/20250711_204322 (Large).jpg",
        { x: 480, y: 270 }
      ),
      new Costume(
        "20250711_125537 (Large)",
        "./HomeEdCamp/costumes/20250711_125537 (Large).svg",
        { x: 260.5105105105106, y: 135 }
      ),
      new Costume(
        "20250711_203425 (Large)",
        "./HomeEdCamp/costumes/20250711_203425 (Large).jpg",
        { x: 480, y: 270 }
      ),
      new Costume(
        "20250711_200406 (Large)2",
        "./HomeEdCamp/costumes/20250711_200406 (Large)2.svg",
        { x: 266.516515, y: 135 }
      ),
      new Costume(
        "20250712_105533 (Large)",
        "./HomeEdCamp/costumes/20250712_105533 (Large).svg",
        { x: 266.516515, y: 135 }
      ),
      new Costume(
        "20250713_204743 (Large)",
        "./HomeEdCamp/costumes/20250713_204743 (Large).png",
        { x: 480, y: 270 }
      ),
    ];

    this.sounds = [new Sound("pop", "./HomeEdCamp/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Home Ed Camp" },
        this.whenIReceiveHomeEdCamp
      ),
      new Trigger(Trigger.BROADCAST, { name: "setup" }, this.whenIReceiveSetup),
    ];
  }

  *whenIReceiveHomeEdCamp() {
    this.effects.ghost = 100;
    this.costume = "20250711_200406 (Large)";
    this.visible = true;
    for (let i = 0; i < 15; i++) {
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
