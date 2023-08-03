const express = require("express");
const routes = require("./routes");
const http = require("http");
const cors = require("cors");
const connectToDatabase = require("./database");
const app = express();
const port = process.env.PORT || 4000;

const corsOption = {
  origin: "*",
};

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({ error: err.message });
});

async function startServer() {
  await connectToDatabase();

  const httpServer = http.createServer(app);

  httpServer.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
}

module.exports = startServer;
