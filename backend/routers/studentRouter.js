const express = require('express');
const {Student,Gif} = require('../models/associations');

const app = express.Router();

app.get('/:id', async (req, res) => {
    console.log('connected through student router');
    const {id} = req.params;
    let student = await Student.findByPk(id, {include: Gif});
    // let thisStudent = await Student.findByPK(id, {include: Gif})
    res.json(student);
});

app.put('/:id', async (req,res) => {
    const {id} = req.params;
    const {url} = req.body;

    try {
        console.log(`Changing url for ${id}`);
        console.log(url);
        let gifToUpdate = await Gif.findByPk(id);
    
        gifToUpdate.update(url);
        res.send('okay');
    } catch (err) {
        console.log(err, "no update");
    }


})

const studentRouter = app;

module.exports = studentRouter;