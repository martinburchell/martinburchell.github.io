import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Months extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("January", "./Months/costumes/January.png", { x: 50, y: 50 }),
      new Costume("February", "./Months/costumes/February.png", {
        x: 50,
        y: 50,
      }),
      new Costume("March", "./Months/costumes/March.png", { x: 50, y: 50 }),
      new Costume("April", "./Months/costumes/April.png", { x: 50, y: 50 }),
      new Costume("May", "./Months/costumes/May.png", { x: 50, y: 50 }),
      new Costume("June", "./Months/costumes/June.png", { x: 50, y: 50 }),
      new Costume("July", "./Months/costumes/July.png", { x: 50, y: 50 }),
      new Costume("August", "./Months/costumes/August.png", { x: 50, y: 50 }),
      new Costume("September", "./Months/costumes/September.png", {
        x: 50,
        y: 50,
      }),
      new Costume("October", "./Months/costumes/October.png", { x: 50, y: 50 }),
      new Costume("November", "./Months/costumes/November.png", {
        x: 50,
        y: 50,
      }),
      new Costume("December", "./Months/costumes/December.png", {
        x: 50,
        y: 50,
      }),
    ];

    this.sounds = [new Sound("pop", "./Months/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "setup" }, this.whenIReceiveSetup),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Aaron's 9th Birthday" },
        this.whenIReceiveAarons9thBirthday
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Easter" },
        this.whenIReceiveEaster
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Newton's House and Flag Fen" },
        this.whenIReceiveNewtonsHouseAndFlagFen
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Simon's 6th Birthday" },
        this.whenIReceiveSimons6thBirthday
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Pirate Day" },
        this.whenIReceivePirateDay
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Home Ed Camp" },
        this.whenIReceiveHomeEdCamp
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "London Holiday" },
        this.whenIReceiveLondonHoliday
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Museum Summer Visits" },
        this.whenIReceiveMuseumSummerVisits
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Haven Holiday with Home Ed Friends" },
        this.whenIReceiveHavenHolidayWithHomeEdFriends
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Halloween" },
        this.whenIReceiveHalloween
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Aaron's 9 3/4 Birthday" },
        this.whenIReceiveAarons934Birthday
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Advent" },
        this.whenIReceiveAdvent
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.broadcast("setup");
    this.broadcast("handle keys");
  }

  *whenIReceiveSetup() {
    this.stage.vars.delayBetweenPhotos = 3;
  }

  *whenIReceiveAarons9thBirthday() {
    this.broadcast("hide months");
  }

  *whenIReceiveEaster() {
    this.broadcast("hide months");
  }

  *whenIReceiveNewtonsHouseAndFlagFen() {
    this.broadcast("hide months");
  }

  *whenIReceiveSimons6thBirthday() {
    this.broadcast("hide months");
  }

  *whenIReceivePirateDay() {
    this.broadcast("hide months");
  }

  *whenIReceiveHomeEdCamp() {
    this.broadcast("hide months");
  }

  *whenIReceiveLondonHoliday() {
    this.broadcast("hide months");
  }

  *whenIReceiveMuseumSummerVisits() {
    this.broadcast("hide months");
  }

  *whenIReceiveHavenHolidayWithHomeEdFriends() {
    this.broadcast("hide months");
  }

  *whenIReceiveHalloween() {
    this.broadcast("hide months");
  }

  *whenIReceiveAarons934Birthday() {
    this.broadcast("hide months");
  }

  *whenIReceiveAdvent() {
    this.broadcast("hide months");
  }
}
