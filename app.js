// Import dependencies
const fs = require("fs");
const { google } = require("googleapis");

const service = google.sheets("v4");
const credentials = require("./credentials.json");

// Configure auth client
const authClient = new google.auth.JWT(
    credentials.client_email,
    null,
    credentials.private_key.replace(/\\n/g, "\n"), ["https://www.googleapis.com/auth/spreadsheets"]
);

// static link to .html and .css in public directory
const express = require("express");
const app = express();
app.use(express.static(__dirname));
app.use(express.static("public"));
app.listen(8080);

// const express = require("express");
// const app = express();
// const path = require("path");
// const router = express.Router();

// app.set("view engine", "pug");
// app.set("views", path.join(__dirname, "views"));

// router.get("/", (req, res) => {
//     res.render("index");
// });

// router.get("/about", (req, res) => {
//     res.render("about", { title: "Hey", message: "Hello there!" });
// });

// app.use("/", router);
// app.listen(process.env.port || 3000);



function form() {
    var qs, js, q, s, d = document,
        gi = d.getElementById,
        ce = d.createElement,
        gt = d.getElementsByTagName,
        id = "typef_orm_share",
        b = "https://embed.typeform.com/";
    if (!gi.call(d, id)) {
        js = ce.call(d, "script");
        js.id = id;
        js.src = b + "embed.js";
        q = gt.call(d, "script")[0];
        q.parentNode.insertBefore(js, q)
    }
}

app.get("/", (req, res) => {
    res.render("index", { form: form });
});


(async function () {
    try {

        // Authorize the client
        const token = await authClient.authorize();

        // Set the client credentials
        authClient.setCredentials(token);

        // Get the rows
        const res = await service.spreadsheets.values.get({
            auth: authClient,
            spreadsheetId: "1u6y1GHeFSDJhfe67v_xjNNqVDSj0pU7yE_tihHK9uRA",
            range: "A:H",
        });

        // All of the answers
        const answers = [];

        // Set rows to equal the rows
        const rows = res.data.values;

        // Check if we have any data and if we do add it to our answers array
        if (rows.length) {

            // Remove the headers
            rows.shift()

            // For each row
            for (const row of rows) {
                answers.push({
                    timeStamp: row[0],
                    feeling: row[1],
                    energy: row[2],
                    connection: row[3],
                    sleep: row[4],
                    mood: row[5],
                    genre: row[6],
                    sleepQuality: row[7]
                });
            }

        } else {
            console.log("No data found.");
        }

        // Saved the answers
        fs.writeFileSync("answers.json", JSON.stringify(answers), function (err, file) {
            if (err) throw err;
            console.log("Saved!");
        });

        exports.answers = answers; // trying to export to playlist_algo.js

    } catch (error) {

        // Log the error
        console.log(error);

        // Exit the process with error
        process.exit(1);

    }

})();
