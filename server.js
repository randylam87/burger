const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');
const methodOverride = require('method-override');
const PORT = process.env.PORT || 1337;
const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(bodyParser.text({
    type: 'text/html'
}));

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burger_db",
    port: 3306
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

app.get('/', (req, res) => {
    connection.query('SELECT * FROM burgers', function (error, results, fields) {
        if (error) throw error;
        console.log(results);
        res.render('index', { burgers: results });
    });

});