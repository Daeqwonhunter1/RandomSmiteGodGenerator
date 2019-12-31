const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const {
  Sequelize
} = require('sequelize');

const {
  Gods,
  Items
} = require('./models');



const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(logger('dev'));


app.get("/godList", async (req, res) => {
  const godlist = await Gods.findAll()
  res.json({
    godlist
  })
})

app.get("/items/physical", async (req, res) => {
  const itemlist = await Items.findAll({
    where: {
      isPhysical: true,
      SpecialItem: null
    },
    order: Sequelize.fn('RANDOM'),
    limit:6
  })
  res.json({
    itemlist
  })
})

app.get("/items/specialphysical", async (req, res) => {
  const itemlist = await Items.findAll({
    where: {
      isPhysical: true,
      SpecialItem: null
    },
    order: Sequelize.fn('RANDOM'),
    limit:5
  })
  res.json({
    itemlist
  })
})


app.get("/items/magical", async (req, res) => {
  const itemlist = await Items.findAll({
    where: {
      isMagical: true
    },
    order: Sequelize.fn('RANDOM'),
    limit:6
  })
  res.json({
    itemlist
  })
})



app.get("/godList/:id", async (req, res) => {
  const id = req.params.id
  const godlist = await Gods.findByPk(id)
  res.json({
    godlist
  })
})

app.get("/items", async (req, res) => {
  const itemlist = await Items.findAll()
  res.json({
    itemlist
  })
})


app.get("/items/:id", async (req, res) => {
  const id = req.params.id
  const itemlist = await Items.findByPk(id)
  res.json({
    itemlist
  })
})






app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});