const express = require('express')
const path = require('path')

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

app.get('/api/project', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'projects.json'))
})

app.use(function(req, res, next) {
    res.status(404).render('404');
});

/*


app.get('/pbm', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'html', 'pbm.html'))
})

app.get('/sitemap.xml', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'html', 'sitemap.xml'))
})

app.get('/Robots.txt', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'html', 'Robots.txt'))
})*/