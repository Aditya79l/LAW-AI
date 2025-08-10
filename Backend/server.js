const express = require("express");
const cors = require("cors");
require("dotenv").config();

const usersRouter = require("./routes/usersRouter");
const connectDB = require("./utils/connectDB");
const { errorHandler } = require("./Middlewares/errorMiddleware");

const app = express();
const PORT = process.env.PORT || 7000;

connectDB();

// CORS configuration
app.use(
  cors({
    origin: ["http://localhost:5173"], // Add your frontend URLs
    credentials: true,
  })
);

app.use(express.json());
app.use("/api/v1/users", usersRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
