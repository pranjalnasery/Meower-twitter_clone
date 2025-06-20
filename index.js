//creating backend
const express = require("express"); //to bring in the library that  we have installed
const app = express(); //create an application
app.get("/", (req, res) => {
  res.json({
    message: "Meower!!!",
  });
});
app.listen(5000, () => {
  console.log("Listening on http://localhost:5000");
});
