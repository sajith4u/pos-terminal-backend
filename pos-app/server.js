var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 9090;

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
                    id: '00001', name: 'Burger1', price: "Rs 200/-"
                },
                {id: '00002', name: 'Burger2', price: "Rs 300/-"},
                {id: '00003', name: 'Burger3', price: "Rs 400/-"},
                {id: '00004', name: 'Burger4', price: "Rs 500/-"},
                {id: '00005', name: 'Burger5', price: "Rs 600/-"},
                {id: '00006', name: 'Burger6', price: "Rs 700/-"}
            ]
        }
    );
});

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);


