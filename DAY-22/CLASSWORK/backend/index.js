const express = require('express');
const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).send('Hello World');
});


const data = [
    {
        name: 'John Doe',
        age: 25,
    },
    {
        name: 'Jane Doe',
        age: 24,
    }
]

app.get('/data', (req, res) => {
    if (!data) {
        res.status(404).send('Data not found');
    }else {
        res.status(200).send(data);
    }
});


app.post('/login', (req, res) => {
    try {
        if (req.body.email == "prav") {
            res.status(200).send('Login Success');
        }
        else {
            res.status(400).send('Login Failed');
        }
    } catch (error) {
        
    }
});
 
const port = 8000;


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});