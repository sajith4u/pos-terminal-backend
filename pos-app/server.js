var express = require('express');
var database = require('sequelize');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'pos_api'
});


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 9091;

var router = express.Router();

router.get('/', function (req, res) {
    res.json(
        {
            response: 'S1000',
            description: "Success"
        }
    );
});

router.get('/products', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.json(
        {
            product: [
                {
                    id: '00001',
                    name: 'Burger1',
                    price: "Rs 200/-"
                },
                {
                    id: '00002',
                    name: 'Burger2',
                    price: "Rs 300/-"
                },
                {
                    id: '00003',
                    name: 'Burger3',
                    price: "Rs 400/-"
                },
                {
                    id: '00004',
                    name: 'Burger4',
                    price: "Rs 500/-"
                },
                {
                    id: '00005',
                    name: 'Burger5',
                    price: "Rs 600/-"
                },
                {
                    id: '00006',
                    name: 'Burger6',
                    price: "Rs 700/-"
                }
            ]
        }
    );
});

router.get('/products/:id', function (req, res, value) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var productId = req.params.id;
    console.log("Prodcut Id : " + productId);
    var result;
    connection.query('SELECT * from user', function (err, rows, fields) {
        connection.end();
        if (!err) {
            console.log('The solution is: ', rows);
            result = this.rows;

        }
        else {
            console.log('Error while performing Query.');
        }
    });
    res.json(result);

});

router.get('/users', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.json(
        {
            users: [
                {
                    id: '89611253',
                    firstName: "John",
                    name: 'Winters',
                    birthDate: "1991/01/27",
                    points: 200,
                    joinedDate: "2012/12/02",
                    history: {
                        items: [{
                            itemName: "Chicken Burger",
                            datePurchased: "2015/12/05",
                            price: "Rs 250/-"
                        }]
                    }
                },
                {
                    id: '89611253',
                    firstName: "John",
                    name: 'Winters',
                    birthDate: "1991/01/27",
                    points: 200,
                    joinedDate: "2012/12/02",
                    history: {
                        items: [{
                            itemName: "Chicken Burger",
                            datePurchased: "2015/12/05",
                            price: "Rs 250/-"
                        }]
                    }
                },
                {
                    id: '89611253',
                    firstName: "John",
                    name: 'Winters',
                    birthDate: "1991/01/27",
                    points: 200,
                    joinedDate: "2012/12/02",
                    history: {
                        items: [{
                            itemName: "Chicken Burger",
                            datePurchased: "2015/12/05",
                            price: "Rs 250/-"
                        }]
                    }
                },
                {
                    id: '89611253',
                    firstName: "John",
                    name: 'Winters',
                    birthDate: "1991/01/27",
                    points: 200,
                    joinedDate: "2012/12/02",
                    history: {
                        items: [{
                            itemName: "Chicken Burger",
                            datePurchased: "2015/12/05",
                            price: "Rs 250/-"
                        }]
                    }
                },
                {
                    id: '89611253',
                    firstName: "John",
                    name: 'Winters',
                    birthDate: "1991/01/27",
                    points: 200,
                    joinedDate: "2012/12/02",
                    history: {
                        items: [{
                            itemName: "Chicken Burger",
                            datePurchased: "2015/12/05",
                            price: "Rs 250/-"
                        }]
                    }
                },
                {
                    id: '89611253',
                    firstName: "John",
                    name: 'Winters',
                    birthDate: "1991/01/27",
                    points: 200,
                    joinedDate: "2012/12/02",
                    history: {
                        items: [{
                            itemName: "Chicken Burger",
                            datePurchased: "2015/12/05",
                            price: "Rs 250/-"
                        }]
                    }
                }
            ]
        }
    );
});

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);


