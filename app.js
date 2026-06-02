const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cors({
    origin: "https://dt207g-3-sini2500.netlify.app",
}));

// anslut till databasen (Atlas) och starta appen
mongoose.connect(process.env.MONGO_STRING).then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}).catch((error) => {
    console.log(error);
});

// schema
const WorkExperience = require("./schema.js");

/** hämta alla poster */
app.get("/api/workexperience", async (req, res) => {

  try {
      const result = await WorkExperience.find();

      res.json(result);

  } catch (error) {

      res.status(500).json({
          message: error.message
      });
  }

});

/** hämta en post */
app.get("/api/workexperience/:id", async (req, res) => {

  try {

      const result = await WorkExperience.findById(req.params.id);

      if(!result) {
          return res.status(404).json({
              message: "Post hittades inte"
          });
      }

      res.json(result);

  } catch(error) {

      res.status(500).json({
          message: error.message
      });
  }

});

/** skapa en ny post */
app.post("/api/workexperience", async (req, res) => {

  try {

      const result = new WorkExperience(req.body);

      await result.save();

      res.status(201).json({
          message: "Post skapad", result
      });

  } catch (error) {

      res.status(400).json({
          message: error.message
      });
  }

});

/** uppdatera en post */
app.put("/api/workexperience/:id", async (req, res) => {

  try {

      const result = await WorkExperience.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

      if(!result) {
          return res.status(404).json({
              message: "Post hittades inte"
          });
      }

      res.json({
          message: "Post uppdaterad",
          updated: result
      });

  } catch (error) {

      res.status(400).json({
          message: error.message
      });
  }

});

/** radera en post */
app.delete("/api/workexperience/:id", async (req, res) => {

  try {

      const result = await WorkExperience.findByIdAndDelete(req.params.id);

      if(!result) {
          return res.status(404).json({
              message: "Post hittades inte"
          });
      }

      res.json({
          message: "Post raderad"
      });

  } catch (error) {

      res.status(500).json({
          message: error.message
      });
  }

});