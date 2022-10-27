const express =require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
const books = require('./data/books.json');


app.get('/', (req, res) =>{
    res.send('hi');
});

app.get('/all-course', (req, res) =>{
    res.send(courses);
});



app.get('/books/boi/:id', (req, res) =>{
    const id = req.params.id;
    const s_boi =books.find(n => n.id === id);
    res.send(s_boi);
});



app.get('/books/:id', (req , res)=>{
    const id = req.params.id;
    if(id== '00'){
        res.send(books);

    }
    else{
        const s_books =books.filter(n => n.courses_id === id);
        res.send(s_books);

    }
   
});

app.get('/books', (req, res) =>{
    res.send(books);
});

app.listen(port, () => {
    console.log('port', port);
})