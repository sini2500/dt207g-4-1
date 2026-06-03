const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cors({
    origin: "https://dt207g-4-sini2500.netlify.app",
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
const User = require("./schema.js");

// registrera
app.post("/api/register", async (req, res) => {

    try {
        const { username, password } = req.body;

        // om något saknas, ge error
        if (!username || !password) {
            return res.status(400).json({
                message: "Användarnamn och lösenord krävs"
            });
        }

        // finns användaren redan?
        const oldUser = await User.findOne({ username });

        if (oldUser) {
            return res.status(409).json({
                message: "En användare finns redan med det namnet"
            });

        }

        // hasha lösenordet
        const passwordHash = await bcrypt.hash(password, 10);

        // slumpa fram en kattbild
        const newCat = await fetch("https://cataas.com/cat?json=true");
        const catData = await newCat.json();
        const catUrl = `https://cataas.com${catData.url}`;

        // skapa ny användare
        const user = new User({ username: username, password: passwordHash, cat: catUrl });

        // spara användaren
        await user.save();

        // allt gick bra
        res.status(201).json({
            message: "Användare skapad utan problem"
        });

    } catch (error) {

        // allt gick inte bra
        res.status(500).json({
            message: error.message
        });

    }

});

// logga in
app.post("/api/login", async (req, res) => {

  try {
      const result = await WorkExperience.find();

      res.json(result);

  } catch (error) {

      res.status(500).json({
          message: error.message
      });
  }

});

// hämta data för inloggad sida
app.get("/api/dashboard", async (req, res) => {

  try {
      const result = await WorkExperience.find();

      res.json(result);

  } catch (error) {

      res.status(500).json({
          message: error.message
      });
  }

});