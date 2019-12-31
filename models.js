const {
  Sequelize
} = require('sequelize');

const sequelize = new Sequelize({
  database: 'gods_db',
  dialect: 'postgres',
  define: {
    underscored: true
  }
});

class Gods extends Sequelize.Model {}
Gods.init({
  name: Sequelize.STRING,
  class: Sequelize.STRING,
  pantheon: Sequelize.STRING,
  powerType: Sequelize.STRING,
  attackType: Sequelize.STRING,
  img_url: Sequelize.TEXT
}, {
  sequelize,
  modelName: 'gods'

})


class Items extends Sequelize.Model {}
Items.init({
  Item: Sequelize.STRING,
  isPhysical: Sequelize.BOOLEAN,
  isMagical: Sequelize.BOOLEAN,
  Choosen: Sequelize.BOOLEAN,
  SpecialItem: Sequelize.BOOLEAN,
  img_url: Sequelize.TEXT
}, {
  sequelize,
  modelName: 'items'
})





module.exports ={
  Gods,
  Items,
  sequelize
}