#!/usr/bin/env node
const countdown = async (time) => {
    for (let i = time; i >= 0; i--) {
        console.log(i);
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }
};
countdown(20 /* countdownTimer.TWENTY */)
    .then(() => console.log("Countdown finished!"))
    .catch((err) => console.error(err));
export {};
