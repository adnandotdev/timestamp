const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));
 
app.use(express.static("public"));
 
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
 
app.get("/api/:date?", (req, res) => {
  const { date } = req.params;

  let parsedDate;
  if (!date) { 
    parsedDate = new Date();
  } else if (!isNaN(date)) { 
    parsedDate = new Date(parseInt(date));
  } else { 
    parsedDate = new Date(date);
  }
 d
  if (isNaN(parsedDate.getTime())) {
    return res.json({ error: "Invalid Date" });
  }
 
  res.json({
    unix: parsedDate.getTime(),
    utc: parsedDate.toUTCString(),
  });
});
 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Your app is listening on port ${PORT}`);
});
