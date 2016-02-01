var express = require('express');
var database = require('sequelize');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var AsciiBanner = require('ascii-banner');
var log4js = require('log4js');
log4js.configure('config/log4js.json', {cwd: '/hms/logs/pos-app/'});
var logger = log4js.getLogger("pos-app");

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
    logger.trace("Request To Pos-api");
    res.json(
        {
            response: 'S1000',
            description: "Success"
        }
    );
});
router.post('/product', function (req, res) {
    var product = req.body;
    logger.trace("Preparing to add Product ", product);
    res.json(req.body);
});
router.put('/product', function (req, res) {
    var product = req.body;
    logger.trace("Preparing to Update Product ", product);
    res.json(req.body);
});
router.delete('/product:id', function (req, res) {
    var product = req.body;
    logger.trace("Preparing to Delete Product ", product);
    res.json(req.body);
});
router.get('/products', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    logger.trace("Get Products List");
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
router.get('/reporting', function (req, res) {

});
router.get('/sell', function (req, res) {

});
router.get('/groups', function (req, res) {

});

router.get('/reporting', function (req, res) {

});
router.get('/products/:id', function (req, res, value) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var productId = req.params.id;
    logger.trace("Get Product with {}", productId);
    var result;
    connection.query('SELECT * from user where id = ' + productId, function (err, rows, fields) {
        if (!err) {
            console.log('Response Is : ', rows);
            result = rows;
            if (result != '') {
                logger.trace("Successfully get Product {}", rows);
                res.json(result);
            } else {
                logger.trace("System Doesn't have Product");
                var errorResponse = {
                    statusCode: "E1000",
                    description: "This user not Found"
                }
                res.json(errorResponse);
            }
        }
        else {
            var errorResponse = {
                statusCode: "E1500",
                description: "Database Connection failed"
            }
            console.log('Error while performing Query.');
            res.json(errorResponse);
        }
    });
    console.log("Exit");

});

router.get('/users', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    logger.trace("Get Users List");
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
AsciiBanner
    .write('pos-app')
    .color('blue')
    .out();


