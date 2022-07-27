const express = require("express");
const path = require("path");
const cluster = require("cluster");
const numCPUs = require("os").cpus().length;
const cors = require('cors');
const isDev = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 5000;
const axios = require('axios');
require('dotenv').config()

// Multi-process to utilize all CPU cores.
if (!isDev && cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.error(
      `Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`
    );
  });
} else {
  const app = express();

  const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,       
  }
  app.use(cors(corsOptions));

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, "../react-ui/build")));

  // Answer API requests.
  app.get("/api", (req, res) => {
    res.set("Content-Type", "application/json");
    res.send('{"message":"Hello from the custom server!"}');
  });

  app.get('/api/teams/:teamID', (req,res)=>{
    axios.get('https://balldontlie.io/api/v1/teams/' + req.params.teamID)
    .then((team)=>res.send(team.data));
  })

  app.get('/api/teams', (req,res)=>{
      axios.get('https://balldontlie.io/api/v1/teams')
      .then((teams)=>res.send(teams.data));
  })

  app.get('/api/weather/:location', (req,res)=>{
    axios.get('https://api.weatherapi.com/v1/current.json?key=' + process.env.WEATHER_API_KEY + '&q=' + req.params.location + '&aqi=no')
    .then((weather)=>res.send(weather.data))
  })

  // All remaining requests return the React app, so it can handle routing.
  app.get("*", (request, response) => {
    response.sendFile(
      path.resolve(__dirname, "../react-ui/build", "index.html")
    );
  });

  app.listen(PORT, () => {
    console.error(
      `Node ${isDev ? "dev server" : `cluster worker ${process.pid}`
      }: listening on port ${PORT}`
    );
  });
}
