const config = require("./utils/config");
const mongoose = require("mongoose");
const express = require("express");
const { info, error } = require("./utils/logger");
// require("dotenv").config();

const app = express();

const {
  requestLogger,
  unknownEndpoint,
  errorHandler,
} = require("./utils/middleware");
const blogRouter = require("./controllers/blog-list");

const mongoUrl = config.MONGODB_URI;
mongoose
  .connect(mongoUrl)
  .then(() => info("Connected"))
  .catch(() => info("Connection failed"));
const PORT = config.PORT;
app.listen(PORT, () => {
  info(`Server running on port ${PORT}`);
});

app.use(requestLogger);
app.use("/api/blogs", blogRouter);
app.use(unknownEndpoint);
app.use(errorHandler);
