const express = require('express')
const app = express()
const path = require('path')
const port = 3001

/*
* Default route for the web app
*/
app.use(express.static(path.join(__dirname, 'public')));


/*
* Route to render HTML Page
*/
app.get('/homepage', (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, './')
    })
})

app.get('/cars', (req, res) => {
    res.sendFile('cars.html', {
        root: path.join(__dirname, './')
    })
})

app.get('/faqs', (req, res) => {
    res.sendFile('faqs.html', {
        root: path.join(__dirname, './')
    })
})

app.listen(port, () => console.log(`URL is localhost:${port}/homepage`))
console.log(`Use 'rs' to restart server!`)