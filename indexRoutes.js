const express = require("express");
const fs = require("fs");
const path = require("path");

const route = express.Router();

route.get("/files", async (req, res) => {
  try {
    const timestamp = new Date().toISOString();
    const filePath = path.join(__dirname, `timestamp.txt`);
    fs.writeFile(filePath, timestamp, (err) => {
      if (err) {
        return console.error("Error writing file:", err);
      }
      res.status(200).json({message:`TimeStamp Created created successfull ${timestamp}`})
    });
  } catch (error) {
    res.sendStatus(400);
  }
});

route.get("/showfile", async (req, res) => {
  try {
    
  } catch (error) {
    console.log(error);
    
    res.sendStatus(400);
  }
});

module.exports = route;
