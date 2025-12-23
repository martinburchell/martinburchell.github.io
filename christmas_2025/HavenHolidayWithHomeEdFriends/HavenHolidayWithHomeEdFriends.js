import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class HavenHolidayWithHomeEdFriends extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "IMG_5972 (Large)",
        "./HavenHolidayWithHomeEdFriends/costumes/IMG_5972 (Large).svg",
        { x: 240, y: 180 }
      ),
      new Costume(
        "IMG_5814 (Large)",
        "./HavenHolidayWithHomeEdFriends/costumes/IMG_5814 (Large).svg",
        { x: 251.50150150150154, y: 180 }
      ),
      new Costume(
        "WhatsApp Image 2025-09-14 at 14",
        "./HavenHolidayWithHomeEdFriends/costumes/WhatsApp Image 2025-09-14 at 14.jpg",
        { x: 270, y: 360 }
      ),
      new Costume(
        "IMG_5846 (Large)",
        "./HavenHolidayWithHomeEdFriends/costumes/IMG_5846 (Large).svg",
        { x: 265.0150150150151, y: 180 }
      ),
      new Costume(
        "IMG_5850 (Large)",
        "./HavenHolidayWithHomeEdFriends/costumes/IMG_5850 (Large).jpg",
        { x: 270, y: 360 }
      ),
      new Costume(
        "IMG_5972 (Large)2",
        "./HavenHolidayWithHomeEdFriends/costumes/IMG_5972 (Large)2.svg",
        { x: 254.50450450450458, y: 180 }
      ),
      new Costume(
        "IMG_5968 (Large)",
        "./HavenHolidayWithHomeEdFriends/costumes/IMG_5968 (Large).jpg",
        { x: 480, y: 360 }
      ),
      new Costume(
        "IMG_5959 (Large)",
        "./HavenHolidayWithHomeEdFriends/costumes/IMG_5959 (Large).svg",
        { x: 268.01802, y: 180 }
      ),
    ];

    this.sounds = [
      new Sound("pop", "./HavenHolidayWithHomeEdFriends/sounds/pop.wav"),
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Haven Holiday with Home Ed Friends" },
        this.whenIReceiveHavenHolidayWithHomeEdFriends
      ),
      new Trigger(Trigger.BROADCAST, { name: "setup" }, this.whenIReceiveSetup),
    ];
  }

  *whenIReceiveHavenHolidayWithHomeEdFriends() {
    this.effects.ghost = 100;
    this.costume = "IMG_5972 (Large)";
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
