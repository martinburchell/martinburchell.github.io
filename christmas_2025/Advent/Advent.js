import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Advent extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Advent/costumes/costume1.svg", {
        x: 240,
        y: 135,
      }),
      new Costume("20251205_141748", "./Advent/costumes/20251205_141748.svg", {
        x: 240,
        y: 135,
      }),
      new Costume("20251206_142834", "./Advent/costumes/20251206_142834.svg", {
        x: 240,
        y: 135,
      }),
      new Costume("20251207_152552", "./Advent/costumes/20251207_152552.svg", {
        x: 240,
        y: 135,
      }),
      new Costume("20251207_154758", "./Advent/costumes/20251207_154758.jpg", {
        x: 480,
        y: 270,
      }),
      new Costume(
        "20251210_181345(0)",
        "./Advent/costumes/20251210_181345(0).svg",
        { x: 241.13963963964025, y: 180 }
      ),
      new Costume("20251210_183208", "./Advent/costumes/20251210_183208.jpg", {
        x: 480,
        y: 360,
      }),
      new Costume("20251214_160249", "./Advent/costumes/20251214_160249.svg", {
        x: 240,
        y: 135,
      }),
      new Costume("20251214_162406", "./Advent/costumes/20251214_162406.jpg", {
        x: 480,
        y: 270,
      }),
    ];

    this.sounds = [new Sound("pop", "./Advent/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Advent" },
        this.whenIReceiveAdvent
      ),
      new Trigger(Trigger.BROADCAST, { name: "setup" }, this.whenIReceiveSetup),
    ];
  }

  *whenIReceiveAdvent() {
    this.effects.ghost = 100;
    this.costume = "costume1";
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
