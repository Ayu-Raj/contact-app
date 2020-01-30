const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const client = require('twilio')(
  process.env.TWILIO_ACCOUT_SID,
  process.env.TWILIO_AUTH_TOKEN
);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);

const History = require('./models/History');

app.post('/api/postHistory', (req, res) => {
  
   

      const newHistory = new History({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        otp: req.body.otp,
      });

    
        
          newHistory
            .save()
            .then(history => res.json(history))
            .catch(err => console.log(err));
      
    
  
});

app.get('/api/getHistory',(req, res) => {
  console.log(res.first_name);
}
);

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.post('/api/messages', (req, res) => {
  res.header('Content-Type', 'application/json');
  client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: req.body.to,
      body: req.body.body
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch(err => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);