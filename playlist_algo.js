const app = require('./app');

var lastEntry = app.answers.length - 1;
var submission = answers[lastEntry];

const MOODS = ["Angry", "Happy", "Confused", "Nothing"];
const SLEEPLVLS = ["<1", "2-4", "5-7", "8-10", ">10"];
const GENRES = ["Rock", "Pop", "Metal", "Indie", "Hip Hop"];

// 15 playlists, 3 for each genre (i.e. sad, chill, happy)
// embed spotify code for playlist on html

var score = 0;
var playlistType;

// quantify mood
for (i = 0; i < MOODS.length; i++) {
    if (submission.mood = MOODS[i]) {
        score += i * 2.5;
    }
}

// quantify hrs of sleep
for (i = 0; i < SLEEPLVLS.length; i++) {
    if (submission.sleep = SLEEPLVLS[i]) {
        score += i * 2;
    }
}

score += parseInt(submission.feeling) + parseInt(submission.energy) + parseInt(submission.connection) + parseInt(submission.sleepQuality);

if (score <= 19) {
    playlistType = "sad";
} else if (score >= 20 && score <= 49) {
    playlistType = "chill";
} else if (score >= 50 && score <= 70) {
    playlistType = "happy";
}





