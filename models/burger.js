const orm = require('../config/orm.js');

let burgers = {
    all: (cb) => {
        orm.selectAll('burgers', (res) => {
            cb(res);
        })
    }
}

module.exports = burgers; //links to burgers_controller.js