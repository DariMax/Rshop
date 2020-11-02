//подключаем установленный модуль через команду requre
let express = require('express'); 
//создаем новый объект экземпляр класса express
let app = express();

let port = 3000;

app.listen(port,function(){
    console.log(`node express work on ${port}`);
});

//Далее, чтобы запустить первое приложение
//get - метод обращения

app.get('/',function(req,res){
    res.end('<h1>Hello</h1> my first super landin page');
});


app.get('/cat',function(req,res){
    res.end('<h1>Category</h1>');
});