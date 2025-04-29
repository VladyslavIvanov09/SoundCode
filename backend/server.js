const express = require('express');
const app = express();
const { sequelize } = require('./models');
const session = require("express-session");
const cors = require("cors");
const http = require("http");
const server = http.createServer(app);

const PORT = 3000;

app.use(
    session({
      secret: process.env.SECRET_KEY || "secret_key",
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false },
    })
  );

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Server is OK!');
});

app.get("/health", async (req, res) => {
    try {
      await sequelize.authenticate();
      res.status(200).json({ status: "ok" });
    } catch (error) {
      console.error("Health check failed:", error);
      res.status(500).json({ status: "error", error: "Database connection failed" });
    }
  });

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully.");
    server.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });
