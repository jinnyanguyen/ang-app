const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;

// Serve static Angular files
app.use(express.static(__dirname));
app.use(express.static(__dirname + "/dist/ang-app/browser"));

// Route to Angular index file
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/ang-app/browser/index.html"));
});

// Start server
app.listen(port, () => {
  console.log("Server running on port " + port);
});