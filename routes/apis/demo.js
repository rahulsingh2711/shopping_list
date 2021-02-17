const express = require('express');
const routerd = express.Router();

//schema importing

const Data = require('../../models/Demo');

//GET method

routerd.get('/',(req,res) =>{
    Data.find()
        .sort({age: -1})
        .then(data => res.json(data))
});

routerd.post('/',(req,res) =>{
    const newData = new Data({
        name : req.body.name,
        age  : req.body.age,
        mob  :req.body.mob
    });

    newData.save()
        .then(data => res.json(data));
});


routerd
    .delete('/:id',(req,res) => {
      Data.findById(req.params.id).then(data =>
         data.remove().then(() => res.json({ success : true}))
      )
      .catch(err => res.status(404).json({success : false}));
});


module.exports = routerd;

