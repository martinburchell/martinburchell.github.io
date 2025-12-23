import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Halloween extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "20251028_173818 (Large)2",
        "./Halloween/costumes/20251028_173818 (Large)2.svg",
        { x: 240, y: 135 }
      ),
      new Costume(
        "20251028_122249 (Large)",
        "./Halloween/costumes/20251028_122249 (Large).svg",
        { x: 250.00000000000009, y: 135 }
      ),
      new Costume(
        "20251021_114755 (Large)",
        "./Halloween/costumes/20251021_114755 (Large).jpg",
        { x: 202.5, y: 360 }
      ),
      new Costume(
        "20251028_142132 (Large)",
        "./Halloween/costumes/20251028_142132 (Large).svg",
        { x: 254.504495, y: 135 }
      ),
      new Costume(
        "20251028_143327 (Large)",
        "./Halloween/costumes/20251028_143327 (Large).jpg",
        { x: 480, y: 270 }
      ),
      new Costume(
        "20251028_151016(0) (Large)",
        "./Halloween/costumes/20251028_151016(0) (Large).jpg",
        { x: 202.5, y: 360 }
      ),
      new Costume(
        "20251028_173818 (Large)",
        "./Halloween/costumes/20251028_173818 (Large).svg",
        { x: 245.49549549549553, y: 135 }
      ),
      new Costume(
        "20251028_191159 (Large)",
        "./Halloween/costumes/20251028_191159 (Large).svg",
        { x: 257.50750750750757, y: 135 }
      ),
      new Costume(
        "20251029_161731 (Large)",
        "./Halloween/costumes/20251029_161731 (Large).svg",
        { x: 253.00300300300307, y: 180 }
      ),
      new Costume(
        "20251029_143314 (Large)",
        "./Halloween/costumes/20251029_143314 (Large).jpg",
        { x: 202.5, y: 360 }
      ),
      new Costume(
        "20251029_162037 (Large)",
        "./Halloween/costumes/20251029_162037 (Large).jpg",
        { x: 202.5, y: 360 }
      ),
      new Costume(
        "20251029_162820 (Large)",
        "./Halloween/costumes/20251029_162820 (Large).jpg",
        { x: 202.5, y: 360 }
      ),
      new Costume(
        "WhatsApp Image 2025-11-04 at 10",
        "./Halloween/costumes/WhatsApp Image 2025-11-04 at 10.svg",
        { x: 262.0120145045045, y: 180 }
      ),
    ];

    this.sounds = [new Sound("pop", "./Halloween/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Halloween" },
        this.whenIReceiveHalloween
      ),
      new Trigger(Trigger.BROADCAST, { name: "setup" }, this.whenIReceiveSetup),
    ];
  }

  *whenIReceiveHalloween() {
    this.effects.ghost = 100;
    this.costume = "20251028_173818 (Large)2";
    this.visible = true;
    for (let i = 0; i < 13; i++) {
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
