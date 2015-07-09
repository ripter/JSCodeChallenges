# JSCodeChallenges
JavaScript Code Challenges. Improve your skills by winning each challenge

##How to use

Clone the repo:

    shell$ git clone git@github.com:ripter/JSCodeChallenges.git
    
Each challenge is a seprate folder. Navigate to the challenge you want to complete. Example, iso8601 challenge.

    shell$ cd JSCodeChallenges/medium/iso8601

Run the tests to see if the code passes: (it won't pass on fresh checkout, your challenge is to write the code to make it pass.)

    shell$ make

Edit the source file to make changes.

     shell$ emacs src/index.js


Repeat running the test until everything has passed.


##Prerequisites
* [node](https://nodejs.org/) or [IO.js](https://iojs.org/en/index.html)
* [npm](https://docs.npmjs.com/)

##Tips
Most challenges do not allow the use of 3rd party libraries. If a library is allowed, it will be included for you in `src/index.js`

Use the tests as documentation. They are always located in `test/`