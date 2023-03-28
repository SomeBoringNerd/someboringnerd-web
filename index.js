const express = require('express')
const path = require('path')
const request = require('request');
const app = express()

const projects = require("./static/projects.json")

// EJS thingy
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/pages');

app.use(express.static(path.join(__dirname + '/static')));

app.listen(1234, () => {
    console.log("http://localhost:1234")
})

app.get('/', (req, res) => 
{
    let birth_day = new Date('2/1/2004');
    let today = new Date();

    let diffYear = (Math.abs(birth_day - today) / (1000 * 60 * 60 * 24 * 365.25)).toFixed(0);

    res.render('index', {year: diffYear})
})

app.get('/wh', (req, res) => {
    res.render('wh')
})

app.get('/ttd', (req, res) => {
    res.render('ttd')
})

app.get('/projects', (req, res) => 
{
    res.render('projects', {project_obj : projects})
})

app.get('/social', (req, res) => 
{
    res.render('social')
})

app.get('/about', (req, res) => 
{
    let birth_day = new Date('2/1/2004');
    let tech = new Date('2/1/2017');
    let today = new Date();

    let diffYear = (Math.abs(birth_day - today) / (1000 * 60 * 60 * 24 * 365.25)).toFixed(0);
    let diffYear2 = (Math.abs(tech - today) / (1000 * 60 * 60 * 24 * 365.25)).toFixed(0);
    let pr_no_format;
    request('https://pronoundb.org/api/v1/lookup?platform=discord&id=283205890474115072', { json: true }, (err, _res, body) => {
        if (err) { return console.log(err); }
        pr_no_format = body.pronouns
        res.render('about', {year: diffYear, tech:diffYear2, pronouns: getFormatedPronoun(pr_no_format)})
    });
})


app.get('/api/project', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'projects.json'))
})

app.use(function(req, res, next) {
    res.status(404).render('404');
});

function getFormatedPronoun(pr)
{
    switch(pr){
        case "hh":
                return "he/him";
            case "hi":
                return "he/it";
            case "hs":
                return "he/she";
            case "ht":
                return "he/they";
            case "ih":
                return "it/him";
            case "ii":
                return "it/its";
            case "is":
                return "it/she";
            case "it":
                return "it/they";
            case "shh":
                return "she/he";
            case "sh":
                return "she/her";
            case "si":
                return "she/it";
            case "st":
                return "she/they";
            case "th":
                return "they/him";
            case "ti":
                return "they/its";
            case "ts":
                return "they/she";
            case "tt":
                return "they/they";
            case "unspecified": case "any":
                return "anything you want, I dont care";
            case "ask":
                return "%ASK_ME%"
            case "avoid":
                return "%DONT_USE_PRONOUNS%"
            default:
                return "none";
    }
}