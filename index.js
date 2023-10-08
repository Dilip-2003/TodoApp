// console.log("hello");
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();
 
// middle ware for external css 

app.use(express.static('public'));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

let newItems = [];
app.get('/',(req,res) =>{

    let options = {
        weekday:'long',year:'numeric',month:'long',day:'numeric'
    };

    let today = new Date();
    let day = today.toLocaleDateString('en-us',options);

    // console.log(day);
    res.render('list.ejs',{kindOfDay: day,newListItem:newItems});
});


app.post('/',(req,res) =>{
    let newItem = req.body.Items;
    newItems.push(newItem);
    res.redirect('/'); 
});







app.listen(3020, () =>{
    console.log("the server is running at port 3020");
});