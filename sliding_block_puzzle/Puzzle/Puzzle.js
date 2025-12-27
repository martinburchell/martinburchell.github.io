/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Puzzle extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("0", "./Puzzle/costumes/0.png", { x: 0, y: 0 }),
      new Costume("1-0", "./Puzzle/costumes/1-0.jpg", { x: 120, y: 120 }),
      new Costume("1-1", "./Puzzle/costumes/1-1.jpg", { x: 120, y: 120 }),
      new Costume("1-2", "./Puzzle/costumes/1-2.jpg", { x: 120, y: 120 }),
      new Costume("1-3", "./Puzzle/costumes/1-3.jpg", { x: 120, y: 120 }),
      new Costume("1-4", "./Puzzle/costumes/1-4.jpg", { x: 120, y: 120 }),
      new Costume("1-5", "./Puzzle/costumes/1-5.jpg", { x: 120, y: 120 }),
      new Costume("1-6", "./Puzzle/costumes/1-6.jpg", { x: 120, y: 120 }),
      new Costume("1-7", "./Puzzle/costumes/1-7.jpg", { x: 120, y: 120 }),
      new Costume("1-8", "./Puzzle/costumes/1-8.jpg", { x: 120, y: 120 }),
      new Costume("1-9", "./Puzzle/costumes/1-9.jpg", { x: 120, y: 120 }),
      new Costume("1-10", "./Puzzle/costumes/1-10.jpg", { x: 120, y: 120 }),
      new Costume("1-11", "./Puzzle/costumes/1-11.jpg", { x: 120, y: 120 }),
      new Costume("2-0", "./Puzzle/costumes/2-0.jpg", { x: 120, y: 120 }),
      new Costume("2-1", "./Puzzle/costumes/2-1.jpg", { x: 120, y: 120 }),
      new Costume("2-2", "./Puzzle/costumes/2-2.jpg", { x: 120, y: 120 }),
      new Costume("2-3", "./Puzzle/costumes/2-3.jpg", { x: 120, y: 120 }),
      new Costume("2-4", "./Puzzle/costumes/2-4.jpg", { x: 120, y: 120 }),
      new Costume("2-5", "./Puzzle/costumes/2-5.jpg", { x: 120, y: 120 }),
      new Costume("2-6", "./Puzzle/costumes/2-6.jpg", { x: 120, y: 120 }),
      new Costume("2-7", "./Puzzle/costumes/2-7.jpg", { x: 120, y: 120 }),
      new Costume("2-8", "./Puzzle/costumes/2-8.jpg", { x: 120, y: 120 }),
      new Costume("2-9", "./Puzzle/costumes/2-9.jpg", { x: 120, y: 120 }),
      new Costume("2-10", "./Puzzle/costumes/2-10.jpg", { x: 120, y: 120 }),
      new Costume("2-11", "./Puzzle/costumes/2-11.jpg", { x: 120, y: 120 }),
      new Costume("3-0", "./Puzzle/costumes/3-0.jpg", { x: 120, y: 120 }),
      new Costume("3-1", "./Puzzle/costumes/3-1.jpg", { x: 120, y: 120 }),
      new Costume("3-2", "./Puzzle/costumes/3-2.jpg", { x: 120, y: 120 }),
      new Costume("3-3", "./Puzzle/costumes/3-3.jpg", { x: 120, y: 120 }),
      new Costume("3-4", "./Puzzle/costumes/3-4.jpg", { x: 120, y: 120 }),
      new Costume("3-5", "./Puzzle/costumes/3-5.jpg", { x: 120, y: 120 }),
      new Costume("3-6", "./Puzzle/costumes/3-6.jpg", { x: 120, y: 120 }),
      new Costume("3-7", "./Puzzle/costumes/3-7.jpg", { x: 120, y: 120 }),
      new Costume("3-8", "./Puzzle/costumes/3-8.jpg", { x: 120, y: 120 }),
      new Costume("3-9", "./Puzzle/costumes/3-9.jpg", { x: 120, y: 120 }),
      new Costume("3-10", "./Puzzle/costumes/3-10.jpg", { x: 120, y: 120 }),
      new Costume("3-11", "./Puzzle/costumes/3-11.jpg", { x: 120, y: 120 }),
      new Costume("4-0", "./Puzzle/costumes/4-0.jpg", { x: 120, y: 120 }),
      new Costume("4-1", "./Puzzle/costumes/4-1.jpg", { x: 120, y: 120 }),
      new Costume("4-2", "./Puzzle/costumes/4-2.jpg", { x: 120, y: 120 }),
      new Costume("4-3", "./Puzzle/costumes/4-3.jpg", { x: 120, y: 120 }),
      new Costume("4-4", "./Puzzle/costumes/4-4.jpg", { x: 120, y: 120 }),
      new Costume("4-5", "./Puzzle/costumes/4-5.jpg", { x: 120, y: 120 }),
      new Costume("4-6", "./Puzzle/costumes/4-6.jpg", { x: 120, y: 120 }),
      new Costume("4-7", "./Puzzle/costumes/4-7.jpg", { x: 120, y: 120 }),
      new Costume("4-8", "./Puzzle/costumes/4-8.jpg", { x: 120, y: 120 }),
      new Costume("4-9", "./Puzzle/costumes/4-9.jpg", { x: 120, y: 120 }),
      new Costume("4-10", "./Puzzle/costumes/4-10.jpg", { x: 120, y: 120 }),
      new Costume("4-11", "./Puzzle/costumes/4-11.jpg", { x: 120, y: 120 }),
      new Costume("5-0", "./Puzzle/costumes/5-0.jpg", { x: 120, y: 120 }),
      new Costume("5-1", "./Puzzle/costumes/5-1.jpg", { x: 120, y: 120 }),
      new Costume("5-2", "./Puzzle/costumes/5-2.jpg", { x: 120, y: 120 }),
      new Costume("5-3", "./Puzzle/costumes/5-3.jpg", { x: 120, y: 120 }),
      new Costume("5-4", "./Puzzle/costumes/5-4.jpg", { x: 120, y: 120 }),
      new Costume("5-5", "./Puzzle/costumes/5-5.jpg", { x: 120, y: 120 }),
      new Costume("5-6", "./Puzzle/costumes/5-6.jpg", { x: 120, y: 120 }),
      new Costume("5-7", "./Puzzle/costumes/5-7.jpg", { x: 120, y: 120 }),
      new Costume("5-8", "./Puzzle/costumes/5-8.jpg", { x: 120, y: 120 }),
      new Costume("5-9", "./Puzzle/costumes/5-9.jpg", { x: 120, y: 120 }),
      new Costume("5-10", "./Puzzle/costumes/5-10.jpg", { x: 120, y: 120 }),
      new Costume("5-11", "./Puzzle/costumes/5-11.jpg", { x: 120, y: 120 }),
    ];

    this.sounds = [
      new Sound("Low Whoosh", "./Puzzle/sounds/Low Whoosh.wav"),
      new Sound("Magic Spell", "./Puzzle/sounds/Magic Spell.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "draw" }, this.whenIReceiveDraw),
      new Trigger(
        Trigger.BROADCAST,
        { name: "show picture" },
        this.whenIReceiveShowPicture
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "picture chosen" },
        this.whenIReceivePictureChosen
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "difficulty selected" },
        this.whenIReceiveDifficultySelected
      ),
    ];

    this.vars.row = 2;
    this.vars.column = 0;
    this.vars.x = 180;
    this.vars.y = -120;
    this.vars.canvasWidth = 480;
    this.vars.canvasHeight = 360;
    this.vars.tileSize = 120;
    this.vars.type = "main";
    this.vars.clone = "clone";
    this.vars.main = "main";
    this.vars.numberOfTiles = 12;
    this.vars.tileNumber = 1;
    this.vars.myIndex = 13;
    this.vars.direction = 4;
    this.vars.numTilesX = 4;
    this.vars.numTilesY = 3;
    this.vars.shuffles = 30;
    this.vars.index = 13;
    this.vars.spaceStartIndex = 10;
    this.vars.up = 1;
    this.vars.right = 2;
    this.vars.down = 3;
    this.vars.left = 4;
    this.vars.oldDirection = 4;
    this.vars.myX = 0;
    this.vars.myY = 0;
    this.vars.directions = [3, 4];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.solved = 1;
    /* TODO: Implement sensing_setdragmode */ null;
    this.stage.vars.debug = [];
    this.visible = false;
    yield* this.setup();
    yield* this.choosePicture();
  }

  *startAsClone() {
    this.vars.myX = this.x;
    this.vars.myY = this.y;
    this.vars.type = this.vars.clone;
  }

  *drawTiles() {
    this.broadcast("draw");
  }

  *shuffleTiles() {
    this.vars.shuffles = 0;
    this.vars.oldDirection = 0;
    while (
      !(this.compare(this.vars.shuffles, this.stage.vars.difficulty) === 0)
    ) {
      yield* this.workOutShuffleDirections();
      this.vars.direction = this.itemOf(
        this.vars.directions,
        this.random(1, this.vars.directions.length) - 1
      );
      this.vars.oldDirection = this.vars.direction;
      if (this.compare(this.vars.direction, this.vars.up) === 0) {
        yield* this.shuffleFrom(
          this.toNumber(this.stage.vars.spaceIndex) -
            this.toNumber(this.vars.numTilesX)
        );
      }
      if (this.compare(this.vars.direction, this.vars.right) === 0) {
        yield* this.shuffleFrom(this.toNumber(this.stage.vars.spaceIndex) + 1);
      }
      if (this.compare(this.vars.direction, this.vars.down) === 0) {
        yield* this.shuffleFrom(
          this.toNumber(this.stage.vars.spaceIndex) +
            this.toNumber(this.vars.numTilesX)
        );
      }
      if (this.compare(this.vars.direction, this.vars.left) === 0) {
        yield* this.shuffleFrom(this.toNumber(this.stage.vars.spaceIndex) - 1);
      }
      yield;
    }
  }

  *makeTiles() {
    this.stage.vars.tileData = [];
    this.vars.tileNumber = 1;
    for (let i = 0; i < this.toNumber(this.vars.numberOfTiles); i++) {
      this.stage.vars.tileData.push(this.vars.tileNumber);
      this.vars.tileNumber++;
      yield;
    }
  }

  *createClones() {
    this.vars.row = 2;
    this.vars.myIndex = 1;
    for (let i = 0; i < this.toNumber(this.vars.numTilesY); i++) {
      this.vars.column = 0;
      for (let i = 0; i < this.toNumber(this.vars.numTilesX); i++) {
        this.vars.x =
          (this.toNumber(this.vars.column) + 0.5) *
            this.toNumber(this.vars.tileSize) -
          this.toNumber(this.vars.canvasWidth) / 2;
        this.vars.y =
          (this.toNumber(this.vars.row) + 0.5) *
            this.toNumber(this.vars.tileSize) -
          this.toNumber(this.vars.canvasHeight) / 2;
        this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
        this.createClone();
        this.vars.column++;
        this.vars.myIndex++;
        yield;
      }
      this.vars.row--;
      yield;
    }
  }

  *whenIReceiveDraw() {
    if (this.compare(this.vars.type, this.vars.clone) === 0) {
      yield* this.drawTile(
        this.itemOf(this.stage.vars.tileData, this.vars.myIndex - 1)
      );
      this.visible = true;
    }
  }

  *shuffleFrom(index) {
    yield* this.slide(index);
    this.vars.shuffles++;
  }

  *slide(index) {
    this.stage.vars.tileData.splice(
      this.stage.vars.spaceIndex - 1,
      1,
      this.itemOf(this.stage.vars.tileData, index - 1)
    );
    this.stage.vars.tileData.splice(index - 1, 1, 0);
    this.stage.vars.spaceIndex = index;
    yield* this.drawTiles();
    yield* this.playSoundUntilDone("Low Whoosh");
  }

  *checkSolved() {
    this.stage.vars.solved = 1;
    this.vars.index = 1;
    while (!(this.compare(this.vars.index, this.vars.numberOfTiles) > 0)) {
      if (
        !(
          this.compare(
            this.itemOf(this.stage.vars.tileData, this.vars.index - 1),
            this.vars.index
          ) === 0 ||
          this.toNumber(
            this.itemOf(this.stage.vars.tileData, this.vars.index - 1)
          ) === 0
        )
      ) {
        this.stage.vars.solved = 0;
      }
      this.vars.index++;
      yield;
    }
  }

  *drawTile(tileNumber) {
    this.goto(this.toNumber(this.vars.myX), this.toNumber(this.vars.myY));
    if (this.toNumber(tileNumber) === 0) {
      this.costume = 0;
    } else {
      this.costume =
        this.toString(this.stage.vars.picture) +
        ("-" + this.toString(this.toNumber(tileNumber) - 1));
    }
  }

  *workOutShuffleDirections() {
    this.vars.directions = [];
    if (
      this.compare(this.stage.vars.spaceIndex, this.vars.numTilesX) > 0 &&
      !(this.compare(this.vars.oldDirection, this.vars.down) === 0)
    ) {
      this.vars.directions.push(this.vars.up);
    }
    if (
      !(
        this.toNumber(this.stage.vars.spaceIndex) %
          this.toNumber(this.vars.numTilesX) ===
        0
      ) &&
      !(this.compare(this.vars.oldDirection, this.vars.left) === 0)
    ) {
      this.vars.directions.push(this.vars.right);
    }
    if (
      this.compare(
        this.toNumber(this.stage.vars.spaceIndex) +
          this.toNumber(this.vars.numTilesX),
        this.toNumber(this.vars.numberOfTiles) + 1
      ) < 0 &&
      !(this.compare(this.vars.oldDirection, this.vars.up) === 0)
    ) {
      this.vars.directions.push(this.vars.down);
    }
    if (
      !(
        this.toNumber(this.stage.vars.spaceIndex) %
          this.toNumber(this.vars.numTilesX) ===
        1
      ) &&
      !(this.compare(this.vars.oldDirection, this.vars.right) === 0)
    ) {
      this.vars.directions.push(this.vars.left);
    }
  }

  *setup() {
    yield* this.setBrightness();
    this.stage.vars.numberOfPictures = 5;
    this.vars.clone = "clone";
    this.vars.main = "main";
    this.vars.type = this.vars.main;
    this.vars.up = 1;
    this.vars.right = 2;
    this.vars.down = 3;
    this.vars.left = 4;
    this.vars.canvasWidth = 480;
    this.vars.canvasHeight = 360;
    this.vars.tileSize = 120;
    this.vars.numTilesX =
      this.toNumber(this.vars.canvasWidth) / this.toNumber(this.vars.tileSize);
    this.vars.numTilesY =
      this.toNumber(this.vars.canvasHeight) / this.toNumber(this.vars.tileSize);
    this.vars.numberOfTiles =
      this.toNumber(this.vars.numTilesX) * this.toNumber(this.vars.numTilesY);
    yield* this.makeTiles();
    yield* this.createClones();
    yield* this.drawTiles();
  }

  *play() {
    yield* this.makeSpace();
    yield* this.shuffleTiles();
    this.stage.vars.solved = 0;
    while (!(this.toNumber(this.stage.vars.solved) === 1)) {
      yield* this.checkControls();
      yield* this.checkSolved();
      yield;
    }
    this.stage.vars.tileData.splice(
      this.vars.spaceStartIndex - 1,
      1,
      this.vars.spaceStartIndex
    );
    yield* this.drawTiles();
    yield* this.playSoundUntilDone("Magic Spell");
  }

  *choosePicture() {
    this.stage.vars.picture = 1;
    this.broadcast("choose picture");
  }

  *whenIReceiveShowPicture() {
    if (this.compare(this.vars.type, this.vars.main) === 0) {
      yield* this.drawTiles();
    }
  }

  *makeSpace() {
    this.stage.vars.spaceIndex = this.random(
      1,
      this.toNumber(this.vars.numberOfTiles)
    );
    this.vars.spaceStartIndex = this.stage.vars.spaceIndex;
    this.stage.vars.tileData.splice(this.stage.vars.spaceIndex - 1, 1, 0);
  }

  *selectDifficulty() {
    this.stage.vars.difficulty = 4;
    this.broadcast("select difficulty");
  }

  *checkControls() {
    if (this.mouse.down) {
      while (!!this.mouse.down) {
        yield;
      }
      this.vars.column = Math.floor(
        (this.mouse.x + this.toNumber(this.vars.canvasWidth) / 2) /
          this.toNumber(this.vars.tileSize)
      );
      this.vars.row = Math.floor(
        (this.mouse.y + this.toNumber(this.vars.canvasHeight) / 2) /
          this.toNumber(this.vars.tileSize)
      );
      this.vars.tileNumber =
        (this.toNumber(this.vars.numTilesY) -
          1 -
          this.toNumber(this.vars.row)) *
          this.toNumber(this.vars.numTilesX) +
        (this.toNumber(this.vars.column) + 1);
      yield* this.maybeSlide(this.vars.tileNumber);
    }
  }

  *maybeSlide(tileIndex) {
    if (
      this.compare(tileIndex, this.toNumber(this.stage.vars.spaceIndex) - 1) ===
        0 &&
      !(
        this.toNumber(this.stage.vars.spaceIndex) %
          this.toNumber(this.vars.numTilesX) ===
        1
      )
    ) {
      yield* this.slide(tileIndex);
    }
    if (
      this.compare(tileIndex, this.toNumber(this.stage.vars.spaceIndex) + 1) ===
        0 &&
      !(
        this.toNumber(this.stage.vars.spaceIndex) %
          this.toNumber(this.vars.numTilesX) ===
        0
      )
    ) {
      yield* this.slide(tileIndex);
    }
    if (
      this.compare(
        tileIndex,
        this.toNumber(this.stage.vars.spaceIndex) +
          this.toNumber(this.vars.numTilesX)
      ) === 0
    ) {
      yield* this.slide(tileIndex);
    }
    if (
      this.compare(
        tileIndex,
        this.toNumber(this.stage.vars.spaceIndex) -
          this.toNumber(this.vars.numTilesX)
      ) === 0
    ) {
      yield* this.slide(tileIndex);
    }
  }

  *setBrightness() {
    this.stage.vars.brightness = [];
    this.stage.vars.brightness.push(100);
    this.stage.vars.brightness.push(100);
    this.stage.vars.brightness.push(100);
    this.stage.vars.brightness.push(100);
    this.stage.vars.brightness.push(-100);
  }

  *whenIReceivePictureChosen() {
    if (this.compare(this.vars.type, this.vars.main) === 0) {
      yield* this.selectDifficulty();
    }
  }

  *whenIReceiveDifficultySelected() {
    if (this.compare(this.vars.type, this.vars.main) === 0) {
      yield* this.play();
    }
  }
}
