```javascript
var box = new BallotBox();
var ballots = [
    ['lion', 'tiger', 'snake'],
    ['tiger', 'bear'],
    ['lion', 'elephant'],
    ['lion', 'donkey'],
    ['tiger', 'lion'],
    ['snake', 'bear'],
    ['donkey', 'bear'],
    ['eagle', 'snake'],
    ['elephant', 'snake']
];
ballots.map(box.addBallot.bind(box));
var rounds = box.calculateRounds();
var election = new Election(rounds, box.rounds);
console.log(election.nextElectorate(2)); // lion
console.log(election.nextElectorate(2)); // tiger
console.log(election.nextElectorate(2)); // snake
console.log(election.nextElectorate(2)); // bear
console.log(election.nextElectorate(2)); // error due to tie


round 0
new threshold of 3
lion has 3 which passes
tiger has 2 which fails
snake has 1 which fails
bear has 0 which fails
elephant has 1 which fails
donkey has 1 which fails
eagle has 1 which fails
winner is lion
Object {name: "lion", rounds: Array[3]}
round 0
new threshold of 2
tiger has 2 which passes
snake has 1 which fails
bear has 0 which fails
elephant has 1 which fails
donkey has 1 which fails
eagle has 1 which fails
winner is tiger
Object {name: "tiger", rounds: Array[3]}
round 0
new threshold of 1
snake has 1 which passes
bear has 0 which fails
elephant has 1 which passes
donkey has 1 which passes
eagle has 1 which passes
sorting snake and elephant
sorting elephant and donkey
sorting donkey and eagle
round 1
new threshold of 3
snake has 3 which passes
bear has 3 which passes
elephant has 2 which fails
donkey has 2 which fails
eagle has 1 which fails
sorting snake and bear
threshold was met. tie so far.
round 2
new threshold of 4
snake has 4 which passes
bear has 3 which fails
winner is snake
Object {name: "snake", rounds: Array[3]}
round 0
new threshold of 1
bear has 0 which fails
elephant has 1 which passes
donkey has 1 which passes
eagle has 1 which passes
sorting elephant and donkey
sorting donkey and eagle
round 1
new threshold of 3
bear has 3 which passes
elephant has 2 which fails
donkey has 2 which fails
eagle has 1 which fails
winner is bear
Object {name: "bear", rounds: Array[3]}
round 0
new threshold of 1
elephant has 1 which passes
donkey has 1 which passes
eagle has 1 which passes
sorting elephant and donkey
sorting donkey and eagle
round 1
new threshold of 2
elephant has 2 which passes
donkey has 2 which passes
eagle has 1 which fails
sorting elephant and donkey
threshold was met. tie so far.
round 2
elephant has 2 which passes
donkey has 2 which passes
sorting elephant and donkey
threshold was met. tie so far.
could not break the tie. possible candidates are elephant,donkey
```
