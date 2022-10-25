const express =require('express')
const app = express();
const port = process.env.PORT || 5000;

const courses = require('./data/courses.json');


app.get('/', (req, res) =>{
    res.send('hi');
});

app.get('/all-course', (req, res) =>{
    res.send(courses);
});

app.listen(port, () => {
    console.log('port', port);
})