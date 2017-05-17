var express = require('express');
var app = express();
var multer  = require('multer')
var parse = require('csv-parse');
var fs = require('fs');
var cors = require('cors');
var router = express.Router();
var bodyParser = require('body-parser');
var upload = multer({dest : '/public/uploads'});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


// router.post('/csv1',function(req,res){
//     console.log("hey");
//     res.json({ 
//         bitch : 'heuyasd'

//     });
// });

router.post('/csv',upload.single('myfile'),function(req,res){
    var file  = req.file;

    
    fs.createReadStream(file.path).pipe(parse()).on('data',function(data){
        console.log(data + "this is data");
    });

    rs = fs.createReadStream(file.path);
    parser = parse({columns: true}, function(err, data){
        console.log(data);
        res.json(data);
    })
    rs.pipe(parser);
});

router.get('/hello',function(req,res){
    res.json({
        uzair : "fine"
    });
});

app.use(express.static(__dirname + '/public'));

router.post('/new',function(req,res){
    rs = fs.createReadStream(__dirname+'/public/uploads/data-1.csv');
    parser = parse({columns: true}, function(err, data){
    console.log(data);
    })
    rs.pipe(parser);

});
app.use('/', router);
app.listen(3000);
