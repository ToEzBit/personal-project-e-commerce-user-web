import React, { useState } from "react";
import kaboom from "kaboom";
import "./flappy.css";
import { addPoint } from "../../api/point";
import { useAuth } from "../../context/AuthContext";

function FlappyContainer() {
  const { user, setReRender } = useAuth();

  const [gameStart, setGameStart] = useState(false);

  const handleRender = () => {
    setTimeout(() => {
      setReRender((prev) => !prev);
    }, 1000);
  };

  const start = () => {
    setGameStart(true);
    kaboom();
    loadSprite("hero", "../../../asset/flappy/image/hero.png"),
      loadSprite("gameBg", "../../../asset/flappy/image/startBg.jpeg");
    loadSprite("bg", "../../../asset/flappy/image/bg.jpg");
    loadSound("alert", "../../../asset/flappy/sound/alert.mp3");
    loadSound("dash", "../../../asset/flappy/sound/dash.mp3");

    scene("game", () => {
      add([sprite("gameBg", { width: width(), height: height() })]);
      add([
        text("Welcome to Flappy Gundam !!"),
        pos(width() / 2, height() / 2 + 108),
        scale(0.7),
        origin("center"),
      ]);
      add([
        text("Click to Start !"),
        pos(width() / 2, height() / 8 + 108),
        scale(0.8),
        origin("center"),
        onClick(() => go("main")),
      ]);
    });

    scene("main", () => {
      const PIPE_OPEN = 240;
      const PIPE_MIN = 60;
      const JUMP_FORCE = 800;
      const SPEED = 320;
      const CEILING = -60;

      // set gravity
      gravity(3200);

      add([sprite("bg", { width: width(), height: height() })]);

      const hero = add([
        sprite("hero"),
        scale(0.7),
        pos(width() / 4, 0),
        area(),
        // body  enables it to fall and jump in a gravity world
        body(),
      ]);

      // check fall death
      hero.onUpdate(() => {
        if (hero.pos.y >= height() || hero.pos.y <= CEILING) {
          go("lose", score);
        }
      });

      onKeyPress("space", () => {
        hero.jump(JUMP_FORCE);
        play("dash");
      });

      onClick(() => {
        hero.jump(JUMP_FORCE);
        play("dash");
      });

      function spawnPipe() {
        // calculate pipe positions
        const h1 = rand(PIPE_MIN, height() - PIPE_MIN - PIPE_OPEN);
        const h2 = height() - h1 - PIPE_OPEN;

        add([
          pos(width(), 0),
          rect(64, h1),
          color(65, 63, 66),
          outline(4),
          area(),
          move(LEFT, SPEED),
          cleanup(),
          // define tag pipe
          "pipe",
        ]);

        add([
          pos(width(), h1 + PIPE_OPEN),
          rect(64, h2),
          color(65, 65, 66),
          outline(4),
          area(),
          move(LEFT, SPEED),
          cleanup(),
          "pipe",
          { passed: false },
        ]);
      }

      // hero collision with pipes
      hero.onCollide("pipe", () => {
        go("lose", score);
      });

      // check hero pass pipe
      onUpdate("pipe", (p) => {
        if (p.pos.x + p.width <= hero.pos.x && p.passed === false) {
          addScore();
          p.passed = true;
        }
      });

      // spawn a pipe every 1.5 sec
      loop(1.5, () => {
        spawnPipe();
      });

      let score = 0;

      // display score
      const scoreLabel = add([
        text(score),
        origin("center"),
        pos(width() / 2, 80),
        fixed(),
      ]);

      function addScore() {
        score++;
        scoreLabel.text = score;
      }
    });

    scene("lose", (score) => {
      add([sprite("bg", { width: width(), height: height() })]);

      add([
        sprite("hero"),
        pos(width() / 2, height() / 2 - 108),
        scale(1),
        origin("center"),
      ]);

      add([
        text(`Your Earn ${score} Point`),
        pos(width() / 2, height() / 2 + 108),
        scale(1),
        origin("center"),
      ]);

      const handleAddPoint = async () => {
        if (score > 0) {
          await addPoint(score);
        }
      };
      handleAddPoint();
      handleRender();
      play("alert");
      onKeyPress("space", () => go("game"));
      onClick(() => go("game"));
    });

    go("game");
  };

  return (
    <div className="mt-8 mx-8 flex">
      <h1 className="text-3xl font-bold  text-dark-blue ">{`Your point  ${user.point}`}</h1>
      <div>
        <button
          className={`${
            gameStart ? "hidden" : "block"
          } bg-dark-blue font-semibold px-6 mx-16 hover:bg-button-blue py-3 text-sm text-white rounded-lg w-40 transition duration-150 ease-in-out`}
          onClick={start}
        >
          Let Flappy !
        </button>
      </div>
    </div>
  );
}

export default FlappyContainer;
