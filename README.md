# RPN.js

## Dependencies
To run this you will need Node.js @ version 4.
Download it [here](https://nodejs.org/en/).

## Running the Calculator
Once you've cloned the repo and installed Node, you run the calculator from the command line of Terminal (I'm presuming a nix terminal BTW).

You can either interact with the calculator manually via terminal or feed it a file via stdin.

To run manually via terminal:
`node rpn.js`

To feed the calculator a file:
`node rpn.js < input.txt`

To feed the calculator a file and have the calculator output a file:
`node rpn.js < input.txt > output.txt`

## This calculator is hella simple
It expects one number or operator per line and will error if you try any funny business. Otherwise, you're gonna have so much fun calculating. Cheers!

## Solution Rationale 
In keeping with my principles as an engineer, I made this as lean as possible. It's not gold-plated. However, I did strive to make it organized and easy to follow. That said, if I could enhance this I have one thing in mind.

Instead of throwing an error for invalid or undefined behavior, I'd keep the current state of the calculator and give the user meaningful feedback so they could continue the chain of calculation without losing the work they've done so far. It wouldn't be tough to do that with the code I have, but I wasn't sure if your reviewer wanted to manually interact with the app or feed it a file. Thus, I throw an error and exit. It would be tough to give feedback to a file :)
