function BallotBox() {
    this.rounds = 0;
    this.votes = {};

    this.addBallot = function (ballot) {
        ballot.map(function (name, round) {
            this.votes[name] = this.votes[name] || [];
            this.votes[name][round] = (this.votes[name][round] || 0) + 1;
            this.rounds = Math.max(this.rounds, round + 1);
        }.bind(this));
    };

    this.calculateRounds = function () {
        return Object.keys(this.votes).map(function (name) {
            var rounds = [];
            var sum = 0;
            for (var round = 0; round < this.rounds; round++) {
                sum += (this.votes[name][round] || 0);
                rounds.push(sum);
            }
            return {
                name: name,
                rounds: rounds
            };
        }.bind(this));
    };
}

function Election(candidates, rounds) {
    this.nextElectorate = function (threshold) {
        var winner = this.nextWinners(candidates, 0, threshold);
        var index = candidates.indexOf(winner);
        if (index !== -1) {
            candidates.splice(index, 1);
        }
        console.log('winner is ' + winner.name);
        return winner;
    };

    this.nextWinners = function (candidates, round, threshold) {
        var votes = 0;
        for (var i = round; i < rounds; i++) {
            console.log('round ' + i);
            var leaders = candidates
                .map(function (candidate) {
                    var old = votes;
                    votes = Math.max(votes, candidate.rounds[i]);
                    if (old !== votes) {
                        console.log('new threshold of ' + votes);
                    }
                    return candidate;
                })
                .filter(function (candidate) {
                    console.log(candidate.name + ' has ' + candidate.rounds[i] + ' which ' + (candidate.rounds[i] >= votes ? 'passes' : 'fails'));
                    return candidate.rounds[i] >= votes;
                })
                .sort(function (a, b) {
                    console.log('sorting ' + a.name + ' and ' + b.name);

                    return b.rounds[i] - a.rounds[i];
                });

            if (leaders.length === 1 && votes >= threshold) {
                return leaders.shift();
            }

            if (votes >= threshold) {
                console.log('threshold was met. tie so far.');
                candidates = leaders;
            }
        }

        if (votes >= threshold) {
            console.log('could not break the tie. possible candidates are ' + candidates.map(function (candidate) {
                    return candidate.name;
                })).join(', ');
        } else {
            console.log('no one passed the threshold');
        }
    };
}
