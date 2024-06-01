import { FlyingBird } from "../models/flying-bird.js";
import { GameScreen } from "../models/screens/game-screen.js";
import { StartScreen } from "../models/screens/start-screen.js";
import { GenericScreenProp, FlyingBirdProp, InitStartProp } from "./types.js";

export function startScreenChange(): GenericScreenProp {
  return new StartScreen;
}

export function gameScreenChange():InitStartProp {
  return {screen: new GameScreen, bird: new FlyingBird}
}

