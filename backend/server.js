const mongoose = require("mongoose");
const getSecret = require("./secret");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Data = require("./data");

const API_PORT = 3001;
const app = express();
var cors = require('cors');
app.use(cors());
const router = express.Router();

mongoose.connect(getSecret("dbUri"));
let db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

router.get("/", (req, res) => {
  res.json({ message: "HELLOW WORLDUUHHHH" });
});

router.get("/getData", (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({data });
  });
});
router.get('/message/:id',async(req, res) => {
  const {id} =req.params;
  const messageData = await Data.findOne({
     "id": id
  });
  res.send(messageData);
});


router.post("/updateData", (req, res) => {
  const { id, update } = req.body;
  Data.findByIdAndUpdate(id, update, err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

router.delete("/deleteData", (req, res) => {
  const { id } = req.body;
  Data.findByIdAndRemove(id, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

router.post("/putData", async(req, res) => {
  let data = new Data();
  const { id, message } = req.body;
   
  let idRequest= id;
  if(!idRequest && idRequest !==0){
    const lastIdRecord =  await Data.findOne({}).sort({"id": -1});
    idRequest=lastIdRecord.id+1;
  }

   if (!message) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  data.message = message;
  data.id = idRequest;

  try {
    await data.save();
    return res.send(data);
  } catch (err) {
    return res.send(404,err)
  }
  
});

app.use("/api", router);

app.listen(API_PORT, () => console.log(`LISTENING ON UHH PORT ${API_PORT}`));