const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
};

//this gets all the skills on the page in a list
function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
    });
};

//this shows one skill on a separate page
function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    });
};

//don't need to link this to models bc this page doesn't need any information from it
//this is followed by the 'create' function
function newSkill(req, res) {
    res.render('skills/new')
}

//this passes the input the user gave to the model to create a new skill
function create(req, res) {
    Skill.create(req.body);
    res.redirect('/skills');
}

//this passes the id of the item that the user wants to delete
function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}