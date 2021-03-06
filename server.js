const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const path = require('path');

const app = express();

// Bodyparser Middleware
app.use(express.json());

// DB Config
const db = config.get("mongoURI");

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true, // Deprecation fix
    useUnifiedTopology: true, // Deprecation fix
    useCreateIndex: true, // Deprecation fix
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// Use Routes
const itemRoutes = require("./routes/api/items");
app.use("/api/items", itemRoutes);

const userRoutes = require("./routes/api/users");
app.use("/api/users", userRoutes);

const authRoutes = require("./routes/api/auth");
app.use("/api/auth", authRoutes);

// Images Route using static
const imagesDir = "./client/public/images";
app.use("/images", express.static(imagesDir));

// Serve static assets if in production
if(process.env.NODE_ENV ==='production'){
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
