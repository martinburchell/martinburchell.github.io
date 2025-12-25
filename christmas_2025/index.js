import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Months from "./Months/Months.js";
import January from "./January/January.js";
import February from "./February/February.js";
import March from "./March/March.js";
import April from "./April/April.js";
import May from "./May/May.js";
import June from "./June/June.js";
import July from "./July/July.js";
import August from "./August/August.js";
import September from "./September/September.js";
import October from "./October/October.js";
import Novemeber from "./Novemeber/Novemeber.js";
import December from "./December/December.js";
import Simons6thBirthday from "./Simons6thBirthday/Simons6thBirthday.js";
import Aarons9thBirthday from "./Aarons9thBirthday/Aarons9thBirthday.js";
import IsaacNewtonsHouseAndFlagFen from "./IsaacNewtonsHouseAndFlagFen/IsaacNewtonsHouseAndFlagFen.js";
import Easter from "./Easter/Easter.js";
import PirateDay from "./PirateDay/PirateDay.js";
import LondonHoliday from "./LondonHoliday/LondonHoliday.js";
import HomeEdCamp from "./HomeEdCamp/HomeEdCamp.js";
import MuseumVisits from "./MuseumVisits/MuseumVisits.js";
import HavenHolidayWithHomeEdFriends from "./HavenHolidayWithHomeEdFriends/HavenHolidayWithHomeEdFriends.js";
import Halloween from "./Halloween/Halloween.js";
import Aarons934Birthday from "./Aarons934Birthday/Aarons934Birthday.js";
import Advent from "./Advent/Advent.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Months: new Months({
    x: 36,
    y: 28,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 5,
    size: 100,
    visible: false,
    layerOrder: 1,
  }),
  January: new January({
    x: -180,
    y: 120,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 150,
    visible: false,
    layerOrder: 13,
  }),
  February: new February({
    x: -55,
    y: 120,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 150,
    visible: false,
    layerOrder: 2,
  }),
  March: new March({
    x: 70,
    y: 120,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 150,
    visible: false,
    layerOrder: 3,
  }),
  April: new April({
    x: 195,
    y: 120,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 150,
    visible: false,
    layerOrder: 4,
  }),
  May: new May({
    x: -180,
    y: 50,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 150,
    visible: false,
    layerOrder: 5,
  }),
  June: new June({
    x: -55,
    y: 50,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 150,
    visible: false,
    layerOrder: 6,
  }),
  July: new July({
    x: 70,
    y: 50,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 150,
    visible: false,
    layerOrder: 7,
  }),
  August: new August({
    x: 195,
    y: 50,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 150,
    visible: false,
    layerOrder: 8,
  }),
  September: new September({
    x: -180,
    y: -20,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 150,
    visible: false,
    layerOrder: 12,
  }),
  October: new October({
    x: -55,
    y: -20,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 150,
    visible: false,
    layerOrder: 11,
  }),
  Novemeber: new Novemeber({
    x: 70,
    y: -20,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 150,
    visible: false,
    layerOrder: 10,
  }),
  December: new December({
    x: 195,
    y: -20,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 150,
    visible: false,
    layerOrder: 9,
  }),
  Simons6thBirthday: new Simons6thBirthday({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 23,
  }),
  Aarons9thBirthday: new Aarons9thBirthday({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 8,
    size: 100,
    visible: false,
    layerOrder: 22,
  }),
  IsaacNewtonsHouseAndFlagFen: new IsaacNewtonsHouseAndFlagFen({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 10,
    size: 100,
    visible: false,
    layerOrder: 21,
  }),
  Easter: new Easter({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 5,
    size: 100,
    visible: false,
    layerOrder: 24,
  }),
  PirateDay: new PirateDay({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 9,
    size: 100,
    visible: false,
    layerOrder: 20,
  }),
  LondonHoliday: new LondonHoliday({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 19,
    size: 100,
    visible: false,
    layerOrder: 14,
  }),
  HomeEdCamp: new HomeEdCamp({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 16,
    size: 100,
    visible: false,
    layerOrder: 19,
  }),
  MuseumVisits: new MuseumVisits({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 8,
    size: 100,
    visible: false,
    layerOrder: 18,
  }),
  HavenHolidayWithHomeEdFriends: new HavenHolidayWithHomeEdFriends({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 8,
    size: 100,
    visible: false,
    layerOrder: 15,
  }),
  Halloween: new Halloween({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 13,
    size: 100,
    visible: false,
    layerOrder: 17,
  }),
  Aarons934Birthday: new Aarons934Birthday({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 7,
    size: 100,
    visible: false,
    layerOrder: 16,
  }),
  Advent: new Advent({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 8,
    size: 100,
    visible: true,
    layerOrder: 25,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
