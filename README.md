# RPN.js

## Dependencies
To run this you will need Node.js @ version 4.
Download it [here](https://nodejs.org/en/).

## Running the Calculator
Once you've cloned the repo and installed Node, you run the calculator from the command line of Terminal (I'm presuming a *nix terminal BTW).

You can either interact with the calculator manually via terminal or feed it a file via stdin.

To run manually via terminal:
`node rpn.js`

To feed the calculator a file:
`node rpn.js < input.txt`

To feed the calculator a file and have the calculator output a file:
`node rpn.js < input.txt > output.txt`

## This calculator is hella simple
It expects one number or operator per line and will error if you try any funny business. Otherwise, you're gonna have so much fun calculating. Cheers!
