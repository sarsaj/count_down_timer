#!/usr/bin/env node
import inquirer from "inquirer";

const enum countdownTimer {
  FIVE = 5,
  TEN = 10,
  FIFTEEN = 15,
  TWENTY = 20,
}

const countdown = async (time: number) => {
  for (let i = time; i >= 0; i--) {
    console.log(i);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
};
countdown(countdownTimer.TWENTY)
  .then(() => console.log("Countdown finished!"))
  .catch((err) => console.error(err));
  