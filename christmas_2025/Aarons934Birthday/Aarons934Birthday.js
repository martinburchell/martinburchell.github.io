import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Aarons934Birthday extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "20251029_143313 (Large)",
        "./Aarons934Birthday/costumes/20251029_143313 (Large).svg",
        { x: 241.37312, y: 183.592335 }
      ),
      new Costume(
        "20251029_143313 (Large)2",
        "./Aarons934Birthday/costumes/20251029_143313 (Large)2.svg",
        { x: 292.04204204204217, y: 180 }
      ),
      new Costume(
        "IMG_3710 (Large)",
        "./Aarons934Birthday/costumes/IMG_3710 (Large).jpg",
        { x: 480, y: 360 }
      ),
      new Costume(
        "476138869_10221617711230602_8877542010661725768_n (Large)",
        "./Aarons934Birthday/costumes/476138869_10221617711230602_8877542010661725768_n (Large).svg",
        { x: 260.5105105105106, y: 180 }
      ),
      new Costume(
        "476469939_10221617710470583_4546386775253956859_n (Large)",
        "./Aarons934Birthday/costumes/476469939_10221617710470583_4546386775253956859_n (Large).jpg",
        { x: 270, y: 360 }
      ),
      new Costume(
        "579169075_10224275021381695_9146852163876739796_n (Large)",
        "./Aarons934Birthday/costumes/579169075_10224275021381695_9146852163876739796_n (Large).svg",
        { x: 241.60660160660677, y: 181.5015015015014 }
      ),
      new Costume(
        "WhatsApp Image 2025-11-07 at 17",
        "./Aarons934Birthday/costumes/WhatsApp Image 2025-11-07 at 17.svg",
        { x: 300.36990555555553, y: 197.6192515315313 }
      ),
    ];

    this.sounds = [new Sound("pop", "./Aarons934Birthday/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Aaron's 9 3/4 Birthday" },
        this.whenIReceiveAarons934Birthday
      ),
      new Trigger(Trigger.BROADCAST, { name: "setup" }, this.whenIReceiveSetup),
    ];
  }

  *whenIReceiveAarons934Birthday() {
    this.effects.ghost = 100;
    this.costume = "20251029_143313 (Large)";
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
