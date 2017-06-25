const orm = require('../config/orm.js');

let burgers = {
    all: (cb) => {
        orm.selectAll('burgers', (res) => {
            cb(res);
        })
    },

    add: (burger, cb) => {
        orm.insertOne('burgers', 'burger_name', burger, (res) =>{
            cb(res);
        })
    },

    devour: (burgerId, cb) =>{
        orm.updateOne('burgers', 'devoured', 1, 'id', burgerId, (res) => {
            cb(res);
        })
    }
}

module.exports = burgers; //links to burgers_controller.js